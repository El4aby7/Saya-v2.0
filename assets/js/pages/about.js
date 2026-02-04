import { React } from '../utils.js';
import Layout from '../components/Layout.js';

const AboutPage = () => {
    return React.createElement(Layout, { activePage: 'about' },
        React.createElement('div', { className: 'animate-fade-in' },
            React.createElement('div', { className: 'max-w-4xl mx-auto px-4 py-20' },
                React.createElement('h1', { className: 'font-display text-5xl mb-8 text-center' }, 'Our Story'),
                React.createElement('div', { className: 'w-20 h-1 bg-primary mx-auto mb-12' }),

                React.createElement('div', { className: 'prose prose-lg max-w-none dark:prose-invert' },
                    React.createElement('p', { className: 'text-xl mb-6' },
                        'Saya is more than just a brand; it is a journey back to the roots of beauty. Born from a desire to bring the most authentic, high quality ingredients from Morocco and Sudan, we offer skin and body care products that are completely inspired from the heart of North and East Africa.'
                    ),
                    React.createElement('p', { className: 'mb-6' },
                        'We believe nature holds the ultimate key to radiance in a world saturated with synthetics, our mission is to provide a sanctuary of purity. Every jar, bottle, and every drop is a testament to the raw power of earth\'s beauty.'
                    ),
                    React.createElement('p', { className: 'mb-6' },
                        'Our sourcing process is rigorous. We partner directly with local artisans in North Africa, ensuring that the Argan and indigenous oils we provide are not just fake-advertise, we deliver confidence.'
                    ),
                    React.createElement('h2', { className: 'font-display text-3xl mt-12 mb-6' }, 'Our Values'),
                    React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 mt-8' },
                        React.createElement('div', null,
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, '100% Natural'),
                            React.createElement('p', null, 'All products are free from harmful chemicals. We don\'t just advertise, we deliver confidence.')
                        ),
                        React.createElement('div', null,
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'No Cruelty'),
                            React.createElement('p', null, 'Vegan and cruelty-free. Beauty shouldn\'t come at the cost of animal suffering.')
                        ),
                        React.createElement('div', null,
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'Ethically Sourced'),
                            React.createElement('p', null, 'Supporting local communities and sustainable practices in Morocco and Sudan.')
                        )
                    )
                )
            )
        )
    );
};

export default AboutPage;
