'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
const Facebook = () => {

    const router = useRouter()

    const handleToProfile = () => {
        router.push('/facebook/profile')
    }

    const handleBack = () => {
        router.push('/')
    }

    return (
        <>
            <div>Facebook</div>
            <button onClick={() => handleToProfile()}>To profile</button>
            <button onClick={() => handleBack()}>Back to home</button>
        </>
    
  )
}

export default Facebook