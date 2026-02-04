import { React } from '../utils.js';
import { useLanguage } from '../LanguageContext.js';

const Footer = () => {
    const { t } = useLanguage();

    return React.createElement('footer', { className: 'bg-gray-900 text-white py-12 mt-auto' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 rtl:space-x-reverse' },
            // About
            React.createElement('div', null,
                React.createElement('h3', { className: 'font-display text-xl mb-4' }, t('footer.about')),
                React.createElement('p', { className: 'text-sm text-gray-400' }, t('footer.aboutText'))
            ),

            // Links
            React.createElement('div', null,
                React.createElement('h4', { className: 'font-bold mb-4' }, t('footer.links')),
                React.createElement('div', { className: 'space-y-2 text-sm flex flex-col' },
                    React.createElement('a', { href: 'shop.html', className: 'hover:text-gray-300 w-fit' }, t('nav.shop')),
                    React.createElement('a', { href: 'about.html', className: 'hover:text-gray-300 w-fit' }, t('nav.about')),
                    React.createElement('a', { href: 'reviews.html', className: 'hover:text-gray-300 w-fit' }, t('nav.reviews')),
                    React.createElement('a', { href: 'contact.html', className: 'hover:text-gray-300 w-fit' }, t('nav.contact'))
                )
            ),

            // Newsletter
            React.createElement('div', null,
                React.createElement('h4', { className: 'font-bold mb-4' }, t('footer.newsletter')),
                 React.createElement('p', { className: 'text-sm text-gray-400 mb-4' }, t('footer.newsletterText')),
                 React.createElement('div', { className: 'flex' },
                    React.createElement('input', {
                        type: 'email',
                        placeholder: t('contact.email'),
                        className: 'px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none w-full ltr:rounded-l rtl:rounded-r'
                    }),
                    React.createElement('button', { className: 'bg-stone-600 px-4 py-2 hover:bg-stone-500 transition-colors ltr:rounded-r rtl:rounded-l' }, t('footer.subscribe'))
                 )
            )
        ),
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400' },
            t('footer.rights')
        )
    );
};

export default Footer;
