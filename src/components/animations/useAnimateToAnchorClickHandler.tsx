export function useAnimateToAnchorClickHandler() {
  const onClick = (e) => {
    const href = e.target.getAttribute('href').replace(/^\/+/, '')

    if (!/^#/.test(href)) return

    e.preventDefault()
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
  }

  return onClick
}
