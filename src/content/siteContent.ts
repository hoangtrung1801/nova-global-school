import campusHero from './images/ChatGPT Image 23_43_42 26 thg 6, 2026.png'
import learningHall from './images/ChatGPT Image 23_44_43 26 thg 6, 2026.png'
import libraryImage from './images/ChatGPT Image 23_44_48 26 thg 6, 2026.png'
import classroomImage from './images/ChatGPT Image 23_44_58 26 thg 6, 2026.png'
import sportsImage from './images/ChatGPT Image 23_45_48 26 thg 6, 2026.png'
import aerialImage from './images/ChatGPT Image Jun 26, 2026, 11_34_43 PM.png'
import contentPdf from './section-content.pdf'

export const siteContent = {
  title: 'NOVA GLOBAL SCHOOL',
  subtitle:
    'Kien tao be phong vung chac cho the he cong dan toan cau tuong lai tai khu vuc phia Nam Da Nang.',
  statement:
    'Tai Nova Global School, chung toi tin rang moi hoc sinh la mot ca the doc lap mang tiem nang vo han. Bang viec ket hop hai hoa giua triet ly giao duc toan dien, ha tang cong nghe tien tien va moi truong da van hoa, nha truong cam ket chuan bi cho cac em khong chi kien thuc hoc thuat xuat sac ma con la ban linh, tu duy phan bien va long trac an de tu tin buoc ra the gioi.',
  ctas: [
    { label: 'Dang Ky Tuyen Sinh Nam Hoc Moi', href: '#lien-he' },
    { label: 'Kham Pha Khuon Vien Truong 3D', href: '#thu-vien' },
  ],
  heroImage: campusHero,
  overview: {
    location:
      'Du an Truong lien cap Nova Global School duoc xay dung tai nut giao duong Da Ban 7, phuong Hoa Xuan, quan Cam Le, thanh pho Da Nang. Vi tri ket noi truc tiep voi truc Vo Chi Cong va Quoc lo 1A, toi uu ban kinh dua don hoc sinh tu cac quan trung tam va mo rong tiep can khu vuc do thi ve tinh phia Bac Quang Nam.',
    developer:
      'Cong trinh duoc dau tu boi Tap doan Nguyen Hoang (NHG), to chuc giao duc tu thuc hang dau Viet Nam, mang den mo hinh quan tri tien tien va nen tang van hanh ben vung cho du an.',
    scale:
      'Truong tap trung cho hoc sinh 11 den 17 tuoi, bao gom THCS va THPT. Tong dien tich dat quy hoach 21,390 m2, tong dien tich san 12,643 m2, quy mo toi da 920 hoc sinh trong mot moi truong hoc tap mat do thap, thong thoang va an toan.',
    stats: [
      { value: '21,390 m2', label: 'Tong dien tich dat quy hoach' },
      { value: '12,643 m2', label: 'Tong dien tich san xay dung' },
      { value: '920', label: 'Hoc sinh cong suat toi da' },
      { value: '11 - 17', label: 'Do tuoi dao tao trong tam' },
    ],
  },
  academic: [
    {
      title: 'Su giao thoa chuan muc',
      body: 'Chuong trinh hoc ket hop khung kien thuc cot loi cua MOET voi cac mo hinh danh gia nang luc tu duy quoc te, giup hoc sinh vua dat thanh tich cao trong ky thi quoc gia vua san sang hoi nhap.',
    },
    {
      title: 'Ngoai ngu la chia khoa',
      body: 'Tieng Anh duoc day chuyen sau, tuong tac truc tiep voi giao vien ban ngu. Lo trinh ca nhan hoa huong toi IELTS hoac VSTEP B2/C1 ngay khi tot nghiep THPT.',
    },
    {
      title: 'Trien khai 5 nen tang',
      body: 'Khung phat trien can bang giua hoc thuat, the chat, tu duy phan bien va sang tao, tri tue cam xuc va dao duc, cung ky nang mem the ky 21.',
    },
  ],
  facilities: [
    {
      title: 'Khoi lop hoc va hanh chinh',
      body: 'Cong trinh 4 tang va 1 tang tum voi tong dien tich san 10,559 m2. Phong hoc don anh sang tu nhien, trang bi bang tuong tac thong minh, dieu hoa trung tam va ban ghe cong thai hoc duong.',
    },
    {
      title: 'Nha bo mon va thi nghiem',
      body: 'Khoi nha 3 tang 1,062 m2 bo tri phong thi nghiem Vat ly, Hoa hoc, Sinh hoc dat chuan an toan quoc te, cung cac phong chuc nang STEM, Robot hoc, Am nhac va Hoi hoa.',
    },
    {
      title: 'Lien hop the thao ngoai troi',
      body: 'To hop gom 2 san bong da co nhan tao 35 x 54 m va duong chay dien kinh 853.5 m2 son epoxy do, chong tron truot va kich thich tinh than the thao nang dong.',
    },
    {
      title: 'Nha da nang',
      body: 'Khoi hop 1 tang cao 9.95 m, dien tich 1,022 m2, ket cau vi keo thep vuot nhip. Ben trong co san thi dau PVC, san khau 27 m2 va khan dai 78 m2 phuc vu su kien toan truong.',
    },
    {
      title: 'Hau can va an toan noi khu',
      body: 'Nha an 336 m2 van hanh theo co che mot chieu, tram bien ap rieng, be chua nuoc ngam 224 m3, camera AI 24/7 va lo trinh xe buyt hoc duong an toan.',
    },
  ],
  tuition: [
    { title: 'Hoc phi THCS', value: '63 trieu / nam', body: 'Tuong duong 7 trieu / thang.' },
    { title: 'Hoc phi THPT', value: '81 trieu / nam', body: 'Tuong duong 9 trieu / thang.' },
    {
      title: 'Dong phuc',
      value: '1.5 trieu / nam',
      body: 'Bao gom 2 bo hoc thuat, 1 bo the thao va 1 ao khoac nhan dien thuong hieu.',
    },
  ],
  incentives: [
    'Cam ket giu lo trinh hoc phi on dinh, khong tang qua 5% moi nam theo bien dong lam phat.',
    'Chiet khau 5% tong hoc phi khi dong tron nam truoc thoi han quy dinh.',
    'Uu dai toi da 10% cho gia dinh co tu con thu hai hoc tai he thong va hoc bong Nova Pioneer cho hoc sinh co thanh tich dau vao xuat sac.',
  ],
  hr: {
    stats: [
      { value: '88', label: 'Tong nhan su toan thoi gian' },
      { value: '46', label: 'Giao vien dung lop' },
      { value: '1 / 10', label: 'Ty le nhan su dong hanh voi hoc sinh' },
    ],
    groups: [
      {
        title: 'Ban giam hieu',
        body: '04 nhan su gom 01 Hieu truong va 03 Pho Hieu truong phu trach chuyen mon MOET, chuong trinh quoc te - ngoai khoa, va van hanh - dich vu hoc duong.',
      },
      {
        title: 'Khoi chuyen mon giang day',
        body: '47 nhan su, trong do 42 giao vien bo mon, 03 nhan su giao vu va 02 nhan su thu vien.',
      },
      {
        title: 'Khoi quoc te va ngoai khoa',
        body: '06 nhan su gom 04 giao vien ban ngu co TESOL/CELTA va 02 chuyen vien ky nang song phu trach ngoai khoa va da ngoai sinh thai.',
      },
      {
        title: 'Khoi van hanh va doi song',
        body: '23 nhan su bao gom y te, tam ly hoc duong, bep dinh duong, xe dua don, ky thuat bao tri, IT, an ninh va ve sinh.',
      },
      {
        title: 'Khoi tham muu va ho tro',
        body: '08 nhan su van hanh ke toan - tai chinh, tuyen sinh - phat trien thuong hieu va quan tri nhan su.',
      },
    ],
  },
  finance: {
    capital: [
      { label: 'Tong muc dau tu', value: '152.68 ty VND' },
      { label: 'Von chu so huu', value: '92.68 ty VND · 60.7%' },
      { label: 'Von tin dung tai tro', value: '60.00 ty VND · 39.3%' },
    ],
    metrics: [
      { label: 'NPV', value: '+50.11 ty VND' },
      { label: 'IRR', value: '13.0%' },
      { label: 'B/C', value: '1.095' },
      { label: 'Hoan von', value: '10 nam 10 thang' },
      { label: 'DSCR', value: '3.247' },
    ],
    social:
      'Du an du kien dong gop luy ke 130.13 ty VND vao Ngan sach Nha nuoc trong 15 nam hoat dong on dinh. Du an dong thoi duoc huong co che xa hoi hoa giao duc, mien giam 60% tien thue dat va uu dai mien thue thu nhap doanh nghiep 4 nam dau van hanh.',
  },
  scenarios: [
    {
      name: 'Rat Xau',
      assumption: 'Cong suat -30%, hoc phi -10%, chi phi +10%',
      npv: '-33.21 ty',
      irr: '7%',
      payback: '> 20 nam',
      status: 'Khong kha thi',
      summary:
        'Kich ban xau nhat day du rong cho phep nhin thay nguong can bao ve bang chinh sach khoa bieu phi va duy tri ty le lap day an toan ngay tu nam dau.',
    },
    {
      name: 'Xau',
      assumption: 'Cong suat -15%, hoc phi 0%, chi phi +5%',
      npv: '+8.45 ty',
      irr: '11%',
      payback: '13 nam 8 thang',
      status: 'Kha thi an toan',
      summary:
        'Ngay ca khi si so hut 15% va lam phat chi phi tang 5%, du an van duy tri IRR cao hon chi phi su dung von 9%.',
    },
    {
      name: 'Ke Hoach',
      assumption: 'Van hanh chuan theo thong so goc',
      npv: '+50.11 ty',
      irr: '13%',
      payback: '10 nam 10 thang',
      status: 'Dat ky vong',
      summary:
        'Day la kich ban muc tieu cua nha truong, can bang giua ty le lap day, muc hoc phi va chi phi van hanh.',
    },
    {
      name: 'Tot',
      assumption: 'Cong suat +5%, hoc phi +15%, chi phi -5%',
      npv: '+64.02 ty',
      irr: '14%',
      payback: '9 nam 11 thang',
      status: 'Vuot chi tieu',
      summary:
        'Khi truyen thong tuyen sinh dat hieu qua va van hanh toi uu, du an tao ra bien do tai chinh tot hon dang ke.',
    },
    {
      name: 'Rat Tot',
      assumption: 'Cong suat +15%, hoc phi +20%, chi phi -10%',
      npv: '+91.81 ty',
      irr: '15%',
      payback: '8 nam 2 thang',
      status: 'Toi uu tuyet doi',
      summary:
        'Kich ban tang truong cao cho thay du an co du dia de mo rong gia tri neu nhuong quyen thuong hieu va tuyen sinh dat muc tieu cao.',
    },
  ],
  downloads: {
    title: 'Ho so noi dung du an',
    body: 'Tap hop noi dung tham dinh, chi tieu tai chinh, nhan su va dinh huong trien khai cho landing page Nova Global School.',
    href: contentPdf,
  },
  gallery: [
    { src: campusHero, alt: 'Tong the khuon vien Nova Global School' },
    { src: learningHall, alt: 'Khong gian sinh hoat va hoc tap mo' },
    { src: libraryImage, alt: 'Thu vien va trung tam hoc lieu' },
    { src: classroomImage, alt: 'Phong hoc tieu chuan hien dai' },
    { src: sportsImage, alt: 'Khong gian the thao va hoat dong' },
    { src: aerialImage, alt: 'Goc nhin tong quan tu tren cao' },
  ],
  footer: {
    legal: 'DO AN TOT NGHIEP – KHOA QUAN LI DU AN – NGANH KINH TE XAY DUNG',
    project: 'DU AN DAU TU XAY DUNG CONG TRINH NOVA GLOBAL SCHOOL',
    location:
      'Duong Da Ban 7, Phuong Hoa Xuan, Quan Cam Le, Thanh pho Da Nang, Viet Nam.',
    advisor: 'TS. Truong Ngoc Son',
    student: 'Dinh Quoc Tuan',
    copyright:
      '© 2026 Du an dau tu xay dung Nova Global School. Do an tot nghiep – Khoa Quan ly du an – Dai Hoc Bach Khoa Da Nang.',
  },
} as const
