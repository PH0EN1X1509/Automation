import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div>Page
        <UserButton />
    </div>
  )
}

export default Page