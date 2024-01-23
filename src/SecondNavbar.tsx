import React from 'react'
import Link from 'next/link'

function SecondNavbar() {
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="#" className="flex items-center">
            <img src="https://arablocal.com/img/business/logos/magrabi-eye-center-kuwait-19-09-27-06-09-46.png" className="h-20 w-30" alt="Landwind Logo"/>
        </Link>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <Link href="#"
                        className="block py-2 pl-3 pr-4 text-gray-500 hover:text-sky-500"
                        aria-current="page">Home</Link>
                </li>
                <li>
                    <Link href="#"
                        className="block py-2 pl-3 pr-4 text-gray-500 hover:text-sky-500">About Us</Link>
                </li>
                <li>
                    <Link href="#"
                        className="block py-2 pl-3 pr-4 text-gray-500 hover:text-sky-500">Our Services</Link>
                </li>
                <li>
                    <Link href="#"
                        className="block py-2 pl-3 pr-4 text-gray-500 hover:text-sky-500">Patients Library</Link>
                </li>
                <li>
                    <Link href="#"
                        className="block py-2 pl-3 pr-4 text-gray-500 hover:text-sky-500">Locations</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default SecondNavbar
