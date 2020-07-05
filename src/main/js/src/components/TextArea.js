import React from 'react';

const TextArea = ({onChange, placeholder, rows = 10, cols = 50}) => {
  return (
      <textarea onChange={onChange} placeholder={placeholder} rows={rows} cols={cols} />
  )
}

export default TextArea
