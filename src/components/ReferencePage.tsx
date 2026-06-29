import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    type MotionStyle,
    type Variants,
} from "framer-motion";
import { siteContent } from "../content/siteContent";

const NAV_ITEMS = [
    { href: "#tong-quan", label: "Tổng quan" },
    { href: "#dao-tao", label: "Đào tạo" },
    { href: "#co-so-vat-chat", label: "Cơ sở vật chất" },
    { href: "#hoc-phi", label: "Học phí" },
    { href: "#tai-chinh", label: "Tài chính" },
    { href: "#thu-vien", label: "Thư viện" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

const QUICK_FACTS = [
    { label: "Địa điểm", value: "Hòa Xuân, Cẩm Lệ, Đà Nẵng" },
    { label: "Chủ đầu tư", value: "Tập đoàn Nguyễn Hoàng (NHG)" },
    { label: "Phân khúc", value: "THCS - THPT · 11 đến 17 tuổi" },
    { label: "Tổng mức đầu tư", value: "152,68 tỷ VNĐ" },
] as const;

const FACILITY_IMAGES = [
    siteContent.gallery[1],
    siteContent.gallery[4],
    siteContent.gallery[2],
    siteContent.gallery[3],
    siteContent.gallery[6],
] as const;

const MOTION_EASE = [0.16, 1, 0.3, 1] as const;

const revealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
        scale: 0.985,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.52,
            ease: MOTION_EASE,
        },
    },
};

const heroCopyVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
};

const heroItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 26,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.56,
            ease: MOTION_EASE,
        },
    },
};

function sectionCover(src: string) {
    return { "--section-cover": `url(${src})` } as CSSProperties;
}

function useBandMotionStyle(
    src: string,
    targetRef: React.RefObject<HTMLElement | null>,
) {
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 32,
        restDelta: 0.001,
    });
    const opacity = useTransform(smoothProgress, [0, 0.32, 1], [0.18, 1, 0.86]);
    const scale = useTransform(smoothProgress, [0, 0.36, 1], [1.075, 1, 1.025]);
    const veil = useTransform(smoothProgress, [0, 0.34, 1], [0.72, 0.28, 0.36]);

    return {
        ...sectionCover(src),
        "--band-opacity": shouldReduceMotion ? 1 : opacity,
        "--band-scale": shouldReduceMotion ? 1 : scale,
        "--band-veil": shouldReduceMotion ? 0.28 : veil,
    } as MotionStyle;
}

function ScrollProgress() {
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 110,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="scroll-progress" aria-hidden="true">
            <motion.div
                className="scroll-progress__bar"
                style={{ scaleX: shouldReduceMotion ? 0 : scaleX }}
            />
        </div>
    );
}

function HeroBand({
    children,
    coverSrc,
}: {
    children: ReactNode;
    coverSrc: string;
}) {
    const bandRef = useRef<HTMLElement>(null);
    const bandStyle = useBandMotionStyle(coverSrc, bandRef);

    return (
        <motion.section
            ref={bandRef}
            id="top"
            className="hero-section section-band section-band--hero"
            style={bandStyle}
        >
            {children}
        </motion.section>
    );
}

function SectionBand({
    children,
    coverSrc,
}: {
    children: ReactNode;
    coverSrc: string;
}) {
    const bandRef = useRef<HTMLDivElement>(null);
    const bandStyle = useBandMotionStyle(coverSrc, bandRef);

    return (
        <motion.div ref={bandRef} className="section-band" style={bandStyle}>
            {children}
        </motion.div>
    );
}

function RevealBlock({
    as = "div",
    children,
    className,
    onClick,
    style,
}: {
    as?: "article" | "div" | "figure";
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    style?: CSSProperties;
}) {
    const shouldReduceMotion = useReducedMotion();
    const motionProps = {
        className,
        initial: shouldReduceMotion ? false : "hidden",
        whileInView: shouldReduceMotion ? undefined : "visible",
        viewport: { once: true, amount: 0.2, margin: "0px 0px -12% 0px" },
        variants: revealVariants,
        onClick,
        style,
    } as const;

    if (as === "article") {
        return <motion.article {...motionProps}>{children}</motion.article>;
    }

    if (as === "figure") {
        return <motion.figure {...motionProps}>{children}</motion.figure>;
    }

    return <motion.div {...motionProps}>{children}</motion.div>;
}

function MotionLink({
    children,
    className,
    href,
    onClick,
    rel,
    target,
}: {
    children: ReactNode;
    className: string;
    href: string;
    onClick?: () => void;
    rel?: string;
    target?: string;
}) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.a
            className={className}
            href={href}
            rel={rel}
            target={target}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98, y: 0 }}
            transition={{ duration: 0.18, ease: MOTION_EASE }}
            onClick={onClick}
        >
            {children}
        </motion.a>
    );
}

function SectionHeading({
    eyebrow,
    title,
    body,
}: {
    eyebrow: string;
    title: string;
    body?: string;
}) {
    return (
        <RevealBlock className="section-heading">
            <p className="section-heading__eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            {body ? <p className="section-heading__body">{body}</p> : null}
        </RevealBlock>
    );
}

function FinanceValue({ value }: { value: string }) {
    const [primary, detail] = value.split(" · ");

    return (
        <strong className="finance-value">
            <span>{primary}</span>
            {detail ? (
                <span className="finance-value__detail">{detail}</span>
            ) : null}
        </strong>
    );
}

export function ReferencePage() {
    const shouldReduceMotion = useReducedMotion();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSectionId, setActiveSectionId] = useState(SECTION_IDS[0]);
    const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
    const activeFacility =
        siteContent.facilities[activeFacilityIndex] ??
        siteContent.facilities[0];
    const activeFacilityImage =
        FACILITY_IMAGES[activeFacilityIndex] ?? FACILITY_IMAGES[0];

    // Gallery Popup/Lightbox state
    const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<
        number | null
    >(null);

    const showAdjacentFacility = (direction: -1 | 1) => {
        setActiveFacilityIndex((currentIndex) => {
            const nextIndex = currentIndex + direction;

            return (
                (nextIndex + siteContent.facilities.length) %
                siteContent.facilities.length
            );
        });
    };

    const showAdjacentGallery = (direction: -1 | 1) => {
        setSelectedGalleryIndex((currentIndex) => {
            if (currentIndex === null) return null;
            const nextIndex = currentIndex + direction;
            return (
                (nextIndex + siteContent.gallery.length) %
                siteContent.gallery.length
            );
        });
    };

    const closeGalleryModal = () => setSelectedGalleryIndex(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (selectedGalleryIndex === null) return;
            if (event.key === "Escape") closeGalleryModal();
            if (event.key === "ArrowLeft") showAdjacentGallery(-1);
            if (event.key === "ArrowRight") showAdjacentGallery(1);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedGalleryIndex]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 16);

            const currentSection = SECTION_IDS.reduce((activeId, sectionId) => {
                const section = document.getElementById(sectionId);

                if (!section) {
                    return activeId;
                }

                const rect = section.getBoundingClientRect();

                return rect.top <= 160 ? sectionId : activeId;
            }, SECTION_IDS[0]);

            setActiveSectionId(currentSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="nova-page">
            <div className="nova-page__backdrop" aria-hidden="true" />
            <ScrollProgress />

            <header
                className={`site-header${isScrolled ? " is-scrolled" : ""}`}
            >
                <div className="site-shell site-header__inner">
                    <a className="brand-mark" href="#top">
                        <span className="brand-mark__badge" aria-hidden="true">
                            <img src="/icon.svg" alt="" />
                        </span>
                        <span className="brand-mark__text">
                            {siteContent.title}
                        </span>
                    </a>

                    <nav className="site-nav" aria-label="Điều hướng chính">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                aria-current={
                                    activeSectionId === item.href.slice(1)
                                        ? "page"
                                        : undefined
                                }
                                className={
                                    activeSectionId === item.href.slice(1)
                                        ? "is-active"
                                        : undefined
                                }
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="site-header__actions">
                        <MotionLink
                            className="button button--ghost site-header__cta"
                            href="#lien-he"
                        >
                            Liên hệ
                        </MotionLink>
                        <button
                            aria-expanded={menuOpen}
                            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
                            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
                            type="button"
                            onClick={() =>
                                setMenuOpen((currentValue) => !currentValue)
                            }
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>

                <div className={`mobile-nav${menuOpen ? " is-open" : ""}`}>
                    <nav aria-label="Điều hướng di động">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                aria-current={
                                    activeSectionId === item.href.slice(1)
                                        ? "page"
                                        : undefined
                                }
                                className={
                                    activeSectionId === item.href.slice(1)
                                        ? "is-active"
                                        : undefined
                                }
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <MotionLink
                            className="button mobile-nav__cta"
                            href="#lien-he"
                            onClick={() => setMenuOpen(false)}
                        >
                            Đăng ký tư vấn
                        </MotionLink>
                    </nav>
                </div>
            </header>

            <main>
                <HeroBand coverSrc={siteContent.gallery[0].src}>
                    <div className="site-shell hero-layout">
                        <motion.div
                            className="hero-copy"
                            initial={shouldReduceMotion ? false : "hidden"}
                            animate="visible"
                            variants={heroCopyVariants}
                        >
                            <motion.p
                                className="hero-copy__eyebrow"
                                variants={heroItemVariants}
                            >
                                Dự án trường liên cấp tại cửa ngõ phía Nam Đà
                                Nẵng
                            </motion.p>
                            <motion.h1 variants={heroItemVariants}>
                                {siteContent.title}
                            </motion.h1>
                            <motion.p
                                className="hero-copy__subtitle"
                                variants={heroItemVariants}
                            >
                                {siteContent.subtitle}
                            </motion.p>
                            <motion.p
                                className="hero-copy__statement"
                                variants={heroItemVariants}
                            >
                                {siteContent.statement}
                            </motion.p>

                            <motion.div
                                className="hero-copy__actions"
                                variants={heroItemVariants}
                            >
                                {siteContent.ctas.map((cta, index) => (
                                    <MotionLink
                                        key={cta.label}
                                        className={`button${index === 0 ? "" : " button--ghost"}`}
                                        href={cta.href}
                                    >
                                        {cta.label}
                                    </MotionLink>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="hero-visual"
                            initial={
                                shouldReduceMotion
                                    ? false
                                    : { opacity: 0, x: 28, scale: 0.985 }
                            }
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                                duration: 0.62,
                                delay: 0.18,
                                ease: MOTION_EASE,
                            }}
                        >
                            <motion.article
                                className="hero-card glow-card"
                                whileHover={
                                    shouldReduceMotion
                                        ? undefined
                                        : { y: -4, scale: 1.01 }
                                }
                                transition={{
                                    duration: 0.22,
                                    ease: MOTION_EASE,
                                }}
                            >
                                <img
                                    className="hero-card__media"
                                    alt={siteContent.gallery[0].alt}
                                    src={siteContent.heroImage}
                                />
                                <div className="hero-card__overlay hero-card__overlay--static">
                                    <div className="hero-card__content">
                                        <p className="hero-card__tag">
                                            Trường liên cấp quốc tế
                                        </p>
                                        <h2>
                                            Campus hiện đại cho học sinh THCS -
                                            THPT
                                        </h2>
                                        <p>
                                            Quy hoạch 21.390 m², công suất 920
                                            học sinh, tập trung vào học thuật,
                                            ngoại ngữ và trải nghiệm học đường
                                            an toàn.
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
                                </div>
                            </motion.article>
                        </motion.div>

                        <motion.dl
                            className="metric-strip"
                            initial={shouldReduceMotion ? false : "hidden"}
                            animate="visible"
                            variants={heroCopyVariants}
                        >
                            {siteContent.overview.stats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    className="metric-strip__item glow-card"
                                    variants={heroItemVariants}
                                >
                                    <dt>{stat.label}</dt>
                                    <dd>{stat.value}</dd>
                                </motion.div>
                            ))}
                        </motion.dl>
                    </div>
                </HeroBand>

                <SectionBand coverSrc={siteContent.gallery[5].src}>
                    <section id="tong-quan" className="content-section">
                        <div className="site-shell">
                            <SectionHeading
                                eyebrow="Giới thiệu tổng quan"
                                title="Tổng quan dự án"
                                body="Các thông tin chính về vị trí, chủ đầu tư và quy mô được rút gọn để phụ huynh quét nhanh."
                            />

                            <div className="overview-layout">
                                <RevealBlock
                                    as="figure"
                                    className="overview-media glow-card"
                                >
                                    <img
                                        style={{
                                            objectFit: "contain",
                                        }}
                                        alt={siteContent.gallery[0].alt}
                                        src={siteContent.gallery[0].src}
                                    />
                                    <figcaption>
                                        <span>Vị trí campus</span>
                                        <strong>
                                            Đường Đá Bàn 7, Hòa Xuân, Cẩm Lệ
                                        </strong>
                                    </figcaption>
                                </RevealBlock>

                                <div className="overview-stack">
                                    <RevealBlock
                                        as="article"
                                        className="copy-card overview-copy-card glow-card"
                                    >
                                        <span className="overview-copy-card__number">
                                            01
                                        </span>
                                        <div>
                                            <h3>
                                                Vị trí “tọa độ vàng” kết nối
                                            </h3>
                                            <p>
                                                {siteContent.overview.location}
                                            </p>
                                        </div>
                                    </RevealBlock>

                                    <RevealBlock
                                        as="article"
                                        className="copy-card overview-copy-card glow-card"
                                    >
                                        <span className="overview-copy-card__number">
                                            02
                                        </span>
                                        <div>
                                            <h3>
                                                Chủ đầu tư và đơn vị phát triển
                                            </h3>
                                            <p>
                                                {siteContent.overview.developer}
                                            </p>
                                        </div>
                                    </RevealBlock>

                                    <RevealBlock
                                        as="article"
                                        className="copy-card overview-copy-card glow-card"
                                    >
                                        <span className="overview-copy-card__number">
                                            03
                                        </span>
                                        <div>
                                            <h3>
                                                Phân khúc đào tạo và công suất
                                                thiết kế
                                            </h3>
                                            <p>{siteContent.overview.scale}</p>
                                        </div>
                                    </RevealBlock>
                                </div>

                                <dl className="overview-stats">
                                    {siteContent.overview.stats.map((stat) => (
                                        <RevealBlock
                                            key={stat.label}
                                            className="overview-stat glow-card"
                                        >
                                            <dt>{stat.label}</dt>
                                            <dd>{stat.value}</dd>
                                        </RevealBlock>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </section>

                    <section
                        id="dao-tao"
                        className="content-section content-section--soft"
                    >
                        <div className="site-shell">
                            <SectionHeading
                                eyebrow="Chương trình đào tạo cốt lõi"
                                title="Chương trình đào tạo"
                                body="Nova Global School đặt ngoại ngữ, năng lực học thuật và phát triển con người trong cùng một lộ trình."
                            />

                            <div className="card-grid card-grid--triple">
                                {siteContent.academic.map((item) => (
                                    <RevealBlock
                                        key={item.title}
                                        as="article"
                                        className="feature-card glow-card"
                                    >
                                        <p className="feature-card__index">
                                            {item.title}
                                        </p>
                                        <h3>{item.title}</h3>
                                        <p>{item.body}</p>
                                    </RevealBlock>
                                ))}
                            </div>
                        </div>
                    </section>
                </SectionBand>

                <SectionBand coverSrc={siteContent.gallery[3].src}>
                    <section id="co-so-vat-chat" className="content-section">
                        <div className="site-shell facilities-layout">
                            <SectionHeading
                                eyebrow="Cơ sở vật chất và hạ tầng kỹ thuật"
                                title="Cơ sở vật chất"
                                body="Các hạng mục quan trọng được nhóm theo nhu cầu học tập, sinh hoạt và an toàn."
                            />

                            <RevealBlock
                                as="article"
                                className="facility-carousel glow-card"
                            >
                                <motion.div
                                    key={activeFacility.title}
                                    className="facility-carousel__slide"
                                    initial={
                                        shouldReduceMotion
                                            ? false
                                            : { opacity: 0, x: 18 }
                                    }
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.34,
                                        ease: MOTION_EASE,
                                    }}
                                >
                                    <div className="facility-carousel__media">
                                        <img
                                            alt={activeFacilityImage.alt}
                                            src={activeFacilityImage.src}
                                        />
                                    </div>

                                    <div
                                        className="facility-carousel__content"
                                        aria-live="polite"
                                    >
                                        <p className="facility-carousel__count">
                                            {String(
                                                activeFacilityIndex + 1,
                                            ).padStart(2, "0")}{" "}
                                            /{" "}
                                            {String(
                                                siteContent.facilities.length,
                                            ).padStart(2, "0")}
                                        </p>
                                        <h3>{activeFacility.title}</h3>
                                        <p>{activeFacility.body}</p>
                                    </div>
                                </motion.div>

                                <div className="facility-carousel__controls">
                                    <button
                                        aria-label="Xem hạng mục trước"
                                        className="facility-carousel__arrow"
                                        type="button"
                                        onClick={() => showAdjacentFacility(-1)}
                                    >
                                        ‹
                                    </button>
                                    <div
                                        className="facility-carousel__dots"
                                        aria-label="Chọn hạng mục"
                                    >
                                        {siteContent.facilities.map(
                                            (item, index) => (
                                                <button
                                                    key={item.title}
                                                    aria-label={`Xem ${item.title}`}
                                                    aria-pressed={
                                                        activeFacilityIndex ===
                                                        index
                                                    }
                                                    className={
                                                        activeFacilityIndex ===
                                                        index
                                                            ? "is-active"
                                                            : undefined
                                                    }
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveFacilityIndex(
                                                            index,
                                                        )
                                                    }
                                                />
                                            ),
                                        )}
                                    </div>
                                    <button
                                        aria-label="Xem hạng mục tiếp theo"
                                        className="facility-carousel__arrow"
                                        type="button"
                                        onClick={() => showAdjacentFacility(1)}
                                    >
                                        ›
                                    </button>
                                </div>

                                <div className="facility-carousel__thumbs">
                                    {siteContent.facilities.map(
                                        (item, index) => (
                                            <button
                                                key={item.title}
                                                aria-label={`Chọn ${item.title}`}
                                                aria-pressed={
                                                    activeFacilityIndex ===
                                                    index
                                                }
                                                className={
                                                    activeFacilityIndex ===
                                                    index
                                                        ? "is-active"
                                                        : undefined
                                                }
                                                type="button"
                                                onClick={() =>
                                                    setActiveFacilityIndex(
                                                        index,
                                                    )
                                                }
                                            >
                                                <img
                                                    alt=""
                                                    src={
                                                        FACILITY_IMAGES[index]
                                                            .src
                                                    }
                                                />
                                                <span>{item.title}</span>
                                            </button>
                                        ),
                                    )}
                                </div>
                            </RevealBlock>
                        </div>
                    </section>
                </SectionBand>

                <SectionBand coverSrc={siteContent.gallery[4].src}>
                    <section id="hoc-phi" className="content-section">
                        <div className="site-shell">
                            <SectionHeading
                                eyebrow="Chương trình học phí và ưu đãi tuyển sinh"
                                title="Học phí & ưu đãi"
                            />

                            <div className="tuition-layout">
                                <div className="card-grid card-grid--triple">
                                    {siteContent.tuition.map((item) => (
                                        <RevealBlock
                                            key={item.title}
                                            as="article"
                                            className="tuition-card glow-card"
                                        >
                                            <div className="tuition-card__header">
                                                <span
                                                    className={`tuition-card__badge tuition-card__badge--${item.title.toLowerCase().includes("thcs") ? "thcs" : item.title.toLowerCase().includes("thpt") ? "thpt" : "uniform"}`}
                                                >
                                                    {item.title
                                                        .toLowerCase()
                                                        .includes("thcs")
                                                        ? "THCS"
                                                        : item.title
                                                                .toLowerCase()
                                                                .includes(
                                                                    "thpt",
                                                                )
                                                          ? "THPT"
                                                          : "Đồng phục"}
                                                </span>
                                                <p className="tuition-card__label">
                                                    {item.title}
                                                </p>
                                            </div>
                                            <div className="tuition-card__value">
                                                {(() => {
                                                    const parts =
                                                        item.value.split(" / ");
                                                    if (parts.length === 2) {
                                                        const [val, period] =
                                                            parts;
                                                        const num = val.replace(
                                                            " VNĐ",
                                                            "",
                                                        );
                                                        return (
                                                            <>
                                                                <span className="tuition-card__number">
                                                                    {num}
                                                                </span>
                                                                <div className="tuition-card__period">
                                                                    <span className="tuition-card__currency">
                                                                        VNĐ
                                                                    </span>
                                                                    <span className="tuition-card__term">
                                                                        /{" "}
                                                                        {period}
                                                                    </span>
                                                                </div>
                                                            </>
                                                        );
                                                    }
                                                    return item.value;
                                                })()}
                                            </div>
                                            <p className="tuition-card__body">
                                                {item.body}
                                            </p>
                                        </RevealBlock>
                                    ))}
                                </div>

                                <RevealBlock
                                    as="article"
                                    className="tuition-incentives glow-card"
                                >
                                    <div className="tuition-incentives__header">
                                        <span className="tuition-incentives__tag">
                                            Tuyển sinh đầu tiên
                                        </span>
                                        <h3>
                                            Chính sách đặc quyền mùa tuyển sinh
                                        </h3>
                                    </div>
                                    <div className="tuition-incentives__grid">
                                        {siteContent.incentives.map(
                                            (item, index) => {
                                                const titles = [
                                                    "Lộ trình ổn định",
                                                    "Đóng phí sớm",
                                                    "Ưu đãi & Học bổng",
                                                ];
                                                const icons = [
                                                    <svg
                                                        key="shield"
                                                        className="incentive-icon"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                    </svg>,
                                                    <svg
                                                        key="calendar"
                                                        className="incentive-icon"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <rect
                                                            x="3"
                                                            y="4"
                                                            width="18"
                                                            height="18"
                                                            rx="2"
                                                            ry="2"
                                                        />
                                                        <line
                                                            x1="16"
                                                            y1="2"
                                                            x2="16"
                                                            y2="6"
                                                        />
                                                        <line
                                                            x1="8"
                                                            y1="2"
                                                            x2="8"
                                                            y2="6"
                                                        />
                                                        <line
                                                            x1="3"
                                                            y1="10"
                                                            x2="21"
                                                            y2="10"
                                                        />
                                                    </svg>,
                                                    <svg
                                                        key="users"
                                                        className="incentive-icon"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                        <circle
                                                            cx="9"
                                                            cy="7"
                                                            r="4"
                                                        />
                                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                    </svg>,
                                                ];
                                                return (
                                                    <div
                                                        key={index}
                                                        className="tuition-incentive-item"
                                                    >
                                                        <div className="tuition-incentive-item__icon-wrapper">
                                                            {icons[index]}
                                                        </div>
                                                        <div className="tuition-incentive-item__content">
                                                            <h4>
                                                                {titles[index]}
                                                            </h4>
                                                            <p>{item}</p>
                                                        </div>
                                                    </div>
                                                );
                                            },
                                        )}
                                    </div>
                                </RevealBlock>
                            </div>
                        </div>
                    </section>
                </SectionBand>

                <SectionBand coverSrc={siteContent.gallery[2].src}>
                    <section id="tai-chinh" className="content-section">
                        <div className="site-shell">
                            <SectionHeading
                                eyebrow="Thẩm định hiệu quả tài chính"
                                title="Chỉ số tài chính"
                            />

                            <div className="finance-layout">
                                {/* Column 1: Cơ cấu vốn */}
                                <div className="finance-column">
                                    <h3 className="finance-column-title">
                                        Nguồn vốn & Đầu tư
                                    </h3>
                                    <div className="finance-column-cards">
                                        {siteContent.finance.capital.map(
                                            (item) => (
                                                <RevealBlock
                                                    key={item.label}
                                                    as="article"
                                                    className="metric-card glow-card"
                                                >
                                                    <p>{item.label}</p>
                                                    <FinanceValue
                                                        value={item.value}
                                                    />
                                                </RevealBlock>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Column 2: Chỉ số hiệu quả */}
                                <div className="finance-column">
                                    <h3 className="finance-column-title">
                                        Hiệu quả tài chính
                                    </h3>
                                    <div className="finance-column-cards">
                                        {siteContent.finance.metrics
                                            .slice(0, 3)
                                            .map((metric) => (
                                                <RevealBlock
                                                    key={metric.label}
                                                    as="article"
                                                    className="metric-card glow-card"
                                                >
                                                    <p>{metric.label}</p>
                                                    <FinanceValue
                                                        value={metric.value}
                                                    />
                                                </RevealBlock>
                                            ))}
                                    </div>
                                </div>

                                {/* Column 3: Khả năng hoàn vốn & Xã hội hóa */}
                                <div className="finance-column">
                                    <h3 className="finance-column-title">
                                        An toàn & Đóng góp
                                    </h3>
                                    <div className="finance-column-cards">
                                        {siteContent.finance.metrics
                                            .slice(3)
                                            .map((metric) => (
                                                <RevealBlock
                                                    key={metric.label}
                                                    as="article"
                                                    className="metric-card glow-card"
                                                >
                                                    <p>{metric.label}</p>
                                                    <FinanceValue
                                                        value={metric.value}
                                                    />
                                                </RevealBlock>
                                            ))}
                                        {/* <RevealBlock as="article" className="copy-card glow-card finance-social">
                      <h3>Đóng góp địa phương</h3>
                      <p>{siteContent.finance.social}</p>
                    </RevealBlock> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SectionBand>

                <SectionBand coverSrc={siteContent.gallery[1].src}>
                    <section id="tai-lieu" className="content-section">
                        <div className="site-shell">
                            <SectionHeading
                                eyebrow="Hồ sơ PDF"
                                title="Tài liệu & hồ sơ"
                            />

                            {/* <RevealBlock
                                as="article"
                                className="download-card glow-card"
                            >
                                <div>
                                    <p className="download-card__eyebrow">
                                        {siteContent.downloads.title}
                                    </p>
                                    <h3>Bản vẽ, chỉ tiêu và dữ liệu dự án</h3>
                                    <p>{siteContent.downloads.body}</p>
                                </div>

                                <MotionLink
                                    className="button"
                                    href={siteContent.downloads.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Mở hồ sơ PDF
                                </MotionLink>
                            </RevealBlock> */}

                            <div className="document-grid">
                                {siteContent.downloads.documents.map(
                                    (document) => (
                                        <RevealBlock
                                            key={document.href}
                                            as="article"
                                            className="document-card glow-card"
                                        >
                                            <div
                                                className="document-card__icon"
                                                aria-hidden="true"
                                            >
                                                PDF
                                            </div>
                                            <div className="document-card__body">
                                                <p className="download-card__eyebrow">
                                                    {document.meta}
                                                </p>
                                                <h3>{document.title}</h3>
                                                <p>{document.body}</p>
                                            </div>
                                            <MotionLink
                                                className="button button--compact"
                                                href={document.href}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Mở tài liệu
                                            </MotionLink>
                                        </RevealBlock>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>

                    <section
                        id="thu-vien"
                        className="content-section content-section--soft"
                    >
                        <div className="site-shell">
                            <SectionHeading
                                eyebrow="Thư viện hình ảnh và phối cảnh 3D"
                                title="Thư viện hình ảnh"
                            />

                            <div className="gallery-grid">
                                {siteContent.gallery.map((item, index) => {
                                    let spanClass = "gallery-card--third";
                                    if (index === 0)
                                        spanClass = "gallery-card--two-thirds";
                                    if (index === 5)
                                        spanClass = "gallery-card--full";

                                    return (
                                        <RevealBlock
                                            as="figure"
                                            key={item.alt}
                                            className={`gallery-card glow-card ${spanClass}`}
                                            onClick={() =>
                                                setSelectedGalleryIndex(index)
                                            }
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                alt={item.alt}
                                                loading={
                                                    index > 1
                                                        ? "lazy"
                                                        : undefined
                                                }
                                                src={item.src}
                                            />
                                            <figcaption>{item.alt}</figcaption>
                                        </RevealBlock>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    <section
                        id="lien-he"
                        className="content-section content-section--contact content-section--soft"
                    >
                        <div className="site-shell contact-layout">
                            <RevealBlock
                                as="article"
                                className="contact-card glow-card"
                            >
                                <h2>{siteContent.footer.project}</h2>
                                <p>{siteContent.footer.location}</p>

                                <div className="contact-meta">
                                    <div>
                                        <span>Giảng viên hướng dẫn</span>
                                        <strong>
                                            {siteContent.footer.advisor}
                                        </strong>
                                    </div>
                                    <div>
                                        <span>Sinh viên thực hiện</span>
                                        <strong>
                                            {siteContent.footer.student}
                                        </strong>
                                    </div>
                                </div>
                            </RevealBlock>

                            <RevealBlock
                                as="article"
                                className="contact-card glow-card"
                            >
                                <p className="contact-card__legal">
                                    {siteContent.footer.legal}
                                </p>
                                <p className="contact-card__copy">
                                    {siteContent.footer.copyright}
                                </p>
                                <div className="contact-card__actions">
                                    <MotionLink
                                        className="button"
                                        href={siteContent.downloads.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Xem hồ sơ dự án
                                    </MotionLink>
                                    <MotionLink
                                        className="button button--ghost"
                                        href="#top"
                                    >
                                        Quay lại đầu trang
                                    </MotionLink>
                                </div>
                            </RevealBlock>
                        </div>
                    </section>
                </SectionBand>
            </main>

            {/* Lightbox / Popup Modal */}
            <AnimatePresence>
                {selectedGalleryIndex !== null && (
                    <motion.div
                        className="gallery-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeGalleryModal}
                    >
                        <button
                            className="gallery-modal-close"
                            onClick={closeGalleryModal}
                            aria-label="Đóng thư viện ảnh"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                fill="none"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <button
                            className="gallery-modal-nav gallery-modal-nav--prev"
                            onClick={(e) => {
                                e.stopPropagation();
                                showAdjacentGallery(-1);
                            }}
                            aria-label="Hình ảnh trước"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                fill="none"
                            >
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        <motion.figure
                            className="gallery-modal-content"
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 200,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={
                                    siteContent.gallery[selectedGalleryIndex]
                                        .src
                                }
                                alt={
                                    siteContent.gallery[selectedGalleryIndex]
                                        .alt
                                }
                            />
                            <figcaption>
                                {siteContent.gallery[selectedGalleryIndex].alt}
                            </figcaption>
                        </motion.figure>

                        <button
                            className="gallery-modal-nav gallery-modal-nav--next"
                            onClick={(e) => {
                                e.stopPropagation();
                                showAdjacentGallery(1);
                            }}
                            aria-label="Hình ảnh tiếp theo"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                fill="none"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
