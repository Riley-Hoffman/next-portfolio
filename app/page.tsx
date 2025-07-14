'use client'
import dynamic from 'next/dynamic'
import { SchemaFactory } from '@/app/utils/schemaFactory'
import SchemaInjector from '@/app/components/schema/SchemaInjector'
import { Cover } from './components/home/cover/Cover'
import { CoverImageProps } from './types/home/CoverImage.interface'
import { FirstFoldContent } from './components/home/FirstFoldContent'
import { MyJourney } from './components/home/my-journey/MyJourney'
import { BASE_DESCRIPTION } from '@/app/constants/baseData'
import { cloudsBlurData } from './constants/blurDataUrls'
import '@/app/styles/shared/overlay.css'

const DESCRIPTION = BASE_DESCRIPTION

const schemaData = SchemaFactory.createWebPage({
  title: '',
  description: DESCRIPTION,
  urlPath: '',
  publishDate: '2024-07-04T09:25:01.340Z',
})

const coverImageData: CoverImageProps['coverImageData'] = {
  width: 1920,
  height: 1080,
  src: 'https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/clouds3.webp',
  blurDataUrl: cloudsBlurData,
  children: <FirstFoldContent />,
}

const LazySiteTechStack = dynamic(
  () => import('./components/home/site-tech/SiteTech')
)

const Home = () => (
  <>
    <SchemaInjector structuredData={schemaData} />
    <Cover coverImageData={coverImageData} />
    <MyJourney />
    <LazySiteTechStack />
  </>
)

export default Home
