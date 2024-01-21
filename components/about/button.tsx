'use client'

import React, { useState } from 'react'
import { AboutModal } from '@/components/about/modal'

const AboutButton: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <button
        onClick={() => setModalOpen(true)}
        className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Toggle modal
      </button>
      <AboutModal isOpen={isModalOpen} onClose={handleModalClose} />

      <p className="mt-5">
        This modal element is part of a larger, open-source library of Tailwind CSS components. Learn more by going to
        the official{' '}
        <a className="text-blue-600 hover:underline" href="#" target="_blank">
          Flowbite Documentation
        </a>
        .
      </p>
    </div>
  )
}

export default AboutButton
