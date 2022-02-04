import React from 'react'

export default function Wrapper({ children }) {
  return (
    <div
      style={{
        display: 'grid',
        gap: '2em',
        gridTemplateColumns: 'repeat(auto-fit, minmax(30px, 35px))',
      }}
    >
      {children}
    </div>
  )
}
