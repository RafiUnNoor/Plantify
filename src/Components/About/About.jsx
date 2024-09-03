import React from 'react';
import animation from '../../assets/animations/aboutUsAnimation.gif'
import { Container, Fade } from '@mui/material';

const About = () => {
       // Scrolling Bug Fixed
       window.scroll({ top: 0 });
    return (
        <div className=" min-h-screen pt-20 px-2 flex items-center sm:px-6 lg:px-8">
            <Fade in={true}>
                <Container>
                    <div className="max-w-7xl pb-5 container mx-auto ">
                        <div className="lg:grid md:grid-cols-2">
                            {/* Animation */}
                            <div className='col flex order-last justify-center'>
                                <img
                                    className='xl:h-[30rem] lg:h-[28rem] md:h-[22rem] h-[17.5rem]'
                                    src={animation}
                                    alt="about_us" />
                            </div>
                            <div className="xl:space-y-7 lg:space-y-5 md:space-y-7 space-y-5 sm:mt-0 sm:px-0">
                                {/* Title */}
                                <h2 className="xl:text-3xl md:text-3xl lg:text-2xl text-2xl font-semibold text-gray-800">
                                    Welcome to Our Plant Store
                                </h2>
                                {/* Article */}
                                <p className=" text-justify xl:text-base lg:text-sm md:text-base text-sm text-gray-600">
                                    At <strong>Plantify</strong>, we are committed to providing you with the fresh
                                    and highest quality products for your indoor spaces.
                                    Plantify is your one-stop shop for all plant related goodness. It’s a place to choose the best possible plant and connect with other plant lovers throughout Bangladesh.<br /><br />

                                    With our user-friendly interface and reliable delivery service, plant shopping has never been
                                    easier. Simply browse our wide selection, add items to your cart, and enjoy the convenience of
                                    doorstep delivery.<br /><br />

                                    We take pride in our commitment to exceptional customer service. Our dedicated support team is
                                    always ready to assist you with any questions or concerns you may have. Your satisfaction is our
                                    top priority.<br /><br />

                                    Plants transform your space, elevate your mood, boost your creativity and even
                                    improve your health. Whether you’re plant obsessed or a first time plant parent, we’ve got 
                                    everything you need to keep your green friends happy, healthy and thriving.<br /><br />

                                    Start shopping now at <strong>Plantify</strong> website and make your every indoor spaces beautifull and nature friendly.
                                </p>
                                <div className="mt-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fade>
        </div >
    );
};

export default About;