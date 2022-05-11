import { useState, useEffect } from "react"

function useBigScreen(maxWidth = 820) {
  const [ bigScreen, setBigScreen ] = useState(true)

  useEffect(() => {
    const resizeWatcher = () => {
      if (window.matchMedia(`(max-width: ${maxWidth}px)`).matches) {
        setBigScreen(false)
      } else {
        setBigScreen(true)
      }
    }
    window.addEventListener("resize", resizeWatcher)
    resizeWatcher()
    return () => {
      window.removeEventListener("resize", resizeWatcher)
    }
  }, [setBigScreen, maxWidth])

  return bigScreen
}

export default useBigScreen
