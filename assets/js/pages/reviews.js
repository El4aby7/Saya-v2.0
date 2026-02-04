import { React, useState, useEffect, loadData } from '../utils.js';
import Layout from '../components/Layout.js';

const ReviewsPage = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        loadData().then(data => setReviewsData(data.reviews || []));
    }, []);

    return React.createElement(Layout, { activePage: 'reviews' },
        React.createElement('div', { className: 'animate-fade-in min-h-screen' },
            React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-20' },
                React.createElement('div', { className: 'text-center mb-16' },
                    React.createElement('p', { className: 'text-sm uppercase tracking-widest mb-2' }, 'TRUSTED BY OVER 10,000 CUSTOMERS'),
                    React.createElement('h1', { className: 'font-display text-5xl mb-4' }, 'Voices of Beauty'),
                    React.createElement('p', { className: 'text-lg max-w-2xl mx-auto' },
                        'Discover why thousands of women trust Saya for their natural skincare journey. Real stories, real results, and the pure power of nature.'
                    ),
                    React.createElement('div', { className: 'flex justify-center gap-8 mt-8' },
                        React.createElement('div', null,
                            React.createElement('div', { className: 'text-3xl font-bold' }, '4.9'),
                            React.createElement('div', { className: 'text-yellow-500' }, '★★★★★'),
                            React.createElement('div', { className: 'text-sm text-gray-600' }, 'Based on 1,248 reviews')
                        )
                    )
                ),

                reviewsData.length > 0 ?
                    React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
                        ...reviewsData.map(review =>
                            React.createElement('div', {
                                key: review.id,
                                className: 'bg-surface-light dark:bg-surface-dark p-6 rounded-lg'
                            },
                                React.createElement('div', { className: 'flex justify-between items-start mb-4' },
                                    React.createElement('div', null,
                                        React.createElement('div', { className: 'font-bold' }, review.name),
                                        React.createElement('div', { className: 'text-sm text-gray-600 dark:text-gray-400' }, review.location)
                                    ),
                                    review.verified && React.createElement('span', {
                                        className: 'text-xs bg-green-100 text-green-800 px-2 py-1 rounded'
                                    }, '✓ Verified')
                                ),
                                React.createElement('div', { className: 'text-yellow-500 mb-2' },
                                    '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)
                                ),
                                React.createElement('p', { className: 'italic mb-2' }, `"${review.comment}"`),
                                React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-400' }, review.product)
                            )
                        )
                    )
                    : React.createElement('div', { className: 'text-center' }, 'Loading reviews...')
            )
        )
    );
};

export default ReviewsPage;
