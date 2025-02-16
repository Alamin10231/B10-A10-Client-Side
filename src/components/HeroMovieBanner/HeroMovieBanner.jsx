const HeroMovieBanner = () => {
  return (
    <section className="py-10 bg-gray-900 text-white text-center my-5 rounded-lg w-8/12 mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Watch the Latest Trailer</h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <iframe
            className="w-full h-64 md:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroMovieBanner;
