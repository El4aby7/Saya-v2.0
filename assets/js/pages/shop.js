import { React, useState, useEffect, loadData } from '../utils.js';
import Layout from '../components/Layout.js';

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('All');
    const [sortBy, setSortBy] = useState('name');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadData().then(data => setProducts(data.products || []));
    }, []);

    const categories = ['All', 'Oils', 'Soaps', 'Treatments', 'Sets'];

    let filteredProducts = products;

    // Filter by category
    if (filter !== 'All') {
        filteredProducts = filteredProducts.filter(p => p.category === filter);
    }

    // Search
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Sort
    filteredProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
    });

    return React.createElement(Layout, { activePage: 'shop' },
        React.createElement('div', { className: 'animate-fade-in min-h-screen' },
            React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-12' },
                React.createElement('h1', { className: 'font-display text-4xl mb-8 text-center' }, 'Our Products'),

                // Search
                React.createElement('div', { className: 'mb-8' },
                    React.createElement('input', {
                        type: 'text',
                        placeholder: 'Search products...',
                        value: searchTerm,
                        onChange: (e) => setSearchTerm(e.target.value),
                        className: 'w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                    })
                ),

                // Filters and Sort
                React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center mb-8 gap-4' },
                    React.createElement('div', { className: 'flex gap-4 flex-wrap' },
                        ...categories.map(cat =>
                            React.createElement('button', {
                                key: cat,
                                onClick: () => setFilter(cat),
                                className: `px-4 py-2 rounded-full transition-colors ${filter === cat ? 'bg-primary text-white' : 'bg-surface-light dark:bg-surface-dark'}`
                            }, cat)
                        )
                    ),
                    React.createElement('select', {
                        value: sortBy,
                        onChange: (e) => setSortBy(e.target.value),
                        className: 'px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                    },
                        React.createElement('option', { value: 'name' }, 'Sort by Name'),
                        React.createElement('option', { value: 'price-low' }, 'Price: Low to High'),
                        React.createElement('option', { value: 'price-high' }, 'Price: High to Low')
                    )
                ),

                // Products Grid
                filteredProducts.length > 0 ?
                    React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8' },
                        ...filteredProducts.map(product =>
                            React.createElement('a', {
                                key: product.id,
                                href: `product-detail.html?id=${product.id}`,
                                className: 'group cursor-pointer block'
                            },
                                React.createElement('div', { className: 'aspect-square bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden mb-4' },
                                    React.createElement('img', {
                                        src: product.image,
                                        alt: product.name,
                                        className: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                    })
                                ),
                                React.createElement('h3', { className: 'font-display text-lg mb-1' }, product.name),
                                React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-400 mb-2' }, product.category),
                                React.createElement('p', { className: 'font-bold' }, `$${product.price.toFixed(2)}`),
                                React.createElement('div', {
                                    className: 'mt-2 text-sm text-primary hover:underline'
                                }, 'View Details')
                            )
                        )
                    )
                    : React.createElement('div', { className: 'text-center py-20' },
                        React.createElement('p', { className: 'text-xl' }, 'No products found')
                    )
            )
        )
    );
};

export default ShopPage;
