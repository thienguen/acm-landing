'use client'

import { Button } from '@/components/common-s/custom-button'
import { cn } from '@/libs/util'
import { useTheme } from 'next-themes'
import { CiSun } from 'react-icons/ci'
import { LuMoonStar } from 'react-icons/lu'

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const currentTheme = resolvedTheme || 'light'

  const handleToggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleToggleTheme} rel="noreferrer">
      <div className="relative flex items-center justify-center">
        <CiSun
          className={cn(
            'absolute h-9 w-9 transition-all duration-500',
            currentTheme === 'dark' ? 'rotate-0 scale-100' : '-rotate-360 scale-0'
          )}
          style={{
            rotate: currentTheme === 'dark' ? '0deg' : '360deg',
          }}
        />
        <LuMoonStar
          className={cn(
            'absolute h-7 w-7 transition-all duration-500',
            currentTheme === 'light' ? 'rotate-0 scale-100' : 'rotate-360 scale-0'
          )}
          style={{
            rotate: currentTheme === 'light' ? '0deg' : '360deg',
          }}
        />
      </div>
    </Button>
  )
}

export default ThemeToggle
