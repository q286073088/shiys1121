export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://sys.yunyoute.cn'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
