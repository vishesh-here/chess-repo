"use client"

import * as React from "react"
import { Monitor, Moon, Sun, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ThemeSwitcher() {
  const { theme, setTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 h-9">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      case 'netflix':
        return <Play className="h-4 w-4 text-red-500" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 h-9">
          {getThemeIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={theme === 'light' ? 'bg-accent' : ''}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Chess Classic</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={theme === 'dark' ? 'bg-accent' : ''}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark Mode</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("netflix")}
          className={theme === 'netflix' ? 'bg-accent' : ''}
        >
          <Play className="mr-2 h-4 w-4 text-red-500" />
          <span>Netflix Style</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
