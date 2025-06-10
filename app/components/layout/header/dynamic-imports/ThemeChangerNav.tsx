import { ThemeChanger } from '@/app/components/theme/ThemeChanger'
import { Nav } from '../nav/Nav'
import { EmptyObject } from '@/app/types/shared/EmptyObject.type'

const ThemeChangerNav = ({ }: EmptyObject) => (
  <>
    <ThemeChanger />
    <Nav />
  </>
)

export default ThemeChangerNav
