'use client'
import dynamic from 'next/dynamic'
import { SchemaGenerator } from '@/app/components/schema/SchemaGenerator'
import { SchemaGeneratorProps } from './types/schema/SchemaGenerator.interface'
import { Cover } from './components/home/cover/Cover'
import { CoverImageProps } from './types/home/CoverImage.interface'
import { FirstFoldContent } from './components/home/FirstFoldContent'
import { MyJourney } from './components/home/my-journey/MyJourney'
import { BASE_DESCRIPTION } from '@/app/constants/baseData'
import '@/app/styles/shared/overlay.css'

const DESCRIPTION = BASE_DESCRIPTION
const SCHEMA_DATA: SchemaGeneratorProps['schemaData'] = {
  title: '',
  description: DESCRIPTION,
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
  () => import('./components/home/site-tech/SiteTech')
)

const Home = () => (
  <>
    <SchemaGenerator schemaData={SCHEMA_DATA} />
    <Cover coverImageData={coverImageData} />
    <MyJourney />
    <LazySiteTechStack />
  </>
)

export default Home
