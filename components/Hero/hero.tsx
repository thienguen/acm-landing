import { HeroDeco3 } from '@/components/hero/decoration'
import { HeroText } from '@/components/hero/hero-text'
import { HeroVideo } from '@/components/hero/hero-video'
import { cn } from '@/libs/util'

const Hero = () => {
  return (
    <section
      id="hero"
      className={cn(
        'pb-4 pt-[120px]',
        'dark:bg-gray-dark border-b-2',
        'relative z-10 overflow-hidden',
        'md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]'
      )}
    >
      <HeroDeco3 />
      <HeroText />
      <HeroVideo />
    </section>
  )
}

export default Hero
