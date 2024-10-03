import Link from 'next/link'
import React from 'react'
function Header() {
    return (
        <div className='continer mx-12'>
            <nav className='flex justify-between  gap-5 py-4'>
                <div>
                    <span>BrainBox</span>
                </div>
                <ul className='flex justify-center gap-4'>
                    <li className='hover:text-blue-500 flex justify-center items-center gap-1'>
                        <Link href={'/'}> Home</Link>
                    </li>
                    <li className='hover:text-blue-500'>
                        <Link href={'about'}> About</Link>
                    </li>
                    <li className='hover:text-blue-500'>
                        <Link href={'login'}> Login</Link>
                    </li>
                    <li className='hover:text-blue-500'>
                        <Link href={'register'}> Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header