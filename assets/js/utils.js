import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

const { useState, useEffect } = React;

export { React, ReactDOM, useState, useEffect };

export const loadData = async () => {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error loading products:', err);
        return { products: [], reviews: [] };
    }
};
