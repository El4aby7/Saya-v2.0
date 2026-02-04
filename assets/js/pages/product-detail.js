import { React, useState, useEffect, loadData } from '../utils.js';
import Layout from '../components/Layout.js';

const ProductDetailPage = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        loadData().then(data => {
            const found = data.products.find(p => p.id === id);
            setProduct(found);
            setLoading(false);
        });
    }, []);

    if (loading) return React.createElement(Layout, {}, React.createElement('div', { className: 'text-center py-20' }, 'Loading...'));

    if (!product) {
        return React.createElement(Layout, {},
            React.createElement('div', { className: 'text-center py-20' },
                React.createElement('p', null, 'Product not found'),
                React.createElement('a', {
                    href: 'shop.html',
                    className: 'mt-4 px-6 py-2 bg-primary text-white rounded-lg inline-block'
                }, 'Back to Products')
            )
        );
    }

    return React.createElement(Layout, { activePage: 'shop' },
        React.createElement('div', { className: 'animate-fade-in min-h-screen' },
            React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-12' },
                React.createElement('a', {
                    href: 'shop.html',
                    className: 'mb-8 text-primary hover:underline inline-block'
                }, '← Back to Products'),

                React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-12' },
                    // Image
                    React.createElement('div', { className: 'aspect-square bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden' },
                        React.createElement('img', {
                            src: product.image,
                            alt: product.name,
                            className: 'w-full h-full object-cover'
                        })
                    ),

                    // Details
                    React.createElement('div', null,
                        React.createElement('div', { className: 'mb-4' },
                            React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-400 mb-2' }, product.category),
                            React.createElement('h1', { className: 'font-display text-4xl mb-4' }, product.name),
                            React.createElement('p', { className: 'text-2xl font-bold text-primary mb-6' }, `$${product.price.toFixed(2)}`)
                        ),

                        React.createElement('div', { className: 'mb-6' },
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'The Experience'),
                            React.createElement('p', { className: 'text-gray-700 dark:text-gray-300' }, product.description)
                        ),

                        product.ingredients && React.createElement('div', { className: 'mb-6' },
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'Key Ingredients'),
                            React.createElement('div', { className: 'flex flex-wrap gap-2' },
                                ...product.ingredients.map((ing, i) =>
                                    React.createElement('span', {
                                        key: i,
                                        className: 'px-3 py-1 bg-surface-light dark:bg-surface-dark rounded-full text-sm'
                                    }, ing)
                                )
                            )
                        ),

                        product.benefits && React.createElement('div', { className: 'mb-6' },
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'Benefits'),
                            React.createElement('p', { className: 'text-gray-700 dark:text-gray-300' }, product.benefits)
                        ),

                        React.createElement('div', { className: 'flex items-center gap-4 mb-6' },
                            product.inStock ?
                                React.createElement('span', { className: 'text-green-600' }, '✓ In Stock') :
                                React.createElement('span', { className: 'text-red-600' }, 'Out of Stock')
                        ),

                        React.createElement('button', {
                            className: 'w-full md:w-auto px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg',
                            onClick: () => alert('Shopping cart coming soon! (Demo mode)')
                        }, 'Add to Cart')
                    )
                )
            )
        )
    );
};

export default ProductDetailPage;
