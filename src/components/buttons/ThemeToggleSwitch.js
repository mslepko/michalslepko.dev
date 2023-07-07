import React, { useState, useEffect } from "react"

export default function ThemeSwitch() {
  const [currentTheme, setCurrentTheme] = useState("dark")

  const userTheme = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
      setCurrentTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
      setCurrentTheme("light")
    }
  }

  const setTheme = theme => {
    console.log("setTheme", theme)
    localStorage.theme = theme
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
      setCurrentTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      setCurrentTheme("light")
    }
  }

  const [mounted, setMounted] = useState(false)

  const renderThemeSwitch = () => {
    if (!mounted) return null
    console.log("renderTheme", currentTheme)
    if (currentTheme === "light") {
      return (
        <svg
          className="w-6 h-6 text-light"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )
    } else {
      return (
        <svg
          className="w-6 h-6 text-mid"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )
    }
  }

  useEffect(() => {
    setMounted(true)
    userTheme()
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => {
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }}
      aria-label="Switch theme"
      className="switch light h-6 w-6 transition-all"
    >
      {renderThemeSwitch()}
    </button>
  )
}
