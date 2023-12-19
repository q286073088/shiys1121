export const seo = {
  title: '石云升 | 产品经理',
  description:
    '我叫石云升，一名产品经理，同时也是一名创业多年的连续创业者。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://sys.yunyoute.cn'
      : 'http://localhost:3000'
  ),
} as const
