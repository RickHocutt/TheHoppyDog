import heroImage from '../assets/hero.avif';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 mt-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 drop-shadow-2xl">
            Welcome to <span className="text-amber-400"> <br/> The Hoppy Dog</span>
          </h1>

          <p className="text-2xl lg:text-4xl font-bold mb-4">Coming Soon!</p>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg">
            New Hampshire's only indoor dog park &amp; taproom serving local craft beer and wine
          </p>

          <p className="text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where your four-legged best friends can run free while you sample our wicked awesome selection of local craft brews in our converted mill warehouse. Live Free or Die... and drink good beer!
          </p>
        </div>
      </section>
    </div>
  );
}