export const emailConfig = {
  from: 'shiys1121@foxmail.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://cali.so`
      : 'http://localhost:3000',
}
