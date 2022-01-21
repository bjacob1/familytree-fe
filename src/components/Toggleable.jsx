import React, { useState, useImperativeHandle } from 'react'

const Toggleable = React.forwardRef(({ children }, ref) => {
  const [visible, setVisible] = useState(false)
  const style = { display: visible ? "" : "none" }
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  const show = () => {
    setVisible(true)
  }
  const hide = () => {
    setVisible(false)
  }
  useImperativeHandle(ref, () => { return { toggleVisibility, show, hide } })
  return (
    <div style={style}>{children}</div>
  )
})

export default Toggleable