import React from 'react';

export const useOpen = () => {
  const [open, setOpenState] = React.useState(false);
  const [touched, setTouchedState] = React.useState(false);

  const togglerNavHandler = () => {
    setOpenState(!open)
    setTouchedState(true)
  }

  const closeNavHandler = () => {
    setOpenState(false)
  }

  return { open, touched, togglerNavHandler, closeNavHandler }
}