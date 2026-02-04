import { React } from '../utils.js';

const Footer = () => {
    return React.createElement('footer', { className: 'bg-gray-900 text-white py-12' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8' },
            React.createElement('div', null,
                React.createElement('h3', { className: 'font-display text-xl mb-4' }, 'Saya'),
                React.createElement('p', { className: 'text-sm text-gray-400' },
                    'Natural Beauty, Natural Skincare. Imported quality from Morocco & Sudan.'
                )
            ),
            React.createElement('div', null,
                React.createElement('h4', { className: 'font-bold mb-4' }, 'Shop'),
                React.createElement('div', { className: 'space-y-2 text-sm' },
                    React.createElement('a', { href: 'shop.html', className: 'block hover:text-gray-300' }, 'All Products'),
                    React.createElement('a', { href: 'shop.html', className: 'block hover:text-gray-300' }, 'New Arrivals'),
                    React.createElement('a', { href: 'shop.html', className: 'block hover:text-gray-300' }, 'Best Sellers'),
                    React.createElement('a', { href: 'shop.html', className: 'block hover:text-gray-300' }, 'Gift Sets')
                )
            ),
            React.createElement('div', null,
                React.createElement('h4', { className: 'font-bold mb-4' }, 'Company'),
                React.createElement('div', { className: 'space-y-2 text-sm' },
                    React.createElement('a', { href: 'about.html', className: 'block hover:text-gray-300' }, 'About Us'),
                    React.createElement('a', { href: 'about.html', className: 'block hover:text-gray-300' }, 'Sustainability'),
                    React.createElement('a', { href: '#', className: 'block hover:text-gray-300' }, 'Careers'),
                    React.createElement('a', { href: 'contact.html', className: 'block hover:text-gray-300' }, 'Contact')
                )
            ),
            React.createElement('div', null,
                React.createElement('h4', { className: 'font-bold mb-4' }, 'Support'),
                React.createElement('div', { className: 'space-y-2 text-sm' },
                    React.createElement('a', { href: '#', className: 'block hover:text-gray-300' }, 'Shipping & Returns'),
                    React.createElement('a', { href: '#', className: 'block hover:text-gray-300' }, 'FAQ'),
                    React.createElement('a', { href: '#', className: 'block hover:text-gray-300' }, 'Privacy Policy'),
                    React.createElement('a', { href: '#', className: 'block hover:text-gray-300' }, 'Terms of Service')
                )
            )
        ),
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400' },
            '© 2024 Saya Natural Beauty. All rights reserved.'
        )
    );
};

export default Footer;
