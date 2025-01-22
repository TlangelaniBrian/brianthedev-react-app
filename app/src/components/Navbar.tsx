import React from 'react';

const Navbar: React.FC = () => {
    const links = [
        { name: 'Landing', href: '/' },
        { name: 'home', href: '/home' },
        { name: 'admin', href: '/admin' },
        { name: 'property', href: '/property' }];
    return (
        <nav className="bg-blue-500 text-white p-4 fixed w-full top-0 z-10">
            <ul className="flex space-x-4">
                {links.map((link, index) => (
                    <li key={index} className="p-2">
                        {link.href === '/' ? (
                            <a href={link.href} className="hover:underline">
                                <img src="./../assets/react.svg" alt="Landing" className="h-6 w-6"/>
                            </a>
                        ) : (
                            <a href={link.href} className="hover:underline">
                                {link.name}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;