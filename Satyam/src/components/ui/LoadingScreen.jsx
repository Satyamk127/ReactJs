import { useEffect, useState } from 'react'

function LoadingScreen() {
  const [progress, setProgress] = useState(12)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          window.clearInterval(interval)
          return 100
        }
        return value + 8
      })
    }, 100)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="cube-loader">
        <span />
        <span />
        <span />
      </div>
      <p>Loading portfolio experience</p>
      <div className="progress-track">
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export default LoadingScreen
