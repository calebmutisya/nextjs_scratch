"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs'

export default function Navigation() {

  const pathname = usePathname();

  return (
    <nav className='bg-slate-300 p-4'>
      <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
        Home
      </Link>
      <Link href={"/about"} className={pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
        About
      </Link>
      <Link href={"/blog"} className={pathname === "/blog" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
        Blog
      </Link>
      <Link href={"/products/iphone"} className={pathname === "/products/iphone" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
        Iphones
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
}
