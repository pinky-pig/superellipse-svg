export function showConfetti() {
  import('canvas-confetti').then((confetti) => {
    const canvasEle: HTMLCanvasElement | null
      = document.querySelector('#confetti')

    if (!canvasEle)
      return

    const myConfetti = confetti.create(canvasEle, {
      resize: true,
      useWorker: true,
      disableForReducedMotion: true,
    })

    const duration = performance.now() + 1 * 1000

    const confettiColors = ['#6967fe', '#85e9f4', '#e16984'];

    (function frame() {
      myConfetti({
        particleCount: confettiColors.length,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: confettiColors,
      })
      myConfetti({
        particleCount: confettiColors.length,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: confettiColors,
      })

      if (performance.now() < duration)
        requestAnimationFrame(frame)
    })()
  })
}
