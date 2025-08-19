"use client";

import React from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { ThemeSwitcherButton } from './ThemeSwitcherButton';

function Navbar() {
    return (
        <>
            <DesktopNavbar />
            {/* <MobileNavbar /> */}
        </>
    )
}

const items = [
    {label: "Dashboard", link: "/"},
    {label: "Transactions", link: "/transactions"},
    {label: "Manage", link: "/manage"}
]

function DesktopNavbar() {
    return (
        <div className="hidden border-separate border-b bg-background/50 backdrop-blur-sm md:block">
            <nav className="container flex items-center justify-between px-8">
                <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
                    <Logo />
                    <div className="flex h-full">
                        {items.map(item => (
                            <NavbarItem
                                key={item.label}
                                label={item.label}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherButton />
                    <UserButton afterSignOutUrl="/sign-in" />
                </div>
            </nav>
        </div>
    )
}

function NavbarItem({label, link}: {label: string, link: string}) {
   const pathname = usePathname();
   const isActive = pathname === link;

   return <div className="relative flex items-center">
        <Link href={link} className={cn(
            buttonVariants({variant: "ghost"}),
            "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
            isActive && "text-foreground"
        )}>
            {label}
        </Link>
        {
            isActive && (
                <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block" />
            ) 
        }
   </div>
}

export default Navbar;