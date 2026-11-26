export type Relative = {
  name: string
  relation: string
  years: string
  image: string
  alt: string
  href?: string
}

export type GalleryPhoto = {
  src: string
  alt: string
  caption: string
  year: string
  orientation: 'portrait' | 'landscape'
}

export type MemberProfile = {
  slug: string
  name: string
  honorific: string
  born: string
  died: string
  generation: string
  branch: string
  titles: string[]
  portrait: string
  portraitAlt: string
  facts: { label: string; value: string }[]
  epitaph: string
  biography: string[]
  quote: { text: string; source: string }
  relatives: { group: string; people: Relative[] }[]
  gallery: GalleryPhoto[]
}

export const members: MemberProfile[] = [
  {
    slug: 'nguyen-dinh-thuan',
    name: 'Nguyễn Đình Thuận',
    honorific: 'Cụ Ông',
    born: '1902',
    died: '1978',
    generation: 'Đời thứ XII',
    branch: 'Chi Trưởng',
    titles: ['Nhà giáo làng Phú Khê', 'Trưởng tộc đời XII', 'Người tu bổ từ đường'],
    portrait: '/images/to-3.png',
    portraitAlt: 'Ảnh chân dung cụ Nguyễn Đình Thuận đeo kính tròn, mặc áo sơ mi trắng',
    facts: [
      { label: 'Sinh quán', value: 'Làng Phú Khê, bên dòng sông Đáy' },
      { label: 'Ngày giỗ', value: 'Mùng 9 tháng Chạp' },
      { label: 'An táng', value: 'Nghĩa trang họ, cánh đồng Đông' },
    ],
    epitaph: 'Một đời gieo chữ, trăm năm nhớ ơn.',
    biography: [
      'Cụ Nguyễn Đình Thuận sinh vào mùa lúa chín năm Nhâm Dần, là con trưởng của cụ Nguyễn Đình Uyên và cụ bà Phạm Thị Lựu. Từ thuở nhỏ, cụ đã theo cha học chữ Hán bên án thư trong từ đường, rồi lên tỉnh theo học trường Pháp – Việt, nơi cụ say mê văn chương và toán học.',
      'Năm 1928, thay vì ở lại thành thị, cụ trở về quê, cùng dân làng dựng một ngôi trường lợp mái tranh ngay đầu xóm. Suốt gần năm mươi năm, cụ dạy chữ cho ba thế hệ trẻ em Phú Khê, không phân biệt con nhà giàu hay nghèo. Nhiều học trò của cụ sau này trở thành thầy thuốc, kỹ sư và nhà giáo khắp mọi miền.',
      'Trong những năm binh lửa, cụ cùng phu nhân là cụ bà Lê Thị Hạnh kiên trì gìn giữ cuốn gia phả chữ Hán, đồng thời tự tay dịch sang chữ Quốc ngữ để con cháu đời sau có thể đọc hiểu cội nguồn. Năm 1956, cụ đứng ra vận động con cháu các chi tu bổ lại ngôi từ đường năm gian.',
      'Cụ ra đi thanh thản vào một ngày đông năm 1978, để lại cho con cháu không phải ruộng vườn hay của cải, mà là nếp nhà hiếu học và lời dặn: “Người có gốc thì không bao giờ lạc đường.”',
    ],
    quote: {
      text: 'Người có gốc thì không bao giờ lạc đường. Học để làm người trước, rồi mới học để làm việc.',
      source: 'Lời dặn con cháu, ghi trong gia phả năm 1970',
    },
    relatives: [
      {
        group: 'Song thân',
        people: [
          {
            name: 'Nguyễn Đình Uyên',
            relation: 'Thân phụ',
            years: '1871 – 1939',
            image: '/images/cha-thuan.png',
            alt: 'Chân dung cụ Nguyễn Đình Uyên với khăn đóng và chòm râu bạc',
          },
          {
            name: 'Phạm Thị Lựu',
            relation: 'Thân mẫu',
            years: '1876 – 1948',
            image: '/images/me-thuan.png',
            alt: 'Chân dung cụ bà Phạm Thị Lựu với khăn vấn truyền thống',
          },
        ],
      },
      {
        group: 'Phu nhân',
        people: [
          {
            name: 'Lê Thị Hạnh',
            relation: 'Phu nhân',
            years: '1911 – 1996',
            image: '/images/to-4.png',
            alt: 'Ảnh cụ bà Lê Thị Hạnh thời trẻ trong tà áo dài sáng màu',
          },
        ],
      },
      {
        group: 'Con cái',
        people: [
          {
            name: 'Nguyễn Đình Minh',
            relation: 'Trưởng nam',
            years: '1935 – 2012',
            image: '/images/con-trai.png',
            alt: 'Ảnh ông Nguyễn Đình Minh thời trẻ mặc áo sơ mi trắng',
          },
          {
            name: 'Nguyễn Thị Lan',
            relation: 'Trưởng nữ',
            years: '1939',
            image: '/images/con-gai.png',
            alt: 'Ảnh bà Nguyễn Thị Lan thời trẻ trong tà áo dài trắng',
          },
        ],
      },
    ],
    gallery: [
      {
        src: '/images/anh-le-cuoi.png',
        alt: 'Ảnh cưới của cụ Nguyễn Đình Thuận và cụ bà Lê Thị Hạnh trong studio',
        caption: 'Ngày thành hôn cùng cụ bà Lê Thị Hạnh',
        year: '1932',
        orientation: 'portrait',
      },
      {
        src: '/images/anh-truong-lang.png',
        alt: 'Cụ Thuận đứng cùng học trò trước ngôi trường mái tranh',
        caption: 'Lớp học đầu tiên ở trường làng Phú Khê',
        year: '1934',
        orientation: 'landscape',
      },
      {
        src: '/images/nha-tho-ho.png',
        alt: 'Gian thờ chính trong từ đường họ Nguyễn Đình',
        caption: 'Từ đường sau đợt tu bổ do cụ vận động',
        year: '1956',
        orientation: 'landscape',
      },
      {
        src: '/images/anh-gia-dinh.png',
        alt: 'Cụ Thuận và cụ bà ngồi giữa, con cháu đứng quanh trước nếp nhà gỗ',
        caption: 'Bốn thế hệ quây quần trước nếp nhà xưa',
        year: '1968',
        orientation: 'landscape',
      },
    ],
  },
]

export function getMember(slug: string) {
  return members.find((m) => m.slug === slug)
}
