import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductPageInfo from '../components/Product/ProductPageInfo';
import ProductReviews from '../components/Product/ProductReviews';

// On clicking vendor name, link to vendor page!!!!!
// Add share option

// const product = {
//     name: 'Basic Tee 6-Pack',
//     price: '$192',
//     href: '#',
//     images: [
//         {
//             src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//             alt: 'Two each of gray, white, and black shirts laying flat.',
//         },
//         {
//             src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//             alt: 'Model wearing plain black basic tee.',
//         },
//         {
//             src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//             alt: 'Model wearing plain gray basic tee.',
//         },
//         {
//             src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//             alt: 'Model wearing plain white basic tee.',
//         },
//     ],
//     description:
//         'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//     vendor: 'Olala Olala'
// }
const reviews = { href: '#', average: 4, totalCount: 117 }
const reviews_arr = [
    {
        id: 1,
        user: "John Doe",
        content: "Great quality tees, very comfortable to wear.",
        rating: 5,
    },
    {
        id: 2,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 4,
    },
    {
        id: 3,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 4,
    },
    {
        id: 4,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 3,
    },
    {
        id: 5,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 2,
    },
    {
        id: 6,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 1,
    },
    {
        id: 7,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 2,
    },
    {
        id: 8,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 1,
    },
    {
        id: 9,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 2,
    },
    {
        id: 10,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 1,
    },
    {
        id: 11,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 2,
    },
    {
        id: 12,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 1,
    },
    {
        id: 13,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 2,
    },
    {
        id: 14,
        user: "Jane Smith",
        content: "I love the colors! They haven't faded in the wash.",
        rating: 1,
    },
]

export default function ProductPage() {
    const { id } = useParams();
    const reviewRef = useRef(null);
    const [product, setProduct] = useState();

    const scrollToReviews = () => {
        reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const getProductById = async (productId) => {
        try {
            const response = await axios.get(`/api/product/fetchprod/${productId}`);
            console.log('Product data:', response.data);
            setProduct(response.data)
        } catch (error) {
            console.error('Error fetching product:', error.response?.data || error.message);
            return null;
        }
    };
    
    getProductById(id)
    console.log("Here", product);

    return (
        <>
            <ProductPageInfo product={product} reviews={reviews} scrollToReviews={scrollToReviews} />
            <ProductReviews ref={reviewRef} reviews={reviews_arr} />
        </>
    )
}
