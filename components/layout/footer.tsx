import { FooterWrapper } from '@/components/common/footerwrapper'
import ThemeToggle from '@/components/common/theme-toggle'
import { socials } from '@/components/common/socials'
import { texts } from '@/data/text'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <hr className="sm:mb-15 sm:mt-15 mb-10 mt-10" />
      <FooterWrapper>
        {/* TOP SECTION */}
        <div className="mb-8 grid gap-8 md:mb-12 md:grid-cols-12 lg:gap-20">
          {/* TOP LEFT */}
          <div className="md:col-span-4 lg:col-span-5">
            {/* Logo */}
            <div className="mb-2">
              <Link href={socials.logo.link} className="inline-block" aria-label={socials.logo.alt}>
                {/* Logo image, change but imma pick one LMAFO */}
                <Image
                  src={socials.logo.src}
                  className="h-10 dark:invert"
                  alt={socials.logo.alt}
                  priority
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            {/* Gaslighting */}
            <div className="text-muted-foreground mb-4">{texts.footer.gaslighting}</div>
          </div>

          {/* TOP RIGHT */}
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-8 lg:col-span-7">
            {socials.blocks.map((block, index) => (
              <div className="text-sm" key={index}>
                <h6 className="text-foreground mb-1 font-medium brightness-90">{block.title}</h6>
                <ul>
                  {block.links.map((link, linkIndex) => (
                    <li className="group mb-1" key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground group-hover:text-foreground flex items-center transition duration-150 ease-in-out"
                      >
                      <div className="mr-2 h-0.5 w-3 bg-red-400 transition-all group-hover:w-5"></div>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="md:flex md:items-center md:justify-between">
          {/* COPY RIGHT */}
          <div className="text-muted-foreground mr-4 text-sm">
            &copy; {currentYear} {socials.copyright}
          </div>

          {/* THEME TOGGLE */}
          <ThemeToggle />
        </div>
      </FooterWrapper>
    </>
  )
}
