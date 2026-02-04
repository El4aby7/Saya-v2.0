import { React } from '../utils.js';
import Layout from '../components/Layout.js';

const ContactPage = () => {
    return React.createElement(Layout, { activePage: 'contact' },
        React.createElement('div', { className: 'animate-fade-in min-h-screen' },
            React.createElement('div', { className: 'max-w-4xl mx-auto px-4 py-20' },
                React.createElement('h1', { className: 'font-display text-5xl mb-8 text-center' }, 'Get In Touch'),
                React.createElement('div', { className: 'w-20 h-1 bg-primary mx-auto mb-12' }),

                React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-12 mb-12' },
                    React.createElement('div', null,
                        React.createElement('h3', { className: 'font-display text-2xl mb-4' }, 'Contact Information'),
                        React.createElement('div', { className: 'space-y-4' },
                            React.createElement('div', null,
                                React.createElement('p', { className: 'font-bold' }, 'Email'),
                                React.createElement('p', null, 'hello@sayanaturalbeauty.com')
                            ),
                            React.createElement('div', null,
                                React.createElement('p', { className: 'font-bold' }, 'Phone'),
                                React.createElement('p', null, '+1 (555) 123-4567')
                            ),
                            React.createElement('div', null,
                                React.createElement('p', { className: 'font-bold' }, 'Address'),
                                React.createElement('p', null, 'City, Country'),
                                React.createElement('p', null, 'ZIP Code')
                            ),
                            React.createElement('div', null,
                                React.createElement('p', { className: 'font-bold' }, 'Follow Us'),
                                React.createElement('div', { className: 'flex gap-4 mt-2' },
                                    React.createElement('a', { href: '#', className: 'hover:text-primary' }, 'Instagram'),
                                    React.createElement('a', { href: '#', className: 'hover:text-primary' }, 'Facebook'),
                                    React.createElement('a', { href: '#', className: 'hover:text-primary' }, 'Pinterest')
                                )
                            )
                        )
                    ),

                    React.createElement('div', null,
                        React.createElement('h3', { className: 'font-display text-2xl mb-4' }, 'Send us a Message'),
                        React.createElement('form', {
                            className: 'space-y-4',
                            onSubmit: (e) => {
                                e.preventDefault();
                                alert('Thank you for your message! We\'ll get back to you soon. (Demo mode - no email sent)');
                                e.target.reset();
                            }
                        },
                            React.createElement('input', {
                                type: 'text',
                                placeholder: 'Your Name',
                                required: true,
                                className: 'w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                            }),
                            React.createElement('input', {
                                type: 'email',
                                placeholder: 'Your Email',
                                required: true,
                                className: 'w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                            }),
                            React.createElement('textarea', {
                                placeholder: 'Your Message',
                                required: true,
                                rows: 5,
                                className: 'w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                            }),
                            React.createElement('button', {
                                type: 'submit',
                                className: 'w-full px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg'
                            }, 'Send Message')
                        )
                    )
                )
            )
        )
    );
};

export default ContactPage;
