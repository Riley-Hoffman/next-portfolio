import { createMetadata } from '@/app/utils/metadata';

export const metadata = createMetadata({
  title: 'Thank You',
  description: 'Thank you for contacting Riley Hoffman - Web Developer.',
  path: '/thank-you',
})

const ThankYou = () => (
  <>
    <h1 className="heading-one">Thank You</h1>
    <p className="pt-36 text-center text-5xl">Thank you for contacting me.</p>
    <p className="mt-10 pb-56 text-center text-4xl">
      I will get back to you as soon as possible.
    </p>
  </>
)

export default ThankYou
