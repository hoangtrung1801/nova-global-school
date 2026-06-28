import { useEffect, useRef, useState } from 'react'
import { ReferencePage } from './components/ReferencePage'
import { siteContent } from './content/siteContent'
import '../references/css/990799c9a52e5c07.css'
import './App.css'

const REFERENCE_TITLE = `${siteContent.title} | Landing Page`
const HTML_CLASS_NAME = '__variable_bd93a5'

const CHAT_COPY = {
  closeLabel: 'Đóng khung chat',
  greeting:
    'Xin chào, em là trợ lý thông tin của đồ án Nova Global School. Thầy/cô muốn tìm hiểu về học phí, quy mô, cơ sở vật chất hay hiệu quả tài chính ạ?',
  openLabel: 'Mở khung chat tư vấn',
  placeholder: 'Nhập câu hỏi của bạn…',
  sendLabel: 'Gửi',
  studentSubtitle: 'Nova Global School',
  studentTitle: 'Trợ lý đồ án',
  suggestions: [
    'Học phí THCS và THPT là bao nhiêu?',
    'Quy mô tuyển sinh tối đa của trường?',
    'Tổng mức đầu tư dự án là bao nhiêu?',
  ],
} as const

type ChatMessage = {
  id: number
  role: 'assistant' | 'user'
  text: string
}

function normalizeVietnamese(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
}

function answerQuestion(question: string) {
  const normalized = normalizeVietnamese(question)

  if (normalized.includes('hoc phi') && normalized.includes('thcs')) {
    return `${siteContent.tuition[0].title} là ${siteContent.tuition[0].value}. ${siteContent.tuition[0].body}`
  }

  if (normalized.includes('hoc phi') && normalized.includes('thpt')) {
    return `${siteContent.tuition[1].title} là ${siteContent.tuition[1].value}. ${siteContent.tuition[1].body}`
  }

  if (
    normalized.includes('hoc phi') ||
    normalized.includes('dong phuc') ||
    normalized.includes('uu dai')
  ) {
    return `${siteContent.tuition[0].value} cho THCS, ${siteContent.tuition[1].value} cho THPT và ${siteContent.tuition[2].value} cho đồng phục. Ngoài ra còn có chiết khấu đóng sớm 5% và ưu đãi tới 10% cho gia đình có từ con thứ hai cùng theo học.`
  }

  if (
    normalized.includes('quy mo') ||
    normalized.includes('hoc sinh') ||
    normalized.includes('cong suat')
  ) {
    return `Trường phục vụ tối đa ${siteContent.overview.stats[2].value} học sinh, tập trung cho lứa tuổi ${siteContent.overview.stats[3].value}. ${siteContent.overview.scale}`
  }

  if (normalized.includes('dien tich') || normalized.includes('quy hoach')) {
    return `Quy mô đất là ${siteContent.overview.stats[0].value} và tổng diện tích sàn xây dựng là ${siteContent.overview.stats[1].value}.`
  }

  if (
    normalized.includes('dau tu') ||
    normalized.includes('tong muc') ||
    normalized.includes('von')
  ) {
    return `${siteContent.finance.capital[0].label}: ${siteContent.finance.capital[0].value}. Cơ cấu vốn gồm ${siteContent.finance.capital[1].value} vốn chủ sở hữu và ${siteContent.finance.capital[2].value} vốn tín dụng tài trợ.`
  }

  if (
    normalized.includes('tai chinh') ||
    normalized.includes('npv') ||
    normalized.includes('irr') ||
    normalized.includes('hoan von')
  ) {
    return `Các chỉ số chính gồm NPV ${siteContent.finance.metrics[0].value}, IRR ${siteContent.finance.metrics[1].value}, B/C ${siteContent.finance.metrics[2].value} và thời gian hoàn vốn ${siteContent.finance.metrics[3].value}.`
  }

  if (normalized.includes('vi tri') || normalized.includes('dia diem') || normalized.includes('da nang')) {
    return siteContent.overview.location
  }

  if (
    normalized.includes('nhan su') ||
    normalized.includes('giao vien') ||
    normalized.includes('ban giam hieu')
  ) {
    return `Nhà trường có ${siteContent.hr.stats[0].value} nhân sự toàn thời gian, ${siteContent.hr.stats[1].value} giáo viên đứng lớp và tỷ lệ ${siteContent.hr.stats[2].value}. ${siteContent.hr.groups[0].body}`
  }

  if (
    normalized.includes('co so vat chat') ||
    normalized.includes('phong hoc') ||
    normalized.includes('the thao') ||
    normalized.includes('thi nghiem')
  ) {
    return `${siteContent.facilities[0].body} ${siteContent.facilities[2].body}`
  }

  return 'Em đã ghi nhận câu hỏi. Trong phiên bản này, em có thể hỗ trợ nhanh các nội dung về vị trí dự án, quy mô tuyển sinh, học phí, cơ sở vật chất, nhân sự và hiệu quả tài chính của Nova Global School.'
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      text: CHAT_COPY.greeting,
    },
  ])

  const nextMessageIdRef = useRef(2)

  const submitQuestion = (question: string) => {
    const trimmedQuestion = question.trim()

    if (!trimmedQuestion) {
      return
    }

    const userMessageId = nextMessageIdRef.current
    nextMessageIdRef.current += 1

    const assistantMessageId = nextMessageIdRef.current
    nextMessageIdRef.current += 1

    setIsOpen(true)
    setInputValue('')
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: userMessageId, role: 'user', text: trimmedQuestion },
      { id: assistantMessageId, role: 'assistant', text: answerQuestion(trimmedQuestion) },
    ])
  }

  return (
    <>
      <div
        aria-hidden={!isOpen}
        aria-label={CHAT_COPY.studentTitle}
        className={[
          'fixed bottom-24 right-5 z-[70] flex w-[min(92vw,380px)] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-line bg-ink-soft/95 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 sm:right-6',
          isOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0',
        ].join(' ')}
        role="dialog"
        style={{ height: 'min(70dvh, 560px)' }}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
            </span>
            <div className="leading-tight">
              <p className="text-[13px] font-semibold text-paper">{CHAT_COPY.studentTitle}</p>
              <p className="text-[10px] font-medium uppercase text-muted">
                {CHAT_COPY.studentSubtitle}
              </p>
            </div>
          </div>
          <button
            aria-label={CHAT_COPY.closeLabel}
            className="rounded-full p-1.5 text-muted transition-colors duration-300 hover:bg-line hover:text-paper"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <svg fill="currentColor" height="18" viewBox="0 0 256 256" width="18">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="chat-stream">
            {messages.map((message) => (
              <div
                key={message.id}
                className={[
                  'chat-bubble',
                  message.role === 'assistant' ? 'chat-bubble--assistant' : 'chat-bubble--user',
                ].join(' ')}
              >
                {message.text}
              </div>
            ))}
          </div>

          {messages.length === 1 ? (
            <div className="chat-suggestions">
              {CHAT_COPY.suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  className="rounded-full border border-line bg-ink/40 px-4 py-2 text-left text-[12.5px] text-muted transition-colors duration-300 hover:border-amber/50 hover:text-paper"
                  type="button"
                  onClick={() => submitQuestion(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <form
          className="flex items-end gap-2 border-t border-line p-3"
          onSubmit={(event) => {
            event.preventDefault()
            submitQuestion(inputValue)
          }}
        >
          <textarea
            aria-label={CHAT_COPY.placeholder}
            className="max-h-28 flex-1 resize-none rounded-xl border border-line bg-ink/60 px-3 py-2.5 text-[13.5px] text-paper placeholder:text-muted/70 focus:border-amber/60 focus:outline-none"
            placeholder={CHAT_COPY.placeholder}
            rows={1}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                submitQuestion(inputValue)
              }
            }}
          />
          <button
            aria-label={CHAT_COPY.sendLabel}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber text-ink transition-all duration-300 hover:bg-amber-dim disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!inputValue.trim()}
            type="submit"
          >
            <svg fill="currentColor" height="18" viewBox="0 0 256 256" width="18">
              <path d="M240,127.89a16,16,0,0,1-8.18,14L63.9,237.9A16.15,16.15,0,0,1,56,240a16,16,0,0,1-15-21.33l27-79.95A4,4,0,0,1,71.72,136H144a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47h-72a4,4,0,0,1-3.79-2.72l-27-79.94A16,16,0,0,1,63.84,18.07l168,95.89A16,16,0,0,1,240,127.89Z" />
            </svg>
          </button>
        </form>
      </div>

      <button
        aria-expanded={isOpen}
        aria-label={CHAT_COPY.openLabel}
        className="fixed bottom-5 right-5 z-[70] grid h-14 w-14 place-items-center rounded-full bg-amber text-ink shadow-lg shadow-amber/20 transition-all duration-300 hover:scale-105 hover:bg-amber-dim active:scale-95 sm:right-6"
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <span
          className={[
            'absolute transition-all duration-300',
            isOpen ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
          ].join(' ')}
        >
          <svg fill="currentColor" height="26" viewBox="0 0 256 256" width="26">
            <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z" />
          </svg>
        </span>
        <span
          className={[
            'absolute transition-all duration-300',
            isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0',
          ].join(' ')}
        >
          <svg fill="currentColor" height="26" viewBox="0 0 256 256" width="26">
            <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
          </svg>
        </span>
      </button>
    </>
  )
}

function App() {
  useEffect(() => {
    const previousLang = document.documentElement.lang
    const hadClass = document.documentElement.classList.contains(HTML_CLASS_NAME)

    document.title = REFERENCE_TITLE
    document.documentElement.lang = 'vi'

    if (!hadClass) {
      document.documentElement.classList.add(HTML_CLASS_NAME)
    }

    return () => {
      document.documentElement.lang = previousLang

      if (!hadClass) {
        document.documentElement.classList.remove(HTML_CLASS_NAME)
      }
    }
  }, [])

  return (
    <div className="reference-clone">
      <ReferencePage />
      <ChatWidget />
    </div>
  )
}

export default App
