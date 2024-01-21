import { Badge } from '@/components/common/badge'
import { members } from '@/data/members'
import Image from 'next/image'

export default function MemberList() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 mb-4">Meet our team!</h2>
            {/*We might be humans too?*/}
            <p className="text-muted-foreground md:text-xl">
              Our ACM club consists of dedicated and innovative students passionate about advancing computing as a
              science and a profession.
            </p>
          </div>

          {/* Items */}
          <div
            className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-16"
            data-aos-id-blocks
          >
            {members.map((person, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <a href={person.link} target="_blank" rel='noreferrer'>
                  <Image
                    src={person.src}
                    alt="Profile picture"
                    width={80}
                    height={80}
                    className="border-border mb-4 rounded-full border"
                    unoptimized
                  />
                </a>
                <a href={person.link} target="_blank" rel='noreferrer'>
                  <span className="h4">{person.name}</span>
                </a>
                <span className="text-muted-foreground ml-1 text-xs">{person.pronouns}</span>
                {person.title && (
                  <span
                    className={`m-[1px] text-center font-black ${
                      person.title.startsWith('Board') ? 'text-yellow-500' : ''
                    } ${person.title == 'Executive Director' ? 'text-red-500 dark:text-red-300' : ''}`}
                  >
                    {person.title}
                  </span>
                )}
                <span className="mb-2 text-center">{person.school}</span>
                <span className="mb-2 flex flex-wrap items-center justify-center">
                  {person.titles.map((role, idx) => (
                    <Badge key={idx} variant="outline" className="m-[1px] !font-normal">
                      {role}
                    </Badge>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
