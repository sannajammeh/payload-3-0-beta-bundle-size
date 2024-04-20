import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default Layout
