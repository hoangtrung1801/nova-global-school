import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { siteContent } from '../content/siteContent'

const NAV_ITEMS = [
  { href: '#tong-quan', label: 'Tổng quan' },
  { href: '#dao-tao', label: 'Đào tạo' },
  { href: '#co-so-vat-chat', label: 'Cơ sở vật chất' },
  { href: '#hoc-phi', label: 'Học phí' },
  { href: '#tai-chinh', label: 'Tài chính' },
  { href: '#thu-vien', label: 'Thư viện' },
] as const

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1))

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

function sectionCover(src: string) {
  return { '--section-cover': `url(${src})` } as CSSProperties
}

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
  const pageRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState(SECTION_IDS[0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)

      const currentSection = SECTION_IDS.reduce((activeId, sectionId) => {
        const section = document.getElementById(sectionId)

        if (!section) {
          return activeId
        }

        const rect = section.getBoundingClientRect()

        return rect.top <= 160 ? sectionId : activeId
      }, SECTION_IDS[0])

      setActiveSectionId(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const page = pageRef.current

    if (!page) {
      return
    }

    const revealItems = Array.from(
      page.querySelectorAll<HTMLElement>(
        [
          '.hero-copy > *',
          '.hero-visual > *',
          '.section-heading',
          '.glow-card',
          '.scenario-tabs',
        ].join(','),
      ),
    )

    revealItems.forEach((item, index) => {
      item.classList.add('reveal-item')
      item.style.setProperty('--reveal-delay', `${(index % 5) * 42}ms`)
    })

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.14 },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const page = pageRef.current

    if (!page) {
      return
    }

    const bands = Array.from(page.querySelectorAll<HTMLElement>('.section-band'))
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const updateBandMotion = () => {
      const viewportHeight = window.innerHeight

      bands.forEach((band) => {
        if (prefersReducedMotion) {
          band.style.setProperty('--band-opacity', '1')
          band.style.setProperty('--band-scale', '1')
          band.style.setProperty('--band-veil', '0.18')
          return
        }

        const rect = band.getBoundingClientRect()
        const rawReveal = (viewportHeight - rect.top) / (viewportHeight * 1.05)
        const clampedReveal = Math.min(1, Math.max(0, rawReveal))
        const progress = 1 - (1 - clampedReveal) * (1 - clampedReveal)
        const opacity = 0.08 + progress * 0.92
        const scale = 1.085 - progress * 0.085
        const veil = 0.82 - progress * 0.54

        band.style.setProperty('--band-opacity', opacity.toFixed(3))
        band.style.setProperty('--band-scale', scale.toFixed(3))
        band.style.setProperty('--band-veil', veil.toFixed(3))
      })

      frame = 0
    }

    const queueBandMotion = () => {
      if (frame !== 0) {
        return
      }

      frame = window.requestAnimationFrame(updateBandMotion)
    }

    queueBandMotion()
    window.addEventListener('scroll', queueBandMotion, { passive: true })
    window.addEventListener('resize', queueBandMotion)

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', queueBandMotion)
      window.removeEventListener('resize', queueBandMotion)
    }
  }, [])

  return (
    <div ref={pageRef} className="nova-page">
      <div className="nova-page__backdrop" aria-hidden="true" />

      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="site-shell site-header__inner">
          <a className="brand-mark" href="#top">
            <span className="brand-mark__badge">NGS</span>
            <span className="brand-mark__text">{siteContent.title}</span>
          </a>

          <nav className="site-nav" aria-label="Điều hướng chính">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                aria-current={activeSectionId === item.href.slice(1) ? 'page' : undefined}
                className={activeSectionId === item.href.slice(1) ? 'is-active' : undefined}
                href={item.href}
              >
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
              className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
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
              <a
                key={item.href}
                aria-current={activeSectionId === item.href.slice(1) ? 'page' : undefined}
                className={activeSectionId === item.href.slice(1) ? 'is-active' : undefined}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
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
        <section
          id="top"
          className="hero-section section-band section-band--hero"
          style={sectionCover(siteContent.gallery[0].src)}
        >
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
            </div>

            <div className="hero-visual">
              <article className="hero-card glow-card">
                <div className="hero-card__overlay hero-card__overlay--static">
                  <p className="hero-card__tag">Trường liên cấp quốc tế</p>
                  <h2>Campus hiện đại cho học sinh THCS - THPT</h2>
                  <p>
                    Quy hoạch 21.390 m², công suất 920 học sinh, tập trung vào học thuật,
                    ngoại ngữ và trải nghiệm học đường an toàn.
                  </p>

                  <dl className="hero-card__facts">
                    {QUICK_FACTS.map((fact) => (
                      <div key={fact.label}>
                        <dt>{fact.label}</dt>
                        <dd>{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
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
        </section>

        <div className="section-band" style={sectionCover(siteContent.gallery[5].src)}>
          <section id="tong-quan" className="content-section">
            <div className="site-shell">
              <SectionHeading
                eyebrow="Giới thiệu tổng quan"
                title="Trường liên cấp tại Hòa Xuân, Cẩm Lệ, Đà Nẵng"
                body="Các thông tin chính về vị trí, chủ đầu tư và quy mô được rút gọn để phụ huynh quét nhanh."
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

          <section id="dao-tao" className="content-section content-section--soft">
            <div className="site-shell">
              <SectionHeading
                eyebrow="Chương trình đào tạo cốt lõi"
                title="Chương trình học cân bằng giữa học thuật, ngoại ngữ và kỹ năng"
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
        </div>

        <div className="section-band" style={sectionCover(siteContent.gallery[3].src)}>
          <section id="co-so-vat-chat" className="content-section">
            <div className="site-shell facilities-layout">
              <div className="facilities-summary">
                <SectionHeading
                  eyebrow="Cơ sở vật chất và hạ tầng kỹ thuật"
                  title="Campus hiện đại cho học tập, thể thao và đời sống học đường"
                  body="Các hạng mục quan trọng được nhóm theo nhu cầu học tập, sinh hoạt và an toàn."
                />

                <article className="spotlight-card glow-card">
                  <img alt={siteContent.gallery[1].alt} src={siteContent.gallery[1].src} />
                  <div className="spotlight-card__body">
                    <h3>Không gian học tập mở, vận hành theo chuẩn trường hiện đại</h3>
                    <p>
                      Phòng học, nhà ăn, an ninh và xe buýt được tổ chức như một campus học đường
                      an toàn, dễ vận hành.
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
        </div>

        <div className="section-band" style={sectionCover(siteContent.gallery[4].src)}>
          <section id="hoc-phi" className="content-section">
            <div className="site-shell">
              <SectionHeading
                eyebrow="Chính sách học phí và ưu đãi tuyển sinh"
                title="Học phí rõ ràng cho THCS và THPT"
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

        </div>

        <div className="section-band" style={sectionCover(siteContent.gallery[2].src)}>
          <section id="tai-chinh" className="content-section">
            <div className="site-shell finance-layout">
              <div>
                <SectionHeading
                  eyebrow="Thẩm định hiệu quả tài chính"
                  title="Các chỉ số tài chính chính của dự án"
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
                  <h3>Đóng góp địa phương</h3>
                  <p>{siteContent.finance.social}</p>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div className="section-band" style={sectionCover(siteContent.gallery[1].src)}>
          <section id="tai-lieu" className="content-section">
            <div className="site-shell">
              <SectionHeading
                eyebrow="Hồ sơ PDF"
                title="Tải hồ sơ đầy đủ của Nova Global School"
              />

              <article className="download-card glow-card">
                <div>
                  <p className="download-card__eyebrow">{siteContent.downloads.title}</p>
                  <h3>Bản vẽ, chỉ tiêu và dữ liệu dự án</h3>
                  <p>{siteContent.downloads.body}</p>
                </div>

                <a className="button" href={siteContent.downloads.href} target="_blank" rel="noreferrer">
                  Mở hồ sơ PDF
                </a>
              </article>
            </div>
          </section>

          <section id="thu-vien" className="content-section content-section--soft">
            <div className="site-shell">
              <SectionHeading
                eyebrow="Thư viện hình ảnh và phối cảnh 3D"
                title="Hình ảnh campus, lớp học, thư viện và khu thể thao"
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

          <section id="lien-he" className="content-section content-section--contact content-section--soft">
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
        </div>
      </main>
    </div>
  )
}
