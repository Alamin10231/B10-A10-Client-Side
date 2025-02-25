import React from "react";
import MovieSlider from "./MovieSlider";
import AskMe from "../Extrasection/AskMe";
import HeroMovieBanner from "../HeroMovieBanner/HeroMovieBanner";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";

const Home = () => {
  return (
    <div className="">
      <section>
        <MovieSlider></MovieSlider>
      </section>
      <section>
        <FeaturedMovie></FeaturedMovie>
      </section>
      <HeroMovieBanner></HeroMovieBanner>
      <section className="w-8/12 mx-auto">
        <AskMe></AskMe>
      </section>
    </div>
  );
};

export default Home;
