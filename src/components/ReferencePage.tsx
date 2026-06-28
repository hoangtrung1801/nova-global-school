import { useEffect, useState } from 'react'
import { siteContent } from '../content/siteContent'

const NAV_ITEMS = [
  { href: '#tong-quan', label: 'Tổng quan' },
  { href: '#dao-tao', label: 'Đào tạo' },
  { href: '#co-so-vat-chat', label: 'Cơ sở vật chất' },
  { href: '#hoc-phi', label: 'Học phí' },
  { href: '#nhan-su', label: 'Nhân sự' },
  { href: '#tai-chinh', label: 'Tài chính' },
  { href: '#kich-ban', label: 'Kịch bản' },
  { href: '#tai-lieu', label: 'Tài liệu' },
  { href: '#thu-vien', label: 'Thư viện' },
] as const

const QUICK_FACTS = [
  { label: 'Địa điểm', value: 'Hòa Xuân, Cẩm Lệ, Đà Nẵng' },
  { label: 'Chủ đầu tư', value: 'Tập đoàn Nguyễn Hoàng (NHG)' },
  { label: 'Phân khúc', value: 'THCS - THPT · 11 đến 17 tuổi' },
  { label: 'Tổng mức đầu tư', value: '152,68 tỷ VNĐ' },
] as const

const FACILITY_IMAGES = [
  siteContent.gallery[3],
  siteContent.gallery[2],
  siteContent.gallery[4],
  siteContent.gallery[1],
  siteContent.gallery[5],
] as const

const SCENARIO_TONES = ['tone-risk', 'tone-caution', 'tone-plan', 'tone-growth', 'tone-peak'] as const

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body?: string
}) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-heading__body">{body}</p> : null}
    </div>
  )
}

export function ReferencePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeScenario, setActiveScenario] = useState(2)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const selectedScenario = siteContent.scenarios[activeScenario]

  return (
    <div className="nova-page">
      <div className="nova-page__backdrop" aria-hidden="true" />

      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="site-shell site-header__inner">
          <a className="brand-mark" href="#top">
            <span className="brand-mark__badge">NGS</span>
            <span className="brand-mark__text">{siteContent.title}</span>
          </a>

          <nav className="site-nav" aria-label="Điều hướng chính">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="button button--ghost site-header__cta" href="#lien-he">
              Liên hệ
            </a>
            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen((currentValue) => !currentValue)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-nav${menuOpen ? ' is-open' : ''}`}>
          <nav aria-label="Điều hướng di động">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="button mobile-nav__cta" href="#lien-he" onClick={() => setMenuOpen(false)}>
              Đăng ký tư vấn
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="hero-section">
          <div className="site-shell hero-layout">
            <div className="hero-copy">
              <p className="hero-copy__eyebrow">Dự án trường liên cấp tại cửa ngõ phía Nam Đà Nẵng</p>
              <h1>{siteContent.title}</h1>
              <p className="hero-copy__subtitle">{siteContent.subtitle}</p>
              <p className="hero-copy__statement">{siteContent.statement}</p>

              <div className="hero-copy__actions">
                {siteContent.ctas.map((cta, index) => (
                  <a
                    key={cta.label}
                    className={`button${index === 0 ? '' : ' button--ghost'}`}
                    href={cta.href}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>

              <dl className="metric-strip">
                {siteContent.overview.stats.map((stat) => (
                  <div key={stat.label} className="metric-strip__item glow-card">
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hero-visual">
              <article className="hero-card glow-card">
                <img alt={siteContent.gallery[0].alt} src={siteContent.heroImage} />
                <div className="hero-card__overlay">
                  <p className="hero-card__tag">Masterplan giáo dục</p>
                  <h2>Hạ tầng hiện đại, mật độ thấp, định hướng quốc tế</h2>
                  <p>
                    Không gian học tập được quy hoạch để đồng thời phục vụ thành tích học thuật,
                    trải nghiệm đa văn hóa và vận hành dài hạn bền vững.
                  </p>
                </div>
              </article>

              <div className="fact-grid">
                {QUICK_FACTS.map((fact) => (
                  <article key={fact.label} className="fact-card glow-card">
                    <p>{fact.label}</p>
                    <strong>{fact.value}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tong-quan" className="content-section">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Giới thiệu tổng quan"
              title="Một mô hình trường liên cấp được đặt đúng vị trí, đúng quy mô và đúng thị trường"
              body="Toàn bộ nội dung phần này được lấy từ blueprint trong thư mục content và triển khai lại thành bố cục dễ đọc hơn trên landing page."
            />

            <div className="overview-grid">
              <article className="copy-card glow-card">
                <h3>Vị trí “tọa độ vàng” kết nối</h3>
                <p>{siteContent.overview.location}</p>
              </article>

              <article className="copy-card glow-card">
                <h3>Chủ đầu tư và đơn vị phát triển</h3>
                <p>{siteContent.overview.developer}</p>
              </article>

              <article className="copy-card copy-card--wide glow-card">
                <h3>Phân khúc đào tạo và công suất thiết kế</h3>
                <p>{siteContent.overview.scale}</p>
              </article>

              <article className="image-card glow-card">
                <img alt={siteContent.gallery[5].alt} src={siteContent.gallery[5].src} />
              </article>
            </div>
          </div>
        </section>

        <section id="dao-tao" className="content-section content-section--muted">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Chương trình đào tạo cốt lõi"
              title="Khung học thuật được thiết kế để đi xa hơn mô hình luyện thi thuần túy"
              body="Nova Global School đặt ngoại ngữ, năng lực học thuật và phát triển con người trong cùng một lộ trình."
            />

            <div className="card-grid card-grid--triple">
              {siteContent.academic.map((item) => (
                <article key={item.title} className="feature-card glow-card">
                  <p className="feature-card__index">{item.title}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="co-so-vat-chat" className="content-section">
          <div className="site-shell facilities-layout">
            <div className="facilities-summary">
              <SectionHeading
                eyebrow="Cơ sở vật chất và hạ tầng kỹ thuật"
                title="Hệ sinh thái vận hành được tổ chức để hỗ trợ cả học tập lẫn đời sống học đường"
                body="Các hạng mục trong thư mục content được chuyển thành từng cụm thông tin riêng để phụ huynh và nhà đầu tư quét nhanh."
              />

              <article className="spotlight-card glow-card">
                <img alt={siteContent.gallery[1].alt} src={siteContent.gallery[1].src} />
                <div className="spotlight-card__body">
                  <h3>Không gian học tập mở, vận hành theo chuẩn dịch vụ trường quốc tế</h3>
                  <p>
                    Từ phòng học đón sáng tự nhiên đến hệ thống nhà ăn, an ninh và xe buýt học
                    đường, toàn bộ cấu phần được định hướng như một campus có chất lượng sống cao.
                  </p>
                </div>
              </article>
            </div>

            <div className="facility-list">
              {siteContent.facilities.map((item, index) => (
                <article key={item.title} className="facility-card glow-card">
                  <img alt={FACILITY_IMAGES[index].alt} src={FACILITY_IMAGES[index].src} />
                  <div className="facility-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hoc-phi" className="content-section content-section--muted">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Chính sách học phí và ưu đãi tuyển sinh"
              title="Một cấu trúc học phí rõ ràng, đi kèm cơ chế giữ giá và khuyến khích đăng ký sớm"
            />

            <div className="tuition-layout">
              <div className="card-grid card-grid--triple">
                {siteContent.tuition.map((item) => (
                  <article key={item.title} className="tuition-card glow-card">
                    <p className="tuition-card__label">{item.title}</p>
                    <h3>{item.value}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>

              <article className="copy-card glow-card">
                <h3>Chính sách đặc quyền mùa tuyển sinh đầu tiên</h3>
                <ul className="bullet-list">
                  {siteContent.incentives.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="nhan-su" className="content-section">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Quy mô và cơ cấu nhân sự"
              title="Tổ chức nhân sự được thiết kế để giữ mật độ phục vụ thấp và vận hành đồng bộ"
            />

            <div className="hr-stats">
              {siteContent.hr.stats.map((stat) => (
                <article key={stat.label} className="stat-card glow-card">
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </article>
              ))}
            </div>

            <div className="card-grid">
              {siteContent.hr.groups.map((group) => (
                <article key={group.title} className="feature-card glow-card">
                  <h3>{group.title}</h3>
                  <p>{group.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tai-chinh" className="content-section content-section--muted">
          <div className="site-shell finance-layout">
            <div>
              <SectionHeading
                eyebrow="Thẩm định hiệu quả tài chính"
                title="Khối tài chính được trình bày lại theo hai lớp: cơ cấu vốn và chỉ số vận hành"
              />

              <div className="card-grid">
                {siteContent.finance.capital.map((item) => (
                  <article key={item.label} className="metric-card glow-card">
                    <p>{item.label}</p>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="finance-metrics">
                {siteContent.finance.metrics.map((metric) => (
                  <article key={metric.label} className="metric-card glow-card">
                    <p>{metric.label}</p>
                    <strong>{metric.value}</strong>
                  </article>
                ))}
              </div>

              <article className="copy-card glow-card">
                <h3>Đóng góp ngân sách và ưu đãi xã hội hóa giáo dục</h3>
                <p>{siteContent.finance.social}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="kich-ban" className="content-section">
          <div className="site-shell scenario-layout">
            <SectionHeading
              eyebrow="Phân tích độ nhạy và tình huống rủi ro"
              title="Bộ chuyển đổi kịch bản giúp đọc nhanh biên độ tài chính trong từng trạng thái vận hành"
            />

            <div className="scenario-tabs" role="tablist" aria-label="Kịch bản vận hành">
              {siteContent.scenarios.map((scenario, index) => (
                <button
                  key={scenario.name}
                  aria-selected={activeScenario === index}
                  className={`scenario-tab ${SCENARIO_TONES[index]}${
                    activeScenario === index ? ' is-active' : ''
                  }`}
                  role="tab"
                  type="button"
                  onClick={() => setActiveScenario(index)}
                >
                  {scenario.name}
                </button>
              ))}
            </div>

            <article className={`scenario-panel glow-card ${SCENARIO_TONES[activeScenario]}`}>
              <div className="scenario-panel__headline">
                <div>
                  <p className="scenario-panel__eyebrow">{selectedScenario.assumption}</p>
                  <h3>{selectedScenario.name}</h3>
                </div>
                <span className="scenario-panel__status">{selectedScenario.status}</span>
              </div>

              <div className="scenario-panel__metrics">
                <div>
                  <p>NPV</p>
                  <strong>{selectedScenario.npv}</strong>
                </div>
                <div>
                  <p>IRR</p>
                  <strong>{selectedScenario.irr}</strong>
                </div>
                <div>
                  <p>Hoàn vốn</p>
                  <strong>{selectedScenario.payback}</strong>
                </div>
              </div>

              <p className="scenario-panel__summary">{selectedScenario.summary}</p>
            </article>
          </div>
        </section>

        <section id="tai-lieu" className="content-section content-section--muted">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Download Center"
              title="Một điểm truy cập duy nhất cho hồ sơ nội dung dự án"
            />

            <article className="download-card glow-card">
              <div>
                <p className="download-card__eyebrow">{siteContent.downloads.title}</p>
                <h3>Blueprint nội dung và thông số triển khai landing page</h3>
                <p>{siteContent.downloads.body}</p>
              </div>

              <a className="button" href={siteContent.downloads.href} target="_blank" rel="noreferrer">
                Mở hồ sơ PDF
              </a>
            </article>
          </div>
        </section>

        <section id="thu-vien" className="content-section">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Thư viện hình ảnh và phối cảnh 3D"
              title="Toàn bộ hình ảnh trên trang được lấy từ thư mục src/content/images"
            />

            <div className="gallery-grid">
              {siteContent.gallery.map((item, index) => (
                <figure
                  key={item.alt}
                  className={`gallery-card glow-card${index === 0 || index === 5 ? ' gallery-card--wide' : ''}`}
                >
                  <img alt={item.alt} loading={index > 1 ? 'lazy' : undefined} src={item.src} />
                  <figcaption>{item.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="lien-he" className="content-section content-section--contact">
          <div className="site-shell contact-layout">
            <article className="contact-card glow-card">
              <p className="section-heading__eyebrow">Chân trang thông tin</p>
              <h2>{siteContent.footer.project}</h2>
              <p>{siteContent.footer.location}</p>

              <div className="contact-meta">
                <div>
                  <span>Giảng viên hướng dẫn</span>
                  <strong>{siteContent.footer.advisor}</strong>
                </div>
                <div>
                  <span>Sinh viên thực hiện</span>
                  <strong>{siteContent.footer.student}</strong>
                </div>
              </div>
            </article>

            <article className="contact-card glow-card">
              <p className="contact-card__legal">{siteContent.footer.legal}</p>
              <p className="contact-card__copy">{siteContent.footer.copyright}</p>
              <div className="contact-card__actions">
                <a className="button" href={siteContent.downloads.href} target="_blank" rel="noreferrer">
                  Xem hồ sơ dự án
                </a>
                <a className="button button--ghost" href="#top">
                  Quay lại đầu trang
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}
