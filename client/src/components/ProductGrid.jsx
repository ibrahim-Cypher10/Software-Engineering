import React, { useEffect, Fragment, useState } from 'react';
import axios from 'axios';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'

const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductGrid() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const [products, setProducts] = useState([
        {
            "_id": "66094f4053ee4e92dbdd5aba",
            "name": "HP 15",
            "category": "Electronics",
            "price": 120000,
            "vendor": "Arham Mirza",
            "description": "hello",
            "__v": 0
        },
        {
            "_id": "6609505953ee4e92dbdd5abd",
            "name": "Pen",
            "category": "Stationary",
            "price": 50,
            "vendor": "Arham Mirza",
            "description": "this is a pen",
            "__v": 0
        },
        {
            "_id": "6613a24120b4cbdc92739bf0",
            "name": " Dawlence Fridge",
            "category": "Appliances",
            "price": 40000,
            "vendor": "Arham Mirza",
            "description": "A very nice fridge that will make you happy.",
            "__v": 0
        },
        {
            "_id": "6613ab6e7f7844f62a50b47e",
            "name": " Dawlence Fridge",
            "category": "Appliances",
            "price": 40000,
            "vendor": "Arham Mirza",
            "description": "A very nice fridge that will make you happy.",
            "__v": 0
        },
        {
            "_id": "6613ab817f7844f62a50b480",
            "name": " Dawlence Fridge",
            "category": "Appliances",
            "price": 40000,
            "vendor": "Arham Mirza",
            "description": "A very nice fridge that will make you happy.",
            "__v": 0
        },
        {
            "_id": "6613ac167f7844f62a50b482",
            "name": " Dawlence Fridge",
            "category": "Appliances",
            "price": 40000,
            "vendor": "Arham Mirza",
            "description": "A very nice fridge that will make you happy.",
            "__v": 0
        },
        {
            "_id": "6613ad0145d61c4fab299dbc",
            "name": " Dawlence Fridge",
            "category": "Stationary",
            "price": 40000,
            "vendor": "Arham Mirza",
            "description": "A very nice fridge that will make you happy.",
            "__v": 0
        },
        {
            "_id": "6613ba6315475ba889c6a38e",
            "name": "HP 15",
            "category": "Laptop",
            "price": 60000,
            "vendor": "Arham Mirza",
            "vendor_id": "6613a7dc55dba4d67173b0da",
            "description": "laptop very nice condition",
            "__v": 0
        },
        {
            "_id": "6613bc6fabc81d59b60b1cc2",
            "name": "Pen",
            "category": "Stationary",
            "price": 100,
            "vendor": "Arham Mirza",
            "vendor_id": "6613a7dc55dba4d67173b0da",
            "description": "very nice",
            "__v": 0
        },
        {
            "_id": "6613c7b5abc81d59b60b1cc9",
            "name": "MacBook Pro M3",
            "category": "Laptop",
            "price": 300000,
            "vendor": "Arham Mirza",
            "vendor_id": "6613a7dc55dba4d67173b0da",
            "description": "best laptop of all time",
            "__v": 0
        },
        {
            "_id": "6613c7d5abc81d59b60b1ccd",
            "name": " Dawlence Fridge",
            "category": "Appliances",
            "price": 70000,
            "vendor": "Arham Mirza",
            "vendor_id": "6613a7dc55dba4d67173b0da",
            "description": "A very nice fridge that will make you happy.",
            "__v": 0
        },
        {
            "_id": "6613c9a310e07bdaef9c32e7",
            "name": "Handsfree",
            "category": "Electronics",
            "price": 500,
            "vendor": "Arham Mirza",
            "vendor_id": "6613a7dc55dba4d67173b0da",
            "description": "good",
            "__v": 0
        },
        {
            "_id": "6613d0d7fbe29b02bafc2f70",
            "name": "Redmi Note 11",
            "category": "Mobile",
            "price": 32000,
            "vendor": "Arham Mirza",
            "vendor_id": "6613a7dc55dba4d67173b0da",
            "description": "Best phone for the price. You will love it",
            "__v": 0
        },
        {
            "_id": "661574b84bf91a5b120aaf37",
            "name": "Chocolate cupcake",
            "category": "Food",
            "price": 200,
            "vendor": "Arham Mirza",
            "vendor_id": "6613a7dc55dba4d67173b0da",
            "description": "Delicious chocolate coated cupcake with chocolate filling inside as well ",
            "__v": 0
        },
        {
            "_id": "661575bc4bf91a5b120aaf4b",
            "name": "IPhone 10 (used)",
            "category": "Mobile",
            "price": 60000,
            "vendor": "Arham Mirza",
            "vendor_id": "6615757c4bf91a5b120aaf46",
            "description": "Second hand IPhone in excellent condition",
            "__v": 0
        }
    ]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filter, setFilter] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);


    const sortingOptions = [
        { name: 'Best Rating', current: false },
        { name: 'Newest', current: false },
        { name: 'Price: Low to High', current: false },
        { name: 'Price: High to Low', current: false },
    ]
    const [sortOptions, setSortOptions] = useState(sortingOptions)
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        const result = products.filter(product => {
            return (!filter || product.category === filter)
        });
        setFilteredProducts(result);
        setSortOptions(sortingOptions);
        setSortOption('');
        setMinPrice(0);
        setMaxPrice(Infinity);
    }, [filter, products]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const applyPriceFilter = () => {
        const result = products.filter(product => {
            return (!filter || product.category === filter) &&
                product.price >= minPrice && product.price <= maxPrice;
        });
        setFilteredProducts(result);
        setSortOptions(sortingOptions);
        setSortOption('');
    };

    // Handle sort option change
    const handleSortOptionChange = (option) => {
        setSortOption(option.name);
        setSortOptions(sortOptions.map(opt => {
            return {
                ...opt,
                current: opt.name === option.name
            };
        }));
        sortProducts(option.name);
    };

    // Sort products based on selected option (Rating and Newest Left!!!!!!!)
    const sortProducts = (optionName) => {
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            switch (optionName) {
                case 'Best Rating':
                    // Sort logic for best rating
                    break;
                case 'Newest':
                    // Sort by date for example
                    break;
                case 'Price: Low to High':
                    return a.price - b.price;
                case 'Price: High to Low':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });
        setFilteredProducts(sortedProducts);
    };

    // Fetch products when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/product/fetchprod');
                console.log(response);
                setProducts(response.data); // Update state with fetched products
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array ensures this runs once on mount


    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <div className="mt-4 border-t border-gray-200">

                                        {/* Subcategories */}
                                        {/* <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            {subCategories.map((category) => (
                                                <li key={category.name}>
                                                    <a href={category.href} className="block px-2 py-3">
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul> */}

                                        {/* Categories Filter */}
                                        <div className="border-t border-gray-200 px-4 py-6">
                                            <label className="font-semibold text-gray-900 mb-2" htmlFor="category">Category</label>
                                            <select id="category" name="category" className="form-select mt-1 w-full text-sm" value={filter} onChange={handleFilterChange}>
                                                <option value="">All Categories</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Clothing">Clothing</option>
                                                <option value="Accessories">Accessories</option>
                                            </select>
                                        </div>

                                        {/* Price Range Filter */}
                                        <div className="border-t border-gray-200 px-4 py-6">
                                            <label className="font-semibold text-gray-900 mb-2">Price Range</label>
                                            <div className="flex gap-3 items-center">
                                                <div className="flex gap-1 items-center mt-1">
                                                    <input
                                                        type="number"
                                                        className="form-input text-sm block w-full py-1 pl-1.5 pr-2.5 border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out"
                                                        placeholder="Min"
                                                        min="0"
                                                        value={minPrice}
                                                        onChange={handleMinPriceChange}
                                                    />
                                                    -
                                                    <input
                                                        type="number"
                                                        className="form-input text-sm block w-full py-1 pl-1.5 pr-2.5 border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out"
                                                        placeholder="Max"
                                                        min="0"
                                                        value={maxPrice}
                                                        onChange={handleMaxPriceChange}
                                                    />
                                                </div>

                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1.5 px-3 rounded"
                                                    onClick={applyPriceFilter}
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Products List</h1>

                        {/* Sorting */}
                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        {sortOption || 'Sort'}
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name}>
                                                    {({ active }) => (
                                                        <a
                                                            className={classNames(
                                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm cursor-pointer'
                                                            )}
                                                            onClick={(e) => {

                                                                handleSortOptionChange(option);
                                                            }}
                                                        >
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            {/* Change Grid View Button */}
                            {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                            </button> */}

                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <div className="hidden lg:block">

                                {/* Subcategories */}
                                {/* <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>{category.name}</a>
                                        </li>
                                    ))}
                                </ul> */}

                                {/* Categories Filter */}
                                <div className="border-b border-gray-200 py-6">
                                    <label className="font-semibold text-gray-900 mb-2" htmlFor="category">Category</label>
                                    <select id="category" name="category" className="form-select mt-1 w-full text-sm" value={filter} onChange={handleFilterChange}>
                                        <option value="">All Categories</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                </div>

                                {/* Price Range Filter */}
                                <div className="border-b border-gray-200 py-6">
                                    <label className="font-semibold text-gray-900 mb-2">Price Range</label>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex gap-1 items-center mt-1">
                                            <input
                                                type="number"
                                                className="form-input text-sm block w-full py-1 pl-1.5 pr-2.5 border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out"
                                                placeholder="Min"
                                                min="0"
                                                value={minPrice}
                                                onChange={handleMinPriceChange}
                                            />
                                            -
                                            <input
                                                type="number"
                                                className="form-input text-sm block w-full py-1 pl-1.5 pr-2.5 border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out"
                                                placeholder="Max"
                                                min="0"
                                                value={maxPrice}
                                                onChange={handleMaxPriceChange}
                                            />
                                        </div>

                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1.5 px-3 rounded"
                                            onClick={applyPriceFilter}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product grid */}
                            <div className="lg:col-span-3"><div className="flex-1">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                    {filteredProducts.map((product) => (
                                        <div key={product.id} className="group relative">
                                            {/* Product Image */}
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                <img src="..\assets\gray_bg.png" alt="Product" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                            </div>

                                            {/* Product Details */}
                                            <div className="mt-3 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        <a href="#">
                                                            <span aria-hidden="true" className="absolute inset-0" />
                                                            {product.name}
                                                        </a>
                                                    </h3>
                                                </div>
                                                <p className="text-sm font-semibold text-gray-900">RS {product.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div></div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}