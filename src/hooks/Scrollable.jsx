import React, { useEffect, useRef, useState } from 'react'

export const Scrollable = (props) => {
  const ref = useRef()
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0
  })

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const el = ref.current
    if (el) {
      const onWheel = (e) => {
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: 'smooth'
        })
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])

  const onMouseMove = (e) => {
    if (ref && ref.current && !ref.current.contains(e.targer)) {
      return
    }
    e.preventDefault()

    const { clientX, scrollX, isScrolling } = state

    if (isScrolling) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX
      const sX = scrollX + e.clientX - clientX
      const cX = e.clientX

      setState({
        ...state,
        scrollX: sX,
        clientX: cX
      })
    }
  }

  const onMouseDown = (e) => {
    if (ref && ref.current && !ref.current.contains(e.targer)) {
      return
    }
    e.preventDefault()
    setState({
      ...state,
      isScrolling: true,
      clientX: e.clientX
    })
  }

  const onMouseUp = (e) => {
    if (ref && ref.current && !ref.current.contains(e.targer)) {
      return
    }
    e.preventDefault()
    setState({
      ...state,
      isScrolling: false
    })
  }

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }
  })

  return (
    <div
      ref={ref}
      className={props.class}
      onMouseMove={onMouseDown}
      onMouseDown={onMouseUp}
      onMouseUp={onMouseMove}
    >
      {
        React.Children.map(props.children, (child) => React.Children.only(child))
      }
    </div>
  )
}

export default Scrollable
