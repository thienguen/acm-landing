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
        </div>
      </div>
    </section>
  )
}
