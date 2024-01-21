import Hero from '@/components/hero-s/hero'
import Tabs from '@/components/whatwedo/heading'
import AboutButton from '@/components/about/button'
import MemberList from '@/components/members/members'


export default function Home() {
  return (
    <>
      <Hero />
      <Tabs />
      <MemberList />
      <AboutButton />
    </>
  )
}
