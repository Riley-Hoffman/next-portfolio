import Link from 'next/link';

interface NavListItemProps {
    to?: string;
    label?: string;
    hide?: boolean;
    resume?: string;
}

const NavListItem: React.FC<NavListItemProps> = ({
    to = '',
    label = '',
    hide = false,
    resume = ''
}) => {
    const commonClasses = 'w-full inline-block py-3 pr-5 pl-14 tracking-wider whitespace-nowrap button md:py-2 md:px-4 md:inline-block md:w-auto hover:[&.button]:bg-pink-200 hover:brightness-90';
    const hiddenClass = hide ? 'hidden' : '';    

    return (
        <li className="block md:inline">
            {resume ? (
                <a
                    className={`button ${commonClasses} ${hiddenClass}`}
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            ) : (
                <Link
                    className={`button ${commonClasses} ${hiddenClass} hover:[&.active]:brightness-100 [&.active]:bg-pink-200 [&.active]:text-zinc`}
                    href={to}
                >
                    {label}
                </Link>
            )}
        </li>
    );
};

export default NavListItem;
