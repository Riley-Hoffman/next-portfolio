'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Hamburger } from './Hamburger';
import { NavListItem } from './NavListItem';
import { NewTabSrText } from '../../components/NewTabSrText';
import { RouteList } from '../RouteList';


interface MenuLink {
    to: string;
    label: string;
}

export function Header() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(false);

    const handleHamburgerClick = (expanded: boolean) => {
        setIsExpanded(expanded);
    };

    const currentPath = usePathname();
    const isActive = (path: string) => {
        return currentPath === path;
    } 

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;
        const handleHideShowLinks = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            if (window.innerWidth <= 700 && !isExpanded) {
                timeoutId = setTimeout(() => {
                    setHide(true);
                }, 500);
            } else {
                setHide(false);
            }
        };

        window.addEventListener('resize', handleHideShowLinks);
        handleHideShowLinks();

        return () => {
            window.removeEventListener('resize', handleHideShowLinks);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isExpanded]);

    const handleClickHome = () => {
        window.location.href = '/';
    };

    const menuLinks: MenuLink[] = [
        { to: '/', label: 'Home' },
        { to: '/projects', label: 'Projects' },
        { to: '/skills', label: 'Skills' },
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <header className="min-h-[7.75rem] py-6 border-b-2 border-t-[2.125rem] border-solid sticky top-[-2.125rem] right-[0] left-[0] shadow[0_0.063rem_0.188rem_-0.188rem_black] bg-[#f4eef6] shadow-zinc gradient-border z-[999999] contrast-more:bg-white">
            <a href="#content" className="sr-only z-[999999] button focus:not-sr-only focus:p-4 focus:left-4 focus:absolute">Skip To Content</a>
            <div className="max-w-screen-xl flex items-center justify-between">
                <div className="logo">
                    <button className="pl-4 pr-0 m-0 font-urbanist font-medium text-lg text-center uppercase tracking-wide md:text-2xl" onClick={handleClickHome}>
                        <span aria-hidden="true">Riley Hoffman</span>
                        <span className="sr-only">Back To Home Page</span>
                    </button>
                </div>
                <nav className="h-10">
                    <Hamburger expanded={handleHamburgerClick} />
                    <ul className="w-52 z-20 text-base shadow-[0_0.008rem_1rem_-0.563rem_black] shadow-zinc origin-right transition-transform duration-200 ease-in-out scale-x-0 relative top-[1.625rem] right-0 peer-aria-expanded:scale-100 m-0 md:w-auto md:shadow-none md:scale-x-100 md:static" aria-label="Menu Links">
                        {menuLinks.map(({ to, label }) => (
                            <NavListItem key={to} to={to} label={label} hide={hide} isActive={isActive(to)} />
                        ))}
                        <NavListItem resume="/riley-hoffman-resume.pdf" hide={hide} isActive={false} />
                    </ul>
                </nav>
            </div>
            <noscript>
                <nav className="px-4 md:hidden">
                    <ul className="flex flex-wrap gap-x-2 gap-y-3 font-medium">
                    {RouteList.map(route => (
                        (route.name !== 'Particle Cleanup Game' && route.name !== 'Accessibility' &&
                        <li key={route.path}><Link className="button p-1" href={route.path}>{route.name}</Link></li>
                        )
                    ))}
                    <li><a className="button p-1" href="/riley-hoffman-resume.pdf">Resume <NewTabSrText /></a></li>
                    </ul>
                </nav>
            </noscript>
        </header>
    );
}