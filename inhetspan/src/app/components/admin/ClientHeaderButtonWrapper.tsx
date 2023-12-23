"use client"

import { useSession } from 'next-auth/react'
import { HeaderButton } from '@/app/components/admin/HeaderButton'

const ClientHeaderButtonWrapper = () => {
    const { data: session } = useSession()

    return (
        <>
            {session && <HeaderButton />}
        </>
    )
}

export default ClientHeaderButtonWrapper