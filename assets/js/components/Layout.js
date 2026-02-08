import { React, useState, useEffect } from '../utils.js';
import Navigation from './Navigation.js';
import Footer from './Footer.js';

const Layout = ({ children, activePage }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Dark Mode
        const isDark = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return React.createElement('div', { className: 'min-h-screen flex flex-col transition-colors duration-300 dark:bg-stone-900 dark:text-stone-100' },
        React.createElement(Navigation, {
            activePage,
            darkMode,
            toggleDarkMode
        }),
        React.createElement('main', { className: 'flex-grow' }, children),
        React.createElement(Footer)
    );
};

export default Layout;
