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
      <p className="pt-[16vh] text-center text-5xl">
        Thank you for contacting me.
      </p>
      <p className="mt-10 pb-[calc(20vh+3rem)] text-center text-4xl">
        I will get back to you as soon as possible.
      </p>
    </>
  )
}
