import { Container, Fade } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import ProductCard, { ProductCardSkeleton } from './ProductCard/ProductCard';
import { products_info } from '../../store/products';
import { useParams } from 'react-router-dom';




    // Scrolling Bug Fixed
    window.scroll({ top: 0 });

    const Products = () => {
        const [products, setProducts] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const { categoryName } = useParams();
    
        // Fetching products based on categoryName
        useEffect(() => {
            const fetchData = async () => {
                try {
                    let fetchedProducts = [];
                    
                    if (categoryName) {
                        // Filter products by categoryName
                        fetchedProducts = products_info.find(category => category.category.toLowerCase() === categoryName.toLowerCase())?.items || [];
                    } else {
                        // If no categoryName, show all products
                        fetchedProducts = products_info.flatMap(category => category.items);
                    }
    
                    // Set products and loading state
                    setProducts(fetchedProducts);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Products Fetch Failed', error);
                    setIsLoading(false); // Ensure loading state is false on error
                }
            };
    
            fetchData();
        }, [categoryName]);

    return (
        <main className='min-h-screen space-y-5 pt-20 mb-9'>
            <Fade in={true}>
                <Container className='xl:space-y-10 sm:space-y-8 space-y-6'>
                    {/* Title */}
                    <h1 className='pb-0 md:text-2xl text-xl font-semibold text-gray-700 capitalize'>
                        {categoryName ? categoryName : 'All Products'}
                    </h1>

                    {/* Product_cards*/}
                    <section className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
                lg:gap-6 gap-x-5 gap-y-5'>
                        {
                            !isLoading ?
                                products.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        product={product} />
                                ))
                                : Array.from({ length: 8 }).map((pd, i) => {
                                    return <ProductCardSkeleton key={i} />
                                })
                        }
                    </section>
                </Container>
            </Fade>
        </main>
    );
};

export default Products;