'use client'
import dynamic from 'next/dynamic'
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from '@/app/components/schema/SchemaGenerator'
import {
  CoverImage,
  CoverImageProps,
} from './components/home/cover-image/CoverImage'
import { FirstFoldContent } from './components/home/FirstFoldContent'
import { MyJourney } from './components/home/my-journey/MyJourney'
import { baseDescription } from '@/constants/baseData'
import '@/app/styles/overlay.css'

const description = baseDescription
const schemaData: SchemaGeneratorProps['schemaData'] = {
  title: '',
  description,
  urlPath: '',
  publishDate: '2024-07-04T09:25:01.340Z',
  schemaType: 'WebPage',
}
const coverImageData: CoverImageProps['coverImageData'] = {
  width: 1920,
  height: 1080,
  highResSrc:
    'https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/clouds5.webp',
  lowResSrc:
    'https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/clouds4.webp',
  children: <FirstFoldContent />,
}

const LazySiteTechStack = dynamic(
  () => import('./components/home/site-tech-stack/SiteTechStack')
)

const Home = () => (
  <>
    <SchemaGenerator schemaData={schemaData} />
    <CoverImage coverImageData={coverImageData} />
    <MyJourney />
    <LazySiteTechStack />
  </>
)

export default Home
