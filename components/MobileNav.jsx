"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    }
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col" >
                <SheetTitle></SheetTitle>
                <div className='mt-20 mb-28 text-center text-2xl' >
                    <Link href='/'>
                        <h1 className='text-4xl font-semibold' >
                            Dereck<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>

                <nav className='flex flex-col justify-center items-center gap-8' >
                    {links.map((link, index) => {
                        return (
                            <Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`} >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav