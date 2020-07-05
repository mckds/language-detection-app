import React from 'react'

const DetectionResult = ({result}) => {
  return <p>Detected language: {result.language}</p>
}

export default DetectionResult