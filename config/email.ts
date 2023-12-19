export const emailConfig = {
  from: 'sys1@yunyoute.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://sys.yunyoute.cn`
      : 'http://localhost:3000',
}
