import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <header className='p-5 bg-blue-500'>

            <Link href="/" className='m-3 px-2 py-1 bg-white text-blue-700 rounded-lg' >Home</Link>
            <Link href="/todos" className='px-2 py-1 bg-white text-blue-700 rounded-lg' >Todos</Link>
        </header>
    )
}

export default Header