import React from 'react'
import component from './new resume of josaph.pdf';
const Resume = () => {
  return (
    <div className='resume'>
      <a
        href={component}
        download="Example-resume"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download Resume</button>
      </a>
    </div>
  )
}

export default Resume
