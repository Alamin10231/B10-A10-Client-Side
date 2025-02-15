import React from 'react';
import MovieSlider from './MovieSlider';
import AskMe from '../Extrasection/AskMe';

const Home = () => {
                    return (
                                        <div className=''>
                                                          <section><MovieSlider></MovieSlider></section>
                                                          <section className='w-8/12 mx-auto'>
                                                          <AskMe></AskMe>
                                                          </section>
                                                         
                                                          
                                        </div>
                    );
};

export default Home;