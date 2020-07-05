import React from 'react'

const DetectLanguageButton = ({onClick, isDisabled, children}) => {
  return (
      <button type="button" disabled={isDisabled} onClick={onClick}>{children}</button>
  )
}

export default DetectLanguageButton
