import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = ({children}: Props) => {
    // console.log('children-->',children)
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">{children}</div>
  )
}

export default layout