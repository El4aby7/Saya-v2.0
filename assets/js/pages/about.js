import { React } from '../utils.js';
import Layout from '../components/Layout.js';
import { useLanguage } from '../LanguageContext.js';

const AboutPage = () => {
    const { t } = useLanguage();

    return React.createElement(Layout, { activePage: 'about' },
        React.createElement('div', { className: 'animate-fade-in' },
            React.createElement('div', { className: 'max-w-4xl mx-auto px-4 py-20' },
                React.createElement('h1', { className: 'font-display text-5xl mb-8 text-center' }, t('nav.about')),
                React.createElement('div', { className: 'w-20 h-1 bg-primary mx-auto mb-12' }),

                React.createElement('div', { className: 'prose prose-lg max-w-none dark:prose-invert' },
                    React.createElement('p', { className: 'text-xl mb-6' },
                        t('home.philosophyText')
                    ),
                    React.createElement('p', { className: 'mb-6' },
                        t('home.heroSubtitle')
                    ),

                    React.createElement('h2', { className: 'font-display text-3xl mt-12 mb-6' }, t('home.philosophyTitle')),
                    React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 mt-8' },
                        React.createElement('div', null,
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, '100% Natural'),
                            React.createElement('p', null, t('home.philosophyText'))
                        ),
                        React.createElement('div', null,
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'No Cruelty'),
                            React.createElement('p', null, t('home.philosophyText'))
                        ),
                        React.createElement('div', null,
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'Ethically Sourced'),
                            React.createElement('p', null, t('home.philosophyText'))
                        )
                    )
                )
            )
        )
    );
};

export default AboutPage;
