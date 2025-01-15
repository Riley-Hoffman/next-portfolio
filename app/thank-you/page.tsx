import type { Metadata } from 'next'
import { getBaseUrl, getImageUrl } from '@/constants/baseData'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting Riley Hoffman - Web Developer.',
  metadataBase: new URL(`${getBaseUrl('/thank-you')}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: getImageUrl(),
    title: 'Thank You',
    url: `${getBaseUrl('/thank-you')}`,
  },
}

export default function ThankYou() {
  return (
    <>
      <h1 className="heading-one">Thank You</h1>
      <div className="max-w-screen-xl pb-[calc(20vh+3rem)] pt-[14vh] text-center">
        <p className="text-5xl">Thank you for contacting me.</p>
        <p className="mt-10 text-4xl">
          I will get back to you as soon as possible.
        </p>
      </div>
    </>
  )
}
