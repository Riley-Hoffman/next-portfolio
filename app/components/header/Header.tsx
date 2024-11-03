"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hamburger } from "./Hamburger";
import { NavListItem } from "./NavListItem";
import { NewTabSrText } from "../../components/NewTabSrText";
import { RouteList } from "../RouteList";

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
  };

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

    window.addEventListener("resize", handleHideShowLinks);
    handleHideShowLinks();

    return () => {
      window.removeEventListener("resize", handleHideShowLinks);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isExpanded]);

  const handleClickHome = () => {
    window.location.href = "/";
  };

  const menuLinks: MenuLink[] = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="shadow[0_0.063rem_0.188rem_-0.188rem_black] gradient-border sticky left-[0] right-[0] top-[-2.125rem] z-30 min-h-[7.75rem] border-b-2 border-t-[2.125rem] border-solid bg-[#f4eef6] py-6 shadow-zinc contrast-more:bg-white">
      <a
        href="#content"
        className="button sr-only focus:not-sr-only focus:absolute focus:left-4 focus:p-4"
      >
        Skip To Content
      </a>
      <div className="flex max-w-screen-xl items-center justify-between">
        <div className="logo">
          <button
            className="m-0 pl-4 pr-0 text-center font-urbanist text-lg font-medium uppercase tracking-wider md:text-2xl md:font-normal"
            onClick={handleClickHome}
          >
            <span aria-hidden="true">Riley Hoffman</span>
            <span className="sr-only">Back To Home Page</span>
          </button>
        </div>
        <nav className="h-10">
          <Hamburger expanded={handleHamburgerClick} />
          <ul
            className="relative right-0 top-[1.625rem] z-20 m-0 w-52 origin-right scale-x-0 text-base shadow-[0_0.008rem_1rem_-0.563rem_black] shadow-zinc transition-transform duration-200 ease-in-out peer-aria-expanded:scale-100 md:static md:w-auto md:scale-x-100 md:shadow-none"
            aria-label="Menu Links"
          >
            {menuLinks.map(({ to, label }) => (
              <NavListItem
                key={to}
                to={to}
                label={label}
                hide={hide}
                isActive={isActive(to)}
              />
            ))}
            <NavListItem
              resume="/riley-hoffman-resume.pdf"
              hide={hide}
              isActive={false}
            />
          </ul>
        </nav>
      </div>
      <noscript>
        <nav className="px-4 md:hidden">
          <ul className="flex flex-wrap gap-x-2 gap-y-3">
            {RouteList.map(
              (route) =>
                route.name !== "Particle Cleanup Game" &&
                route.name !== "Accessibility" && (
                  <li key={route.path}>
                    <Link className="button p-1" href={route.path}>
                      {route.name}
                    </Link>
                  </li>
                ),
            )}
            <li>
              <a className="button p-1" href="/riley-hoffman-resume.pdf">
                Resume <NewTabSrText />
              </a>
            </li>
          </ul>
        </nav>
      </noscript>
    </header>
  );
}
