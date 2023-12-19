import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

// import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'
// import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
// import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = 'AMA 一对一咨询'
const description =
  '本人提供一对一的咨询服务（Ask Me Anything）。我有产品规划、需求管理、体验设计、项目管理、团队管理、职业规划、创业经验、内容创作等经验，可以为你解答相关的问题。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / 一对一咨询
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>咨询内容</h2>
        <p>我可以为你解答以下相关的问题：</p>
        <ul>
          <li>
            <b>职业规划</b>
            ：工作难找，或是寻求职场建议？想提升自己的专业水平？或是想转型？
          </li>
          <li>
            <b>产品规划</b>：不知道如何管理需求？不能很快的把需求转化成开发可实现的原型？想提升自己的设计水平？
          </li>
          <li>
            <b>团队管理</b>
            ：我有5年多的团队管理经验，引领着30人的产研团队。
          </li>
          <li>
            <b>创业经验</b>：我有5年多的创业经验，多个从0到1的项目。
          </li>
          <li>
            <b>其他</b>
            ：终身学习者，如果你愿意，欢迎和我一起参加各种学习活动（免费）。
          </li>
        </ul>

        <h2>定价</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥100 - 30分钟</strong>
          </li>
          <li>
            <strong>¥200 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">支付宝二维码</span>
          </span>
        </p>
        <p>
          一旦你完成支付，可以加我微信shiys1121，来跟我预约一个合适你的时间。
          {/* {' '}
          <RichLink
            href="https://yunyoute.cn/calicastle/ask-me-anything"
            target="_blank"
          >
            这个链接
          </RichLink> */}
          
        </p>

        {/* <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p> */}
      </article>
    </Container>
  )
}
