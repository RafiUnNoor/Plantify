import { Container, Fade } from '@mui/material';
import CategoryCard from '../CategoryCard/CategoryCard';
import pure_indoor from "../../assets/categories/pure_indoor.png";
import semi_indoor from "../../assets/categories/semi_indoor.png";
import orna_outdoor from "../../assets/categories/orna_plants.png";
import homely from "../../assets/categories/string-of-pearls.webp";
import ornamental from "../../assets/categories/monsterra.webp";

const AllCategories = () => {
    // Scrolling Bug Fixed
    window.scroll({ top: 0 });

    return (
        <main className='min-h-screen space-y-5 pt-20 mb-9'>
            <Fade in={true}>
                <Container className='xl:space-y-10 sm:space-y-8 space-y-6'>
                    {/* Title */}
                    <h1 className='pb-0 md:text-2xl text-xl font-semibold text-gray-700 capitalize'>
                        All Categories
                    </h1>
                    {/* All Category Cards */}
                    <section className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                        {[
                            { id: 0, name: 'Pure Indoor', img: pure_indoor, bgColor: '#FEF4EA' },
                            { id: 1, name: 'Semi Indoor', img: semi_indoor, bgColor: '#F5F5F5' },
                            { id: 2, name: 'Ornamental Outdoor', img: orna_outdoor, bgColor: '#EAF5E3' },
                            { id: 3, name: 'Homely', img: homely, bgColor: '#eaf4f4' },
                            { id: 4, name: 'Ornamental', img: ornamental, bgColor: '#FAF9D7', }

                        ].map(category => (
                            <CategoryCard
                                key={category.id}
                                shadow={true}
                                category={category} />
                        ))}
                    </section>
                </Container>
            </Fade>
        </main>
    );
};

export default AllCategories;