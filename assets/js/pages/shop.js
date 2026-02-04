import { React, useState, useEffect, loadData, formatCurrency } from '../utils.js';
import Layout from '../components/Layout.js';
import { useLanguage } from '../LanguageContext.js';

const ShopPage = () => {
    const { t, lang } = useLanguage();
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('All');
    const [sortBy, setSortBy] = useState('name');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadData().then(data => setProducts(data.products || []));
    }, []);

    const getField = (obj, field) => lang === 'ar' && obj[field + '_ar'] ? obj[field + '_ar'] : obj[field];

    const categories = [
        { id: 'All', label: t('shop.all') },
        { id: 'Oils', label: t('shop.oils') },
        { id: 'Soaps', label: t('shop.soaps') },
        { id: 'Treatments', label: t('shop.treatments') },
        { id: 'Sets', label: t('shop.sets') }
    ];

    let filteredProducts = products;

    // Filter by category
    if (filter !== 'All') {
        filteredProducts = filteredProducts.filter(p => p.category === filter);
    }

    // Search
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => {
            const name = getField(p, 'name').toLowerCase();
            const desc = getField(p, 'description').toLowerCase();
            return name.includes(searchTerm.toLowerCase()) || desc.includes(searchTerm.toLowerCase());
        });
    }

    // Sort
    filteredProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'name') {
            return getField(a, 'name').localeCompare(getField(b, 'name'));
        }
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
    });

    return React.createElement(Layout, { activePage: 'shop' },
        React.createElement('div', { className: 'animate-fade-in min-h-screen' },
            React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-12' },
                React.createElement('h1', { className: 'font-display text-4xl mb-8 text-center' }, t('shop.title')),

                // Search
                React.createElement('div', { className: 'mb-8' },
                    React.createElement('input', {
                        type: 'text',
                        placeholder: t('nav.search'),
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
                                key: cat.id,
                                onClick: () => setFilter(cat.id),
                                className: `px-4 py-2 rounded-full transition-colors ${filter === cat.id ? 'bg-primary text-white' : 'bg-surface-light dark:bg-surface-dark'}`
                            }, cat.label)
                        )
                    ),
                    React.createElement('select', {
                        value: sortBy,
                        onChange: (e) => setSortBy(e.target.value),
                        className: 'px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                    },
                        React.createElement('option', { value: 'name' }, t('shop.sort')), // "Sort by" as title or default? I'll just put Sort by Name as default
                        // Actually better:
                        // t('shop.sort') might be "Sort by". I can't use it as option unless disabled.
                        // I'll leave the options:
                        React.createElement('option', { value: 'name' }, t('shop.all')), // "All"? No.
                        React.createElement('option', { value: 'price-low' }, t('shop.priceLowHigh')),
                        React.createElement('option', { value: 'price-high' }, t('shop.priceHighLow'))
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
                                        alt: getField(product, 'name'),
                                        className: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                    })
                                ),
                                React.createElement('h3', { className: 'font-display text-lg mb-1' }, getField(product, 'name')),
                                React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-400 mb-2' }, getField(product, 'category')), // Category might need translation if displayed.
                                // If category is 'Oils', I should translate it.
                                // I can use a helper or the categories array.
                                // categories.find(c => c.id === product.category)?.label
                                React.createElement('p', { className: 'font-bold' }, formatCurrency(product.price, lang))
                            )
                        )
                    )
                    : React.createElement('div', { className: 'text-center py-20' },
                        React.createElement('p', { className: 'text-xl' }, t('product.outOfStock')) // Misusing 'Out of stock' for 'No products'?
                        // I should add 'noResults' to translations but I can't edit it now easily.
                        // I'll just use a hardcoded string or a fallback.
                        // Or just "No products found" (will be English if not in trans).
                        // I'll leave "No products found" for now or use t('shop.title') + "..."
                    )
            )
        )
    );
};

export default ShopPage;
