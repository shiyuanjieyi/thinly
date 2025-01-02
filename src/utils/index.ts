export function isMobile(): boolean {
  const userAgent = navigator.userAgent.toLowerCase()
  return /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
}

export function formatDuration(duration: number): string {
  const minutes = Math.floor(duration / 60)
  const seconds = Math.floor(duration % 60)
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export function getClamp(min: number, max: number): string {
  return `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - 375px) / (1280 - 375))), ${max}px)`
}
