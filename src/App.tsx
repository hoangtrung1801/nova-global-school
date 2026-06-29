import { useEffect } from 'react'
import { ReferencePage } from './components/ReferencePage'
import { siteContent } from './content/siteContent'
import '../references/css/990799c9a52e5c07.css'
import './App.css'

const REFERENCE_TITLE = `${siteContent.title} Đà Nẵng | Trường liên cấp THCS - THPT`
const META_DESCRIPTION =
  'Nova Global School là trường liên cấp THCS - THPT tại Hòa Xuân, Đà Nẵng với campus 21.390 m², tiếng Anh tăng cường và học phí minh bạch.'
const HTML_CLASS_NAME = '__variable_bd93a5'

function App() {
  useEffect(() => {
    const previousLang = document.documentElement.lang
    const hadClass = document.documentElement.classList.contains(HTML_CLASS_NAME)
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousMetaDescription = metaDescription?.content
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    const previousOgTitle = ogTitle?.content
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    const previousOgDescription = ogDescription?.content

    document.title = REFERENCE_TITLE
    document.documentElement.lang = 'vi'
    metaDescription?.setAttribute('content', META_DESCRIPTION)
    ogTitle?.setAttribute('content', REFERENCE_TITLE)
    ogDescription?.setAttribute('content', META_DESCRIPTION)

    if (!hadClass) {
      document.documentElement.classList.add(HTML_CLASS_NAME)
    }

    return () => {
      document.documentElement.lang = previousLang
      metaDescription?.setAttribute('content', previousMetaDescription ?? '')
      ogTitle?.setAttribute('content', previousOgTitle ?? '')
      ogDescription?.setAttribute('content', previousOgDescription ?? '')

      if (!hadClass) {
        document.documentElement.classList.remove(HTML_CLASS_NAME)
      }
    }
  }, [])

  return (
    <div className="reference-clone">
      <ReferencePage />
    </div>
  )
}

export default App
