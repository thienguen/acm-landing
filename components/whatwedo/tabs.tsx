'use client'

import { texts } from '@/data/text'
import { Transition } from '@headlessui/react'
import { useEffect, useRef, useState } from 'react'
import { SiLeetcode } from 'react-icons/si'
import { FaUserFriends } from 'react-icons/fa'
import { GrWorkshop } from "react-icons/gr";
import Image from 'next/image'

export default function Tabs() {
  const [tab, setTab] = useState<number>(1)
  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative">
      {/* <div className="bg-red pointer-events-none absolute inset-0 mb-16" aria-hidden="true"></div> */}

      {/* Section */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16" data-aos="fade-up">
            <h1 className="h2 mb-4" data-aos="fade-up" data-aos-delay="300">
              {texts.whatwedo.title}
            </h1>
            <p className="text-muted-foreground text-xl" data-aos="fade-up" data-aos-delay="300">
              {texts.whatwedo.description}
            </p>
          </div>

          {/* content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* LEFT */}
            <div
              className="mx-auto max-w-xl md:col-span-7 md:mt-6 md:w-full md:max-w-none lg:col-span-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`mb-3 flex items-center rounded p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 1 ? 'bg-secondary shadow-md hover:shadow-lg' : 'bg-tertiary'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(1)
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug">{texts.whatwedo.tabs.first.title}</div>
                    <div className="text-muted-foreground">{texts.whatwedo.tabs.first.description}</div>
                  </div>
                  <div className="bg-background ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow">
                    <SiLeetcode size={16} />
                  </div>
                </a>
                <a
                  className={`mb-3 flex items-center rounded p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 2 ? 'bg-secondary shadow-md hover:shadow-lg' : 'bg-tertiary'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(2)
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug">{texts.whatwedo.tabs.second.title}</div>
                    <div className="text-muted-foreground">{texts.whatwedo.tabs.second.description}</div>
                  </div>
                  <div className="bg-background ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow">
                    <GrWorkshop size={16} />
                  </div>
                </a>
                <a
                  className={`mb-3 flex items-center rounded p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 3 ? 'bg-secondary shadow-md hover:shadow-lg' : 'bg-tertiary'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(3)
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug">{texts.whatwedo.tabs.third.title}</div>
                    <div className="text-muted-foreground">{texts.whatwedo.tabs.third.description}</div>
                  </div>
                  <div className="bg-background ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow">
                    <FaUserFriends size={16} />
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="mx-auto mb-8 max-w-xl md:order-1 md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="max-h-[462px] rounded object-contain"
                        src="/img/busImg.png"
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="max-h-[462px] rounded object-contain"
                        src="/img/conference.png"
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="max-h-[462px] rounded object-contain"
                        src="/img/img3.jpg"
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
