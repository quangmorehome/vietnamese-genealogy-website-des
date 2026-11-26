export type TreePerson = {
  id: string
  name: string
  years: string
  generation: number
  role?: string
  image?: string
  parentId?: string
  spouseOf?: string
  slug?: string
}

export const generations = [
  { value: 11, label: 'Đời XI' },
  { value: 12, label: 'Đời XII' },
  { value: 13, label: 'Đời XIII' },
  { value: 14, label: 'Đời XIV' },
] as const

export const toRoman = (n: number) =>
  ({ 11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV' })[n] ?? String(n)

export const people: TreePerson[] = [
  { id: 'uyen', name: 'Nguyễn Đình Uyên', years: '1871 – 1939', generation: 11, role: 'Trưởng tộc', image: '/images/cha-thuan.png' },
  { id: 'luu', name: 'Phạm Thị Lựu', years: '1875 – 1950', generation: 11, role: 'Chính thất', image: '/images/me-thuan.png', spouseOf: 'uyen' },

  { id: 'thuan', name: 'Nguyễn Đình Thuận', years: '1902 – 1978', generation: 12, role: 'Chi trưởng', image: '/images/to-3.png', parentId: 'uyen', slug: 'nguyen-dinh-thuan' },
  { id: 'hanh', name: 'Lê Thị Hạnh', years: '1910 – 1995', generation: 12, role: 'Phu nhân', image: '/images/to-4.png', spouseOf: 'thuan' },
  { id: 'tam', name: 'Nguyễn Đình Tâm', years: '1906 – 1968', generation: 12, role: 'Chi thứ', parentId: 'uyen' },
  { id: 'cuc', name: 'Đỗ Thị Cúc', years: '1909 – 1983', generation: 12, role: 'Phu nhân', spouseOf: 'tam' },

  { id: 'minh', name: 'Nguyễn Đình Minh', years: '1935 – 2012', generation: 13, role: 'Trưởng nam', image: '/images/con-trai.png', parentId: 'thuan' },
  { id: 'lan', name: 'Nguyễn Thị Lan', years: '1939', generation: 13, role: 'Trưởng nữ', image: '/images/con-gai.png', parentId: 'thuan' },
  { id: 'khang', name: 'Nguyễn Đình Khang', years: '1944 – 2020', generation: 13, role: 'Thứ nam', parentId: 'thuan' },
  { id: 'hoa', name: 'Nguyễn Đình Hòa', years: '1932 – 2001', generation: 13, role: 'Trưởng nam', parentId: 'tam' },

  { id: 'an', name: 'Nguyễn Đình An', years: '1962', generation: 14, parentId: 'minh' },
  { id: 'bao', name: 'Nguyễn Đình Bảo', years: '1965', generation: 14, parentId: 'minh' },
  { id: 'phuc', name: 'Nguyễn Đình Phúc', years: '1970', generation: 14, parentId: 'khang' },
  { id: 'quang', name: 'Nguyễn Đình Quang', years: '1958', generation: 14, parentId: 'hoa' },
  { id: 'thu', name: 'Nguyễn Thị Thu', years: '1961', generation: 14, parentId: 'hoa' },
]

export const byId = (id?: string) => people.find((p) => p.id === id)
export const childrenOf = (id: string) => people.filter((p) => p.parentId === id)
export const spouseOf = (id: string) => people.find((p) => p.spouseOf === id)
export const rootPerson = people[0]

export function lineageNote(p: TreePerson) {
  if (p.spouseOf) return `Phối ngẫu của ${byId(p.spouseOf)?.name}`
  if (p.parentId) return `Con của ${byId(p.parentId)?.name}`
  return 'Tổ đời khởi đầu bản sơ đồ'
}

export function initials(name: string) {
  return name.split(' ').at(-1)?.[0] ?? ''
}
