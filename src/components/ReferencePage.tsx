export function ReferencePage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
        <video className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out opacity-0" poster="/images/bg-ext-01.jpg" muted loop playsInline preload="auto" src="/media/bg-ext-01.mp4">
        </video>
        <video className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out opacity-100" poster="/images/bg-ext-02.jpg" muted loop playsInline preload="auto" src="/media/bg-ext-02.mp4">
        </video>
        <video className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out opacity-0" poster="/images/bg-ext-03.jpg" muted loop playsInline preload="none">
        </video>
        <video className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out opacity-0" poster="/images/bg-ext-04.jpg" muted loop playsInline preload="none">
        </video>
        <video className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out opacity-0" poster="/images/bg-ext-05.jpg" muted loop playsInline preload="none">
        </video>
        <video className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out opacity-0" poster="/images/bg-int-01.jpg" muted loop playsInline preload="none">
        </video>
        <video className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out opacity-0" poster="/images/bg-int-office.jpg" muted loop playsInline preload="none">
        </video>
        <div className="absolute inset-0 bg-ink/25">
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/70">
        </div>
      </div>
      <div id="top-sentinel" className="absolute top-0 h-px w-full" aria-hidden="true">
      </div>
      <header className="fixed inset-x-0 top-0 z-50 transition-colors duration-500 border-b border-transparent bg-transparent">
        <nav className="mx-auto flex h-[68px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 xl:px-[10%]">
          <a href="#top" className="flex items-center gap-2 text-paper transition-opacity hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256" className="text-amber">
              <path d="M215.52,197.26a8,8,0,0,1-1.86,8.39l-24,24A8,8,0,0,1,184,232a7.09,7.09,0,0,1-.79,0,8,8,0,0,1-5.87-3.52l-44.07-66.12L112,183.59V208a8,8,0,0,1-2.34,5.65s-14,14.06-15.88,15.88A7.91,7.91,0,0,1,91,231.41a8,8,0,0,1-10.41-4.35l-.06-.15-14.7-36.76L29,175.42a8,8,0,0,1-2.69-13.08l16-16A8,8,0,0,1,48,144H72.4l21.27-21.27L27.56,78.65a8,8,0,0,1-1.22-12.32l24-24a8,8,0,0,1,8.39-1.86l85.94,31.25L176.2,40.19a28,28,0,0,1,39.6,39.6l-31.53,31.53Z">
              </path>
            </svg>
            <span className="text-[13px] font-semibold uppercase tracking-[0.16em]">
              Cát Bi Cargo
            </span>
          </a>
          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            <li>
              <a href="#tong-quan" className="text-[14px] text-muted transition-colors hover:text-paper">
                Tổng quan
              </a>
            </li>
            <li>
              <a href="#boi-canh" className="text-[14px] text-muted transition-colors hover:text-paper">
                Bối cảnh
              </a>
            </li>
            <li>
              <a href="#chi-tieu" className="text-[14px] text-muted transition-colors hover:text-paper">
                Chỉ tiêu
              </a>
            </li>
            <li>
              <a href="#phan-khu" className="text-[14px] text-muted transition-colors hover:text-paper">
                Phân khu
              </a>
            </li>
            <li>
              <a href="#thiet-bi" className="text-[14px] text-muted transition-colors hover:text-paper">
                Thiết bị
              </a>
            </li>
            <li>
              <a href="#tien-do" className="text-[14px] text-muted transition-colors hover:text-paper">
                Tiến độ
              </a>
            </li>
            <li>
              <a href="#hieu-qua" className="text-[14px] text-muted transition-colors hover:text-paper">
                Hiệu quả
              </a>
            </li>
            <li>
              <a href="#ban-ve" className="text-[14px] text-muted transition-colors hover:text-paper">
                Bản vẽ
              </a>
            </li>
            <li>
              <a href="#thu-vien" className="text-[14px] text-muted transition-colors hover:text-paper">
                Thư viện
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5 backdrop-blur-md">
              <button type="button" aria-pressed="true" className="rounded-full px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide transition-colors duration-300 bg-white/10 text-paper">
                vi
              </button>
              <button type="button" aria-pressed="false" className="rounded-full px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide transition-colors duration-300 text-zinc-500 hover:text-zinc-300">
                en
              </button>
            </div>
            <a href="#lien-he" className="hidden rounded-full border border-line bg-paper/0 px-4 py-2 text-[13px] text-paper transition-all duration-300 hover:bg-paper hover:text-ink active:scale-[0.98] sm:inline-block lg:inline-block">
              Liên hệ
            </a>
            <button type="button" aria-label="Mở menu" aria-expanded="false" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-paper transition-colors hover:bg-white/10 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z">
                </path>
              </svg>
            </button>
          </div>
        </nav>
        <div className="overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden pointer-events-none max-h-0 opacity-0">
          <ul className="mx-auto flex w-full max-w-[1600px] flex-col px-5 py-2 sm:px-8">
            <li>
              <a href="#tong-quan" className="block border-b border-white/5 py-3.5 text-[15px] text-paper/90 transition-colors hover:text-amber">
                Tổng quan
              </a>
            </li>
            <li>
              <a href="#boi-canh" className="block border-b border-white/5 py-3.5 text-[15px] text-paper/90 transition-colors hover:text-amber">
                Bối cảnh
              </a>
            </li>
            <li>
              <a href="#chi-tieu" className="block border-b border-white/5 py-3.5 text-[15px] text-paper/90 transition-colors hover:text-amber">
                Chỉ tiêu
              </a>
            </li>
            <li>
              <a href="#phan-khu" className="block border-b border-white/5 py-3.5 text-[15px] text-paper/90 transition-colors hover:text-amber">
                Phân khu
              </a>
            </li>
            <li>
              <a href="#thiet-bi" className="block border-b border-white/5 py-3.5 text-[15px] text-paper/90 transition-colors hover:text-amber">
                Thiết bị
              </a>
            </li>
            <li>
              <a href="#tien-do" className="block border-b border-white/5 py-3.5 text-[15px] text-paper/90 transition-colors hover:text-amber">
                Tiến độ
              </a>
            </li>
            <li>
              <a href="#hieu-qua" className="block border-b border-white/5 py-3.5 text-[15px] text-paper/90 transition-colors hover:text-amber">
                Hiệu quả
              </a>
            </li>
            <li>
              <a href="#ban-ve" className="block border-b border-white/5 py-3.5 text-[15px] text-paper/90 transition-colors hover:text-amber">
                Bản vẽ
              </a>
            </li>
            <li>
              <a href="#thu-vien" className="block border-b border-white/5 py-3.5 text-[15px] text-paper/90 transition-colors hover:text-amber">
                Thư viện
              </a>
            </li>
            <li>
              <a href="#lien-he" className="mt-3 inline-block rounded-full bg-amber px-5 py-2.5 text-[14px] font-medium text-ink">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section id="top" className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30">
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent">
          </div>
          <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-16 sm:px-8 sm:pb-20 xl:px-[10%]" style={{opacity: "1", transform: "none"}}>
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <h1 className="max-w-[16ch] text-6xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-8xl lg:text-9xl">
                Nhà ga hàng hóa Cát Bi
              </h1>
            </div>
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="mt-7 max-w-[48ch] text-lg leading-relaxed text-neutral-300 sm:text-xl">
                Nhà ga hàng hóa công suất 100.000 tấn/năm tại Cảng hàng không quốc tế Cát Bi, Hải Phòng — mắt xích Sea-Air cho vùng duyên hải Bắc Bộ.
              </p>
            </div>
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#tong-quan" className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-[15px] font-medium text-ink transition-all duration-300 hover:bg-amber/90 active:scale-[0.98]">
                  Khám phá dự án
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" className="transition-transform group-hover:translate-x-1">
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z">
                    </path>
                  </svg>
                </a>
                <a href="#thu-vien" className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-ink/30 px-6 py-3 text-[15px] text-paper backdrop-blur-sm transition-all duration-300 hover:border-paper/60 active:scale-[0.98]">
                  Xem thư viện
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="tong-quan" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/40">
          </div>
          <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 xl:px-[10%]">
            <div className="lg:col-span-4" style={{opacity: "0", transform: "translateY(28px)"}}>
              <dl className="glow-card divide-y divide-white/10 rounded-[32px] border border-white/10 bg-neutral-900/40 px-6 backdrop-blur-lg sm:px-7">
                <div className="flex flex-col gap-1 py-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    Chủ đầu tư
                  </dt>
                  <dd className="text-[15px] text-paper">
                    Tổng công ty Cảng HKVN – ACV
                  </dd>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    Địa điểm
                  </dt>
                  <dd className="text-[15px] text-paper">
                    Phường Hải An, Hải Phòng
                  </dd>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    Loại hình
                  </dt>
                  <dd className="text-[15px] text-paper">
                    Nhà ga hàng hóa hàng không
                  </dd>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    Diện tích khu đất
                  </dt>
                  <dd className="text-[15px] text-paper">
                    23.876,3 m²
                  </dd>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    Cấp công trình
                  </dt>
                  <dd className="text-[15px] text-paper">
                    Cấp II · dự án nhóm B
                  </dd>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    Năm thực hiện
                  </dt>
                  <dd className="text-[15px] text-paper">
                    2026
                  </dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-8">
              <div style={{opacity: "0", transform: "translateY(28px)"}}>
                <h2 className="max-w-[20ch] text-4xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                  Một cửa ngõ hàng hóa cho vùng kinh tế trọng điểm Bắc Bộ
                </h2>
              </div>
              <div style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-zinc-400">
                  Dự án tổ chức dòng hàng hóa hàng không quanh hai dây chuyền xuất và nhập tách biệt, không chồng chéo. Khối kho ở giữa được chia thành bốn khu chức năng — xuất và nhập, nội địa và quốc tế — nối liền khu vực đỗ tàu bay với sân giao nhận đường bộ.
                </p>
              </div>
              <div style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-zinc-400">
                  Nằm cách cảng nước sâu Lạch Huyện dưới 30 km và đấu thẳng vào cao tốc Hà Nội – Hải Phòng, nhà ga khép kín mô hình logistics Sea-Air cho toàn vùng duyên hải Bắc Bộ, với công suất khai thác 100.000 tấn/năm và khả năng mở rộng tới 250.000 tấn/năm.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="boi-canh" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/45">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Sự cần thiết đầu tư
              </p>
              <h2 className="mt-4 max-w-[22ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Vì sao Hải Phòng cần một nhà ga hàng hóa chuyên biệt
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="max-w-[60ch] text-lg leading-relaxed text-zinc-300">
                  Hoạt động hàng hóa tại Cát Bi hiện chủ yếu dựa vào khoang bụng máy bay khách (belly cargo) với hạ tầng hạn chế, chưa có nhà ga chuyên biệt đạt chuẩn quốc tế. Phần lớn sản lượng của vùng phải vận chuyển ngược lên Nội Bài, làm tăng chi phí logistics, kéo dài thời gian và gây áp lực lên tuyến cao tốc Hà Nội – Hải Phòng.
                </p>
              </div>
              <div style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="max-w-[60ch] text-lg leading-relaxed text-zinc-300">
                  Trong khi đó, dòng vốn FDI công nghệ cao (LG, Pegatron…) đổ về Hải Phòng tạo lượng hàng giá trị lớn, vòng đời ngắn, đòi hỏi logistics hàng không khắt khe. Một nhà ga hàng hóa chuyên biệt chính là mảnh ghép hoàn thiện hệ sinh thái Sea-Air, biến Cát Bi thành mắt xích trung chuyển của vùng duyên hải Bắc Bộ.
                </p>
              </div>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg sm:p-7" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-3xl font-bold tracking-[-0.02em] text-amber sm:text-4xl">
                  &lt;
                  30 km
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  tới cảng nước sâu Lạch Huyện
                </p>
              </div>
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg sm:p-7" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-3xl font-bold tracking-[-0.02em] text-amber sm:text-4xl">
                  105 km
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  tới Cảng HKQT Nội Bài
                </p>
              </div>
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg sm:p-7" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-3xl font-bold tracking-[-0.02em] text-amber sm:text-4xl">
                  ~80%
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  thị phần hàng không VN do hãng ngoại nắm
                </p>
              </div>
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg sm:p-7" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-3xl font-bold tracking-[-0.02em] text-amber sm:text-4xl">
                  15,3%/năm
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  tăng trưởng hàng hóa HK bình quân 1991–2022
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="swot" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/45">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Phân tích chiến lược
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Mô hình SWOT
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="glow-card rounded-[32px] border border-emerald-400/20 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-emerald-400">
                    <path d="M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z">
                    </path>
                  </svg>
                  <h3 className="text-xl font-bold tracking-[-0.01em] text-emerald-400">
                    Điểm mạnh
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-emerald-400 bg-current">
                    </span>
                    Được định hướng rõ trong quy hoạch mạng cảng quốc gia — ổn định pháp lý.
                  </li>
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-emerald-400 bg-current">
                    </span>
                    Chủ đầu tư ACV uy tín, tiềm lực tài chính mạnh.
                  </li>
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-emerald-400 bg-current">
                    </span>
                    Cách cảng nước sâu Lạch Huyện dưới 30 km — chuỗi Sea-Air hoàn chỉnh.
                  </li>
                </ul>
              </div>
              <div className="glow-card rounded-[32px] border border-rose-400/20 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-rose-400">
                    <path d="M244,128v64a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h35l-67-67-31.51,31.52a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L96,119l31.51-31.52a12,12,0,0,1,17,0L220,163V128a12,12,0,0,1,24,0Z">
                    </path>
                  </svg>
                  <h3 className="text-xl font-bold tracking-[-0.01em] text-rose-400">
                    Điểm yếu
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-rose-400 bg-current">
                    </span>
                    Hiện chỉ có belly cargo, thiếu đường bay freighter chuyên dụng.
                  </li>
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-rose-400 bg-current">
                    </span>
                    Địa chất yếu, ngập mặn làm đội chi phí nền móng và bảo trì.
                  </li>
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-rose-400 bg-current">
                    </span>
                    Thiếu kho vệ tinh (kho lạnh, hàng nguy hiểm) sát sân bay.
                  </li>
                </ul>
              </div>
              <div className="glow-card rounded-[32px] border border-amber/20 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-amber">
                    <path d="M219.71,117.38a12,12,0,0,0-7.25-8.52L161.28,88.39l10.59-70.61a12,12,0,0,0-20.64-10l-112,120a12,12,0,0,0,4.31,19.33l51.18,20.47L84.13,238.22a12,12,0,0,0,20.64,10l112-120A12,12,0,0,0,219.71,117.38ZM113.6,203.55l6.27-41.77a12,12,0,0,0-7.41-12.92L68.74,131.37,142.4,52.45l-6.27,41.77a12,12,0,0,0,7.41,12.92l43.72,17.49Z">
                    </path>
                  </svg>
                  <h3 className="text-xl font-bold tracking-[-0.01em] text-amber">
                    Cơ hội
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-amber bg-current">
                    </span>
                    Chuỗi cung ứng công nghệ cao dịch chuyển mạnh về Hải Phòng.
                  </li>
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-amber bg-current">
                    </span>
                    Các FTA (EVFTA, CPTPP) thúc đẩy kim ngạch hàng giá trị cao.
                  </li>
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-amber bg-current">
                    </span>
                    Nội Bài chạm ngưỡng công suất — cần hub dự phòng.
                  </li>
                </ul>
              </div>
              <div className="glow-card rounded-[32px] border border-sky-400/20 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-sky-400">
                    <path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z">
                    </path>
                  </svg>
                  <h3 className="text-xl font-bold tracking-[-0.01em] text-sky-400">
                    Thách thức
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-sky-400 bg-current">
                    </span>
                    Hãng vận tải đã quen hải quan và kho bãi tại Nội Bài.
                  </li>
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-sky-400 bg-current">
                    </span>
                    Cao tốc HN–HP thuận tiện, chủ hàng dễ chạy thẳng lên Nội Bài.
                  </li>
                  <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full text-sky-400 bg-current">
                    </span>
                    Thiết bị nhập khẩu — rủi ro tỷ giá đẩy tổng mức đầu tư.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="hinh-khoi" className="relative flex min-h-[100dvh] items-end overflow-hidden border-t border-line">
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent">
          </div>
          <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-5 pb-16 sm:px-8 sm:pb-24 lg:grid-cols-12 xl:px-[10%]">
            <div className="lg:col-span-7" style={{opacity: "0", transform: "translateY(28px)"}}>
              <h2 className="text-5xl font-bold leading-[0.98] tracking-[-0.025em] sm:text-7xl">
                Khối tích lớn,
                <br />
                đường nét tối giản
              </h2>
            </div>
            <div className="self-end lg:col-span-4 lg:col-start-9" style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="max-w-[42ch] text-lg leading-relaxed text-neutral-300">
                Hệ khung thép tấm tổ hợp tiền chế vượt nhịp chính 32 m, lưới cột đều 8 m, mái tôn dốc hai phía giữ tỷ lệ công trình thấp và trải dài để ưu tiên thao tác xếp dỡ. Vỏ bao che bằng tấm Sandwich Panel từ nền lên mái.
              </p>
            </div>
          </div>
        </section>
        <section id="chi-tieu" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/40">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Chỉ tiêu thiết kế
              </p>
              <h2 className="mt-4 max-w-[24ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Quy mô vận hành dự kiến
              </h2>
            </div>
            <div className="mt-14 grid auto-rows-[minmax(168px,auto)] grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 justify-between md:col-span-2 lg:row-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z">
                    </path>
                  </svg>
                  Công suất khai thác
                </span>
                <div className="mt-auto pt-10">
                  <div className="flex items-end gap-3">
                    <span className="text-6xl font-bold tabular-nums tracking-[-0.03em] text-paper sm:text-8xl">
                      100.000
                    </span>
                    <span className="mb-2 text-lg font-medium text-zinc-400">
                      tấn / năm
                    </span>
                  </div>
                  <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-zinc-400">
                    Có khả năng mở rộng lên 250.000 tấn/năm theo các giai đoạn đầu tư tiếp theo.
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M220,48V96a12,12,0,0,1-24,0V77l-35.51,35.52a12,12,0,0,1-17-17L179,60H160a12,12,0,0,1,0-24h48A12,12,0,0,1,220,48ZM95.51,143.51,60,179V160a12,12,0,0,0-24,0v48a12,12,0,0,0,12,12H96a12,12,0,0,0,0-24H77l35.52-35.51a12,12,0,0,0-17-17ZM208,148a12,12,0,0,0-12,12v19l-35.51-35.52a12,12,0,0,0-17,17L179,196H160a12,12,0,0,0,0,24h48a12,12,0,0,0,12-12V160A12,12,0,0,0,208,148ZM77,60H96a12,12,0,0,0,0-24H48A12,12,0,0,0,36,48V96a12,12,0,0,0,24,0V77l35.51,35.52a12,12,0,0,0,17-17Z">
                    </path>
                  </svg>
                  Diện tích khu đất
                </span>
                <div className="mt-auto pt-10">
                  <span className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-5xl">
                    23.876,3
                  </span>
                  <span className="ml-1.5 text-lg font-medium text-zinc-400">
                    m²
                  </span>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M238.15,70.54,185.46,17.86a20,20,0,0,0-28.29,0L17.85,157.17a20,20,0,0,0,0,28.29l52.69,52.68a20,20,0,0,0,28.29,0L238.15,98.83A20,20,0,0,0,238.15,70.54ZM84.68,218.34l-47-47L64,145l23.52,23.52a12,12,0,0,0,17-17L81,128l15-15,23.51,23.52a12,12,0,0,0,17-17L113,96l15-15,23.52,23.52a12,12,0,0,0,17-17L145,64l26.35-26.34,47,47Z">
                    </path>
                  </svg>
                  Diện tích xây dựng
                </span>
                <div className="mt-auto pt-10">
                  <span className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-5xl">
                    21.134,1
                  </span>
                  <span className="ml-1.5 text-lg font-medium text-zinc-400">
                    m²
                  </span>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 md:col-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z">
                    </path>
                    <path d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z">
                    </path>
                    <path d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z">
                    </path>
                  </svg>
                  Kết cấu vỏ bao che
                </span>
                <div className="mt-auto pt-8">
                  <p className="text-2xl font-bold leading-snug tracking-[-0.01em] text-paper sm:text-3xl">
                    Tấm Sandwich Panel từ nền lên mái
                  </p>
                  <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-zinc-400">
                    Hệ khung thép tổ hợp tiền chế vượt nhịp lớn, vỏ bao che nhẹ — thi công nhanh, cách nhiệt tốt và giữ khối tích công trình tinh gọn.
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.73,208H224V96a16,16,0,0,0-16-16H164a4,4,0,0,0-4,4V208H144V32.41a16.43,16.43,0,0,0-6.16-13,16,16,0,0,0-18.72-.69L39.12,72A16,16,0,0,0,32,85.34V208H16.27A8.18,8.18,0,0,0,8,215.47,8,8,0,0,0,16,224H240a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,239.73,208ZM76,184a8,8,0,0,1-8.53,8A8.18,8.18,0,0,1,60,183.72V168.27A8.19,8.19,0,0,1,67.47,160,8,8,0,0,1,76,168Zm0-56a8,8,0,0,1-8.53,8A8.19,8.19,0,0,1,60,127.72V112.27A8.19,8.19,0,0,1,67.47,104,8,8,0,0,1,76,112Zm40,56a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.26V168.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Zm0-56a8,8,0,0,1-8.53,8,8.19,8.19,0,0,1-7.47-8.26V112.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Z">
                    </path>
                  </svg>
                  Cấp công trình
                </span>
                <div className="mt-auto pt-10">
                  <span className="text-4xl font-bold tracking-[-0.02em] text-paper sm:text-5xl">
                    Cấp II
                  </span>
                  <p className="mt-2 text-base font-medium text-zinc-400">
                    Dự án nhóm B
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 md:col-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M238.15,70.54,185.46,17.86a20,20,0,0,0-28.29,0L17.85,157.17a20,20,0,0,0,0,28.29l52.69,52.68a20,20,0,0,0,28.29,0L238.15,98.83A20,20,0,0,0,238.15,70.54ZM84.68,218.34l-47-47L64,145l23.52,23.52a12,12,0,0,0,17-17L81,128l15-15,23.51,23.52a12,12,0,0,0,17-17L113,96l15-15,23.52,23.52a12,12,0,0,0,17-17L145,64l26.35-26.34,47,47Z">
                    </path>
                  </svg>
                  Kích thước nhà ga
                </span>
                <div className="mt-auto pt-8">
                  <span className="text-3xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-4xl">
                    100,25 × 224,74 m
                  </span>
                  <p className="mt-3 text-base leading-relaxed text-zinc-400">
                    Nhà ga một tầng, cao đỉnh cột 13,8 m — lưới cột lớn cho thao tác xếp dỡ liền mạch.
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z">
                    </path>
                  </svg>
                  Tuổi thọ thiết kế
                </span>
                <div className="mt-auto pt-10">
                  <span className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-5xl">
                    50
                  </span>
                  <span className="ml-1.5 text-lg font-medium text-zinc-400">
                    năm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="phan-khu" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/40">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Phân khu chức năng
              </p>
              <h2 className="mt-4 max-w-[20ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Bốn kho vận hành biệt lập
              </h2>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-zinc-400">
                Dòng hàng xuất và nhập, nội địa và quốc tế được tách riêng hoàn toàn — không chồng chéo, tối ưu kiểm soát và thông quan.
              </p>
            </div>
            <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 justify-between" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256" className="text-amber">
                    <path d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2">
                    </path>
                    <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z">
                    </path>
                  </svg>
                  <span className="text-[13px] font-semibold tabular-nums text-neutral-600">
                    01
                  </span>
                </div>
                <div className="mt-auto pt-8">
                  <h3 className="text-2xl font-bold tracking-[-0.01em] text-paper">
                    Xuất nội địa
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-amber">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208.49,143.51a12,12,0,0,1-17,17L140,109V224a12,12,0,0,1-24,0V109L64.49,160.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0ZM216,28H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z">
                      </path>
                    </svg>
                    Nội địa · Xuất
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-400">
                    Tiếp nhận, cân và soi chiếu hàng nội địa chờ xuất; tập kết theo chuyến rồi chuyển thẳng ra sân đỗ tàu bay.
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 justify-between" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256" className="text-amber">
                    <path d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2">
                    </path>
                    <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z">
                    </path>
                  </svg>
                  <span className="text-[13px] font-semibold tabular-nums text-neutral-600">
                    02
                  </span>
                </div>
                <div className="mt-auto pt-8">
                  <h3 className="text-2xl font-bold tracking-[-0.01em] text-paper">
                    Nhập nội địa
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-amber">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M47.51,112.49a12,12,0,0,1,17-17L116,147V32a12,12,0,0,1,24,0V147l51.51-51.52a12,12,0,0,1,17,17l-72,72a12,12,0,0,1-17,0ZM216,204H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z">
                      </path>
                    </svg>
                    Nội địa · Nhập
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-400">
                    Dỡ hàng từ tàu bay nội địa, phân loại và lưu kho ngắn hạn trước khi giao cho chủ hàng nhận.
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 justify-between" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256" className="text-amber">
                    <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2">
                    </path>
                    <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z">
                    </path>
                  </svg>
                  <span className="text-[13px] font-semibold tabular-nums text-neutral-600">
                    03
                  </span>
                </div>
                <div className="mt-auto pt-8">
                  <h3 className="text-2xl font-bold tracking-[-0.01em] text-paper">
                    Xuất quốc tế
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-amber">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208.49,143.51a12,12,0,0,1-17,17L140,109V224a12,12,0,0,1-24,0V109L64.49,160.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0ZM216,28H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z">
                      </path>
                    </svg>
                    Quốc tế · Xuất
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-400">
                    Gom hàng xuất khẩu, kiểm tra an ninh và thông quan hải quan đa lớp trước khi đưa lên tàu bay quốc tế.
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 justify-between" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256" className="text-amber">
                    <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2">
                    </path>
                    <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z">
                    </path>
                  </svg>
                  <span className="text-[13px] font-semibold tabular-nums text-neutral-600">
                    04
                  </span>
                </div>
                <div className="mt-auto pt-8">
                  <h3 className="text-2xl font-bold tracking-[-0.01em] text-paper">
                    Nhập quốc tế
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-amber">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M47.51,112.49a12,12,0,0,1,17-17L116,147V32a12,12,0,0,1,24,0V147l51.51-51.52a12,12,0,0,1,17,17l-72,72a12,12,0,0,1-17,0ZM216,204H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z">
                      </path>
                    </svg>
                    Quốc tế · Nhập
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-400">
                    Tiếp nhận hàng nhập khẩu, thông quan tại chỗ; bố trí riêng khu hàng giá trị cao và chuỗi lạnh (cold chain).
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 md:col-span-2 lg:col-span-4" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                    </path>
                  </svg>
                  Văn phòng Hải quan
                </span>
                <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-[44ch] text-2xl font-bold leading-snug tracking-[-0.01em] text-paper sm:text-3xl">
                    Phối hợp thông quan tại chỗ, liền mạch với khu kho
                  </p>
                  <div className="shrink-0">
                    <span className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-5xl">
                      300
                    </span>
                    <span className="ml-1.5 text-lg font-medium text-zinc-400">
                      m² phòng hồ sơ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="khong-gian" className="relative flex min-h-[100dvh] items-center overflow-hidden border-t border-line">
          <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/45 to-transparent">
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent">
          </div>
          <div className="relative mx-auto flex w-full max-w-[1600px] justify-end px-5 sm:px-8 xl:px-[10%]">
            <div className="max-w-[44ch]">
              <div style={{opacity: "0", transform: "translateY(28px)"}}>
                <h2 className="text-5xl font-bold leading-[1.0] tracking-[-0.02em] sm:text-7xl">
                  Không gian xử lý liền mạch
                </h2>
              </div>
              <div style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="mt-7 text-lg leading-relaxed text-neutral-300 sm:text-xl">
                  Chiều cao đỉnh cột 13,8 m cùng nhịp cột lớn cho phép xe nâng, băng chuyền và hệ giá kệ bốn tầng hoạt động không vướng. Cửa kính trên tường bao che lấy sáng tự nhiên, chớp tôn thông gió giữ kho luôn thoáng mà giảm phụ thuộc vào chiếu sáng nhân tạo ban ngày.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="thiet-bi" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/40">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Trang thiết bị
              </p>
              <h2 className="mt-4 max-w-[22ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Công nghệ khai thác đồng bộ
              </h2>
            </div>
            <div className="mt-14 grid auto-rows-[minmax(176px,auto)] grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 justify-between md:col-span-2 lg:row-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,40V80a8,8,0,0,1-16,0V48H176a8,8,0,0,1,0-16h40A8,8,0,0,1,224,40ZM80,208H48V176a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H80a8,8,0,0,0,0-16Zm136-40a8,8,0,0,0-8,8v32H176a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V176A8,8,0,0,0,216,168ZM40,88a8,8,0,0,0,8-8V48H80a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V80A8,8,0,0,0,40,88Zm32-8v96a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H80A8,8,0,0,0,72,80Z">
                    </path>
                  </svg>
                  An ninh soi chiếu
                </span>
                <div className="mt-auto pt-10">
                  <div className="flex items-end gap-3">
                    <span className="text-6xl font-bold tabular-nums tracking-[-0.03em] text-paper sm:text-8xl">
                      5
                    </span>
                    <span className="mb-2 text-lg font-medium text-zinc-400">
                      máy soi X-Ray
                    </span>
                  </div>
                  <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-zinc-400">
                    Soi chiếu toàn bộ luồng hàng xuất – nhập, đảm bảo an ninh hàng không ở từng điểm trung chuyển.
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z">
                    </path>
                    <path d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z">
                    </path>
                    <path d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z">
                    </path>
                  </svg>
                  Kệ Selective 4 tầng
                </span>
                <div className="mt-auto pt-10">
                  <span className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-5xl">
                    614
                  </span>
                  <span className="ml-1.5 text-lg font-medium text-zinc-400">
                    module
                  </span>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.43,133l-32-80A8,8,0,0,0,200,48a8.27,8.27,0,0,0-1.73.21L136,62V40a8,8,0,0,0-16,0V65.58L54.27,80.21A8,8,0,0,0,48.57,85l-32,80a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133Zm-160,35H32.62L56,109.54Zm97.24-32L200,77.54,223.38,136Z">
                    </path>
                  </svg>
                  Cân điện tử
                </span>
                <div className="mt-auto pt-8">
                  <p className="text-xl font-bold leading-snug tracking-[-0.01em] text-paper">
                    Đồng bộ dữ liệu khối lượng theo thời gian thực
                  </p>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm42.37,119.22,18.94-6.76a8,8,0,1,1,5.38,15.08l-15.48,5.52,4.52,16.87a8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,176,184a8,8,0,0,1-7.73-5.93l-5.57-20.8L136,141.86v30.83l13.66,13.65a8,8,0,0,1-11.32,11.32L128,187.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L120,172.69V141.86L93.3,157.27l-5.57,20.8A8,8,0,0,1,80,184a8.23,8.23,0,0,1-2.07-.27,8,8,0,0,1-5.66-9.8l4.52-16.87-15.48-5.52a8,8,0,0,1,5.38-15.08l18.94,6.76L112,128,85.63,112.78l-18.94,6.76A8.18,8.18,0,0,1,64,120a8,8,0,0,1-2.69-15.54l15.48-5.52L72.27,82.07a8,8,0,0,1,15.46-4.14l5.57,20.8L120,114.14V83.31L106.34,69.66a8,8,0,0,1,11.32-11.32L128,68.69l10.34-10.35a8,8,0,0,1,11.32,11.32L136,83.31v30.83l26.7-15.41,5.57-20.8a8,8,0,0,1,15.46,4.14l-4.52,16.87,15.48,5.52A8,8,0,0,1,192,120a8.18,8.18,0,0,1-2.69-.46l-18.94-6.76L144,128Z">
                    </path>
                  </svg>
                  Cold Chain
                </span>
                <div className="mt-auto pt-10">
                  <span className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-5xl">
                    4
                  </span>
                  <span className="ml-1.5 text-lg font-medium text-zinc-400">
                    container lạnh 20ft
                  </span>
                </div>
              </div>
              <div className="glow-card group flex h-full flex-col rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/60 sm:p-8 md:col-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M248,136a8,8,0,0,0-8,8v16H195.31L177,141.66l50.34-50.35a16,16,0,0,0,0-22.62L189.66,31h0L171.31,12.69a16,16,0,0,0-22.63,0L2.92,158.94A10,10,0,0,0,10,176H49.37l35.32,35.31a16,16,0,0,0,22.62,0L165.66,153,184,171.31A15.86,15.86,0,0,0,195.31,176H240v16a8,8,0,0,0,16,0V144A8,8,0,0,0,248,136ZM160,24l12.69,12.69L49.37,160H24.46Z">
                    </path>
                  </svg>
                  Giám sát &amp; truy xuất
                </span>
                <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-[40ch] text-2xl font-bold leading-snug tracking-[-0.01em] text-paper sm:text-3xl">
                    Camera chia sẻ dữ liệu trực tiếp với cơ quan Hải quan
                  </p>
                  <div className="shrink-0">
                    <span className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-5xl">
                      45
                    </span>
                    <span className="ml-1.5 text-lg font-medium text-zinc-400">
                      ngày lưu trữ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tien-do" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/45">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Quản lý tiến độ
              </p>
              <h2 className="mt-4 max-w-[20ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Tiến độ thực hiện dự án
              </h2>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-zinc-400">
                Vòng đời dự án trải qua ba giai đoạn — chuẩn bị, thực hiện và khai thác — với thi công xây dựng dồn trong 2026–2027 và đưa vào vận hành từ 2028.
              </p>
            </div>
            <ol className="mt-14 border-l border-line/80">
              <div className="relative pl-8 pb-10 last:pb-0 sm:pl-10" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-amber bg-ink">
                  <span className="h-1 w-1 rounded-full bg-amber">
                  </span>
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  Quý I–II / 2026
                </p>
                <h3 className="mt-1.5 text-2xl font-bold tracking-[-0.01em] text-paper">
                  Chuẩn bị đầu tư
                </h3>
                <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-zinc-400">
                  Khảo sát xây dựng, lập và thẩm tra Báo cáo nghiên cứu khả thi, thẩm định dự án.
                </p>
              </div>
              <div className="relative pl-8 pb-10 last:pb-0 sm:pl-10" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-amber bg-ink">
                  <span className="h-1 w-1 rounded-full bg-amber">
                  </span>
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  Quý II–III / 2026
                </p>
                <h3 className="mt-1.5 text-2xl font-bold tracking-[-0.01em] text-paper">
                  Thiết kế &amp; đấu thầu
                </h3>
                <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-zinc-400">
                  Thiết kế bản vẽ thi công 2 bước, thẩm tra – thẩm định, lập hồ sơ mời thầu.
                </p>
              </div>
              <div className="relative pl-8 pb-10 last:pb-0 sm:pl-10" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-amber bg-ink">
                  <span className="h-1 w-1 rounded-full bg-amber">
                  </span>
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  Quý IV/2026 – 2027
                </p>
                <h3 className="mt-1.5 text-2xl font-bold tracking-[-0.01em] text-paper">
                  Thi công xây dựng
                </h3>
                <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-zinc-400">
                  Gia cố nền móng, nhà ga + văn phòng, hạ tầng kỹ thuật và đường giao thông kết nối.
                </p>
              </div>
              <div className="relative pl-8 pb-10 last:pb-0 sm:pl-10" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-amber bg-ink">
                  <span className="h-1 w-1 rounded-full bg-amber">
                  </span>
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  Quý III–IV / 2027
                </p>
                <h3 className="mt-1.5 text-2xl font-bold tracking-[-0.01em] text-paper">
                  Lắp đặt thiết bị
                </h3>
                <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-zinc-400">
                  Dây chuyền soi chiếu, băng chuyền, hệ giá kệ, xe nâng và hệ thống quản lý kho.
                </p>
              </div>
              <div className="relative pl-8 pb-10 last:pb-0 sm:pl-10" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-amber bg-ink">
                  <span className="h-1 w-1 rounded-full bg-amber">
                  </span>
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  Từ 2028
                </p>
                <h3 className="mt-1.5 text-2xl font-bold tracking-[-0.01em] text-paper">
                  Vận hành &amp; khai thác
                </h3>
                <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-zinc-400">
                  Đưa vào khai thác, công suất tăng dần từ 65% (2028) lên 100% (2042).
                </p>
              </div>
              <div className="relative pl-8 pb-10 last:pb-0 sm:pl-10" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-amber bg-ink">
                  <span className="h-1 w-1 rounded-full bg-amber">
                  </span>
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  2028 – 2042
                </p>
                <h3 className="mt-1.5 text-2xl font-bold tracking-[-0.01em] text-paper">
                  Vòng đời phân tích
                </h3>
                <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-zinc-400">
                  15 năm khai thác, đánh giá hiệu quả tài chính và thanh lý tài sản cuối kỳ.
                </p>
              </div>
            </ol>
          </div>
        </section>
        <section id="hieu-qua" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/55">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Hiệu quả đầu tư
              </p>
              <h2 className="mt-4 max-w-[20ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Một dự án khả thi về tài chính
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8 flex flex-col justify-between" style={{opacity: "0", transform: "translateY(28px)"}}>
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">
                  Tổng mức đầu tư
                </span>
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-6xl font-bold tabular-nums tracking-[-0.03em] text-paper sm:text-7xl">
                    615,9
                  </span>
                  <span className="mb-2 text-lg font-medium text-zinc-400">
                    tỷ đồng
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="grid h-full grid-cols-2 gap-4">
                  <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8 flex flex-col justify-between">
                    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                      NPV (chủ đầu tư)
                    </span>
                    <span className="mt-6 text-3xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-4xl">
                      168,4 tỷ
                    </span>
                  </div>
                  <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8 flex flex-col justify-between">
                    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                      IRR
                    </span>
                    <span className="mt-6 text-3xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-4xl">
                      16%
                    </span>
                  </div>
                  <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8 flex flex-col justify-between">
                    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                      Tỷ số B/C
                    </span>
                    <span className="mt-6 text-3xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-4xl">
                      1,12
                    </span>
                  </div>
                  <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8 flex flex-col justify-between">
                    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                      Thời gian hoàn vốn
                    </span>
                    <span className="mt-6 text-3xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-4xl">
                      8 năm 9 tháng
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Các chỉ số chính ở trên tính theo quan điểm chủ đầu tư (vốn chủ sở hữu). Theo quan điểm tổng đầu tư: NPV 201,9 tỷ · IRR 14% · B/C 1,17 · hoàn vốn 8 năm 3 tháng.
              </p>
            </div>
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <h3 className="mt-16 text-[13px] font-semibold uppercase tracking-[0.16em] text-amber">
                Điểm nhấn cho nhà đầu tư
              </h3>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-2xl font-bold tracking-[-0.02em] text-amber sm:text-3xl">
                  16% / 10%
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  IRR vượt WACC — biên an toàn rõ rệt
                </p>
              </div>
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-2xl font-bold tracking-[-0.02em] text-amber sm:text-3xl">
                  1,06 – 1,84
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  Hệ số trả nợ (DSCR) luôn lớn hơn 1
                </p>
              </div>
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-2xl font-bold tracking-[-0.02em] text-amber sm:text-3xl">
                  ~139,6 tỷ
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  Đóng góp ngân sách nhà nước cả vòng đời
                </p>
              </div>
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-2xl font-bold tracking-[-0.02em] text-amber sm:text-3xl">
                  794
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  Việc làm trực tiếp được tạo ra
                </p>
              </div>
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-2xl font-bold tracking-[-0.02em] text-amber sm:text-3xl">
                  203 tỷ
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  Doanh thu năm khai thác đỉnh (2042)
                </p>
              </div>
              <div className="glow-card rounded-[28px] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-lg" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-2xl font-bold tracking-[-0.02em] text-amber sm:text-3xl">
                  114,8 tỷ
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-400">
                  Lợi nhuận sau thuế năm đỉnh (2042)
                </p>
              </div>
            </div>
            <div className="mt-4" style={{opacity: "0", transform: "translateY(28px)"}}>
              <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
                    Doanh thu theo năm
                  </h3>
                  <span className="text-[11px] text-muted">
                    tỷ đồng · chưa VAT
                  </span>
                </div>
                <div className="mt-8 overflow-x-auto pb-1">
                  <div className="min-w-[620px]">
                    <div className="flex h-56 items-end gap-1.5 sm:gap-2">
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          113
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "48.76847290640394%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          121
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "52.27980295566502%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          128
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "55.5743842364532%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          142
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "61.3832512315271%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          142
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "61.64334975369458%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          142
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "61.64334975369458%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          156
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "67.75566502463055%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          165
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "71.65714285714287%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          166
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "71.96059113300493%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          174
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "75.47192118226602%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          174
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "75.47192118226602%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          178
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "77.29261083743843%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          190
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "82.32118226600986%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          190
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "82.32118226600986%"}}>
                        </div>
                      </div>
                      <div className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-medium tabular-nums text-zinc-400 sm:text-[11px]">
                          203
                        </span>
                        <div className="w-full rounded-t bg-gradient-to-t from-amber-dim to-amber transition-all duration-300 group-hover:from-amber group-hover:to-paper" style={{height: "88%"}}>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-1.5 sm:gap-2">
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2028
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2029
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2030
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2031
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2032
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2033
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2034
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2035
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2036
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2037
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2038
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2039
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2040
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2041
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted sm:text-[11px]">
                        2042
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
                  Cơ cấu tổng mức đầu tư
                </h3>
                <div className="mt-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[14px] text-zinc-300">
                          Chi phí xây dựng
                        </span>
                        <span className="text-[14px] font-semibold tabular-nums text-paper">
                          352,5 tỷ
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full rounded-full bg-amber" style={{width: "57%"}}>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[14px] text-zinc-300">
                          Chi phí thiết bị
                        </span>
                        <span className="text-[14px] font-semibold tabular-nums text-paper">
                          130,6 tỷ
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full rounded-full bg-amber" style={{width: "21%"}}>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[14px] text-zinc-300">
                          Chi phí dự phòng
                        </span>
                        <span className="text-[14px] font-semibold tabular-nums text-paper">
                          78,4 tỷ
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full rounded-full bg-amber" style={{width: "13%"}}>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[14px] text-zinc-300">
                          Tư vấn &amp; quản lý dự án
                        </span>
                        <span className="text-[14px] font-semibold tabular-nums text-paper">
                          24,1 tỷ
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full rounded-full bg-amber" style={{width: "4%"}}>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[14px] text-zinc-300">
                          Lãi vay &amp; vốn lưu động
                        </span>
                        <span className="text-[14px] font-semibold tabular-nums text-paper">
                          26,6 tỷ
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full rounded-full bg-amber" style={{width: "4%"}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
                    Cơ cấu nguồn vốn
                  </h3>
                  <div className="mt-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[14px] text-zinc-300">
                            Vốn chủ sở hữu
                          </span>
                          <span className="text-[14px] font-semibold tabular-nums text-paper">
                            371,9 tỷ
                          </span>
                        </div>
                        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
                          <div className="h-full rounded-full bg-amber" style={{width: "60%"}}>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[14px] text-zinc-300">
                            Vốn vay Vietcombank · 8,5%/năm
                          </span>
                          <span className="text-[14px] font-semibold tabular-nums text-paper">
                            244,0 tỷ
                          </span>
                        </div>
                        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
                          <div className="h-full rounded-full bg-amber" style={{width: "40%"}}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8 flex-1">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
                    Doanh thu theo vòng đời
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-zinc-300">
                    Doanh thu tăng từ 112,5 tỷ (2028, công suất 65%) lên 203,0 tỷ (2042, công suất 100%); WACC 10,01%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="do-nhay" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/45">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Quản lý rủi ro
              </p>
              <h2 className="mt-4 max-w-[20ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Phân tích độ nhạy
              </h2>
              <p className="mt-6 max-w-[64ch] text-lg leading-relaxed text-zinc-400">
                Dự án vẫn hiệu quả khi công suất biến động trong biên độ hợp lý; ngưỡng rủi ro xuất hiện khi công suất giảm sâu (−30%) khiến NPV âm.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-5">
              <div className="glow-card overflow-x-auto rounded-[32px] border border-white/10 bg-neutral-900/40 backdrop-blur-lg lg:col-span-3" style={{opacity: "0", transform: "translateY(28px)"}}>
                <table className="w-full min-w-[440px] text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-white/10 text-[11px] uppercase tracking-[0.12em] text-muted">
                      <th className="px-5 py-4 font-medium ">
                        Kịch bản công suất
                      </th>
                      <th className="px-5 py-4 font-medium text-right">
                        NPV
                      </th>
                      <th className="px-5 py-4 font-medium text-right">
                        IRR
                      </th>
                      <th className="px-5 py-4 font-medium text-right">
                        Hoàn vốn
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 last:border-0">
                      <td className="px-5 py-4 font-semibold text-paper">
                        +20%
                      </td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-emerald-400">
                        322,3 tỷ
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums text-zinc-300">
                        20%
                      </td>
                      <td className="px-5 py-4 text-right text-zinc-400">
                        10 năm 1 tháng
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 last:border-0">
                      <td className="px-5 py-4 font-semibold text-paper">
                        Cơ sở (100%)
                      </td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-emerald-400">
                        168,4 tỷ
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums text-zinc-300">
                        16%
                      </td>
                      <td className="px-5 py-4 text-right text-zinc-400">
                        12 năm 8 tháng
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 last:border-0">
                      <td className="px-5 py-4 font-semibold text-paper">
                        −20%
                      </td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-emerald-400">
                        13,7 tỷ
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums text-zinc-300">
                        11%
                      </td>
                      <td className="px-5 py-4 text-right text-zinc-400">
                        16 năm 8 tháng
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 last:border-0">
                      <td className="px-5 py-4 font-semibold text-paper">
                        −30%
                      </td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-rose-400">
                        −64,1 tỷ
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums text-zinc-300">
                        9%
                      </td>
                      <td className="px-5 py-4 text-right text-zinc-400">
                        Không hoàn vốn
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg lg:col-span-2 sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper">
                  Rủi ro trọng yếu &amp; ứng phó
                </h3>
                <ul className="mt-5 space-y-5">
                  <li>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-amber">
                      Thị trường
                    </p>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-zinc-300">
                      Khó kéo luồng hàng quen thuộc từ Nội Bài — cần biểu phí dịch vụ cạnh tranh trong các năm đầu.
                    </p>
                  </li>
                  <li>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-amber">
                      Tỷ giá
                    </p>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-zinc-300">
                      Thiết bị soi chiếu, băng chuyền nhập khẩu — biến động tỷ giá có thể đẩy tổng mức đầu tư.
                    </p>
                  </li>
                  <li>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-amber">
                      Địa chất
                    </p>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-zinc-300">
                      Nền đất yếu, ngập mặn — kiểm soát chi phí gia cố nền móng và bảo trì.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="to-chuc" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/55">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Tổ chức &amp; nhân sự
              </p>
              <h2 className="mt-4 max-w-[20ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Bộ máy vận hành nhà ga
              </h2>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-zinc-400">
                Chủ đầu tư (ACV) trực tiếp tổ chức quản lý thực hiện dự án bằng bộ máy chuyên môn của mình.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-5 glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256" className="shrink-0 text-amber">
                  <path d="M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z" opacity="0.2">
                  </path>
                  <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z">
                  </path>
                </svg>
                <div>
                  <p className="text-5xl font-bold tabular-nums tracking-[-0.03em] text-paper">
                    794
                  </p>
                  <p className="mt-1 text-[15px] text-zinc-400">
                    nhân sự vận hành
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <p className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper sm:text-5xl">
                  34,6 tỷ
                </p>
                <p className="mt-1 text-[15px] text-zinc-400">
                  quỹ lương/năm (≈ 42,0 tỷ gồm bảo hiểm)
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256" className="text-amber">
                    <path d="M136,32V216H40V85.35a8,8,0,0,1,3.56-6.66l80-53.33A8,8,0,0,1,136,32Z" opacity="0.2">
                    </path>
                    <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z">
                    </path>
                  </svg>
                  <span className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper">
                    154
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-[-0.01em] text-paper">
                  Khối văn phòng cố định
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-zinc-400">
                  Ban giám đốc, Kế hoạch, Kế toán, Kinh doanh, Quản lý chất lượng – An ninh, Kỹ thuật công nghệ, Nhân sự – Đào tạo, Tin học – Điều hành.
                </p>
              </div>
              <div className="glow-card rounded-[32px] border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-lg sm:p-8" style={{opacity: "0", transform: "translateY(28px)"}}>
                <div className="flex items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256" className="text-amber">
                    <path d="M224,80l-96,56L32,80l96-56Z" opacity="0.2">
                    </path>
                    <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z">
                    </path>
                  </svg>
                  <span className="text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper">
                    640
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-[-0.01em] text-paper">
                  Khối lao động tại kho
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-zinc-400">
                  Xuất nhập quốc tế, xuất nhập nội địa, khai thác chất xếp, vệ sinh – bảo vệ, bốc xếp – phục vụ sân đỗ.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="ban-ve" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/55">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                Hồ sơ bản vẽ
              </p>
              <h2 className="mt-4 max-w-[20ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Bản vẽ thuyết trình đồ án
              </h2>
              <p className="mt-6 max-w-[64ch] text-lg leading-relaxed text-zinc-400">
                Bộ bản vẽ trình bày trước hội đồng — phần kiến trúc và phần kinh tế của dự án. Nhấn để xem trực tiếp hoặc tải bản đầy đủ.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="glow-card group overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900/40 backdrop-blur-lg transition-colors duration-300 hover:border-white/20" style={{opacity: "0", transform: "translateY(28px)"}}>
                <a href="/docs/banve-kientruc.pdf" target="_blank" rel="noopener noreferrer" className="relative block aspect-[1.414/1] overflow-hidden bg-white" aria-label="Xem bản vẽ: Bản vẽ kiến trúc">
                  <img alt="Bản vẽ kiến trúc" loading="lazy" decoding="async" data-nimg="fill" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_13.jpg 384w, /images/image_23.jpg 640w, /images/image_21.jpg 750w, /images/image_27.jpg 828w, /images/image_34.jpg 1080w, /images/image_44.jpg 1200w, /images/image_72.jpg 1920w, /images/image_68.jpg 2048w, /images/image.jpg 3840w" src="/images/image.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  </div>
                </a>
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-2 text-amber">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152Zm72,108.53a8.18,8.18,0,0,1-8.25,7.47H192v16h15.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H192v15.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152.53ZM64,144H48a8,8,0,0,0-8,8v55.73A8.17,8.17,0,0,0,47.47,216,8,8,0,0,0,56,208v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,64,144Zm-.35,40H56V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,63.65,184ZM128,144H112a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h15.32c19.66,0,36.21-15.48,36.67-35.13A36,36,0,0,0,128,144Zm-.49,56H120V160h8a20,20,0,0,1,20,20.77C147.58,191.59,138.34,200,127.51,200Z">
                      </path>
                    </svg>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">
                      PDF ·
                      24 MB
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.01em] text-paper">
                    Bản vẽ kiến trúc
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-zinc-400">
                    Mặt bằng, mặt đứng, mặt cắt · 9 trang khổ A2
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="/docs/banve-kientruc.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-amber-dim active:scale-[0.98]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z">
                        </path>
                      </svg>
                      Xem bản vẽ
                    </a>
                    <a href="/docs/banve-kientruc.pdf" download="" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[14px] text-paper transition-colors duration-300 hover:bg-white/5 active:scale-[0.98]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z">
                        </path>
                      </svg>
                      Tải về
                    </a>
                  </div>
                </div>
              </div>
              <div className="glow-card group overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900/40 backdrop-blur-lg transition-colors duration-300 hover:border-white/20" style={{opacity: "0", transform: "translateY(28px)"}}>
                <a href="/docs/banve-kinhte.pdf" target="_blank" rel="noopener noreferrer" className="relative block aspect-[1.414/1] overflow-hidden bg-white" aria-label="Xem bản vẽ: Bản vẽ kinh tế">
                  <img alt="Bản vẽ kinh tế" loading="lazy" decoding="async" data-nimg="fill" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_19.jpg 384w, /images/image_29.jpg 640w, /images/image_31.jpg 750w, /images/image_38.jpg 828w, /images/image_59.jpg 1080w, /images/image_71.jpg 1200w, /images/image_70.jpg 1920w, /images/image_76.jpg 2048w, /images/image_1.jpg 3840w" src="/images/image_1.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  </div>
                </a>
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-2 text-amber">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152Zm72,108.53a8.18,8.18,0,0,1-8.25,7.47H192v16h15.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H192v15.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152.53ZM64,144H48a8,8,0,0,0-8,8v55.73A8.17,8.17,0,0,0,47.47,216,8,8,0,0,0,56,208v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,64,144Zm-.35,40H56V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,63.65,184ZM128,144H112a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h15.32c19.66,0,36.21-15.48,36.67-35.13A36,36,0,0,0,128,144Zm-.49,56H120V160h8a20,20,0,0,1,20,20.77C147.58,191.59,138.34,200,127.51,200Z">
                      </path>
                    </svg>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">
                      PDF ·
                      2,4 MB
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.01em] text-paper">
                    Bản vẽ kinh tế
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-zinc-400">
                    Tổng mức đầu tư, dòng tiền, kế hoạch huy động vốn · 9 trang
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="/docs/banve-kinhte.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-amber-dim active:scale-[0.98]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z">
                        </path>
                      </svg>
                      Xem bản vẽ
                    </a>
                    <a href="/docs/banve-kinhte.pdf" download="" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[14px] text-paper transition-colors duration-300 hover:bg-white/5 active:scale-[0.98]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z">
                        </path>
                      </svg>
                      Tải về
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="thu-vien" className="relative isolate overflow-hidden border-t border-line py-28 sm:py-44">
          <div className="absolute inset-0 -z-10 bg-ink/40">
          </div>
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
            <div style={{opacity: "0", transform: "translateY(28px)"}}>
              <h2 className="max-w-[20ch] text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
                Thư viện hình ảnh
              </h2>
              <p className="mt-5 max-w-[55ch] text-base text-zinc-400 sm:text-lg">
                Một lát cắt qua công trình, từ vỏ ngoài tới các không gian vận hành bên trong.
              </p>
            </div>
            <div className="mt-14 grid auto-rows-[44vw] grid-cols-1 gap-4 sm:auto-rows-[240px] sm:gap-5 lg:grid-cols-12">
              <div className="group relative overflow-hidden rounded-3xl bg-ink-soft lg:col-span-8 lg:row-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <img alt="Phối cảnh tổng thể nhà ga nhìn từ phía sân đỗ" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_33.jpg 384w, /images/image_49.jpg 640w, /images/image_89.jpg 750w, /images/image_63.jpg 828w, /images/image_77.jpg 1080w, /images/image_75.jpg 1200w, /images/image_82.jpg 1920w, /images/image_84.jpg 2048w, /images/image_2.jpg 3840w" src="/images/image_2.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl bg-ink-soft lg:col-span-4 lg:row-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <img alt="Không gian kho hàng với nhịp cột lớn" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_37.jpg 384w, /images/image_58.jpg 640w, /images/image_46.jpg 750w, /images/image_50.jpg 828w, /images/image_57.jpg 1080w, /images/image_67.jpg 1200w, /images/image_85.jpg 1920w, /images/image_80.jpg 2048w, /images/image_5.jpg 3840w" src="/images/image_5.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl bg-ink-soft lg:col-span-4" style={{opacity: "0", transform: "translateY(28px)"}}>
                <img alt="Chi tiết lớp vỏ kim loại đục lỗ" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_10.jpg 384w, /images/image_11.jpg 640w, /images/image_12.jpg 750w, /images/image_14.jpg 828w, /images/image_18.jpg 1080w, /images/image_20.jpg 1200w, /images/image_52.jpg 1920w, /images/image_36.jpg 2048w, /images/image_3.jpg 3840w" src="/images/image_3.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl bg-ink-soft lg:col-span-4" style={{opacity: "0", transform: "translateY(28px)"}}>
                <img alt="Khu vực phân loại hàng hóa bên trong" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_64.jpg 384w, /images/image_16.jpg 640w, /images/image_17.jpg 750w, /images/image_35.jpg 828w, /images/image_24.jpg 1080w, /images/image_53.jpg 1200w, /images/image_65.jpg 1920w, /images/image_66.jpg 2048w, /images/image_7.jpg 3840w" src="/images/image_7.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl bg-ink-soft lg:col-span-4" style={{opacity: "0", transform: "translateY(28px)"}}>
                <img alt="Khối văn phòng điều hành" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_15.jpg 384w, /images/image_25.jpg 640w, /images/image_47.jpg 750w, /images/image_74.jpg 828w, /images/image_39.jpg 1080w, /images/image_43.jpg 1200w, /images/image_78.jpg 1920w, /images/image_87.jpg 2048w, /images/image_8.jpg 3840w" src="/images/image_8.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl bg-ink-soft lg:col-span-6 lg:row-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <img alt="Mặt đứng công trình về cuối ngày" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_32.jpg 384w, /images/image_22.jpg 640w, /images/image_30.jpg 750w, /images/image_28.jpg 828w, /images/image_62.jpg 1080w, /images/image_40.jpg 1200w, /images/image_51.jpg 1920w, /images/image_56.jpg 2048w, /images/image_9.jpg 3840w" src="/images/image_9.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl bg-ink-soft lg:col-span-3 lg:row-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <img alt="Hành lang kết nối kho và văn phòng" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_26.jpg 384w, /images/image_45.jpg 640w, /images/image_41.jpg 750w, /images/image_61.jpg 828w, /images/image_48.jpg 1080w, /images/image_60.jpg 1200w, /images/image_79.jpg 1920w, /images/image_83.jpg 2048w, /images/image_4.jpg 3840w" src="/images/image_4.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl bg-ink-soft lg:col-span-3 lg:row-span-2" style={{opacity: "0", transform: "translateY(28px)"}}>
                <img alt="Không gian làm việc nhìn ra đường lăn" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 1024px) 100vw, 50vw" srcSet="/images/image_54.jpg 384w, /images/image_42.jpg 640w, /images/image_55.jpg 750w, /images/image_69.jpg 828w, /images/image_73.jpg 1080w, /images/image_81.jpg 1200w, /images/image_86.jpg 1920w, /images/image_88.jpg 2048w, /images/image_6.jpg 3840w" src="/images/image_6.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="lien-he" className="relative border-t border-line bg-ink-soft/80 py-20 backdrop-blur-2xl sm:py-28">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-[10%]">
          <div style={{opacity: "0", transform: "translateY(28px)"}}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
              Đồ án tốt nghiệp
            </p>
            <h2 className="mt-4 max-w-[22ch] text-3xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-5xl">
              Dự án đầu tư xây dựng Nhà ga hàng hóa Cảng HKQT Cát Bi – Hải Phòng
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3" style={{opacity: "0", transform: "translateY(28px)"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="mt-0.5 shrink-0 text-amber">
                <path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" opacity="0.2">
                </path>
                <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z">
                </path>
              </svg>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  Địa điểm
                </p>
                <div className="mt-1.5 space-y-0.5">
                  <p className="text-[15px] leading-snug text-paper">
                    Cảng HKQT Cát Bi
                  </p>
                  <p className="text-[15px] leading-snug text-paper">
                    Hải Phòng, Việt Nam
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3" style={{opacity: "0", transform: "translateY(28px)"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="mt-0.5 shrink-0 text-amber">
                <path d="M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07L128,160Z" opacity="0.2">
                </path>
                <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z">
                </path>
              </svg>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  Đồ án
                </p>
                <div className="mt-1.5 space-y-0.5">
                  <p className="text-[15px] leading-snug text-paper">
                    Khoa Quản lý dự án
                  </p>
                  <p className="text-[15px] leading-snug text-paper">
                    Đại học Bách khoa Đà Nẵng
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3" style={{opacity: "0", transform: "translateY(28px)"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="mt-0.5 shrink-0 text-amber">
                <path d="M224,64,128,96,32,64l96-32Z" opacity="0.2">
                </path>
                <path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32a8,8,0,0,0-5.4,6.75A5,5,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z">
                </path>
              </svg>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  Sinh viên thực hiện
                </p>
                <div className="mt-1.5 space-y-0.5">
                  <p className="text-[15px] leading-snug text-paper">
                    NGUYỄN MINH CHÂU
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3" style={{opacity: "0", transform: "translateY(28px)"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="mt-0.5 shrink-0 text-amber">
                <path d="M192,80v96H104a32,32,0,1,0-32-32H64V80Z" opacity="0.2">
                </path>
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z">
                </path>
              </svg>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  Giáo viên hướng dẫn
                </p>
                <div className="mt-1.5 space-y-0.5">
                  <p className="text-[15px] leading-snug text-paper">
                    TRƯƠNG NGỌC SƠN
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-16 max-w-[80ch] text-xs leading-relaxed text-neutral-500">
            © 2026 Dự án đầu tư xây dựng Nhà ga hàng hóa Cảng HKQT Cát Bi. Đồ án tốt nghiệp – Khoa Quản lý dự án, Đại học Bách khoa Đà Nẵng.
          </p>
        </div>
      </footer>
      <div className="grain" aria-hidden="true">
      </div>
    </>
  )
}
