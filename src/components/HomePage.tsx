import heroImage from '../assets/hero.png';
import mainLogo from '../assets/hoppy-dog-logo.jpg';
import NeedSpace from './NeedSpace';
import SetTitle from './SetTitle';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SetTitle title="Home" />
      {/* Hero Section */}
      <section className="relative min-h-screen flex">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 mt-10">

          <div className="flex justify-center items-center mb-40">
            <img src={mainLogo} className="w-40 h-40 rounded-full block mr-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 drop-shadow-2xl" style={{ fontFamily: "'Original Surfer', sans-serif" }}>
              Welcome to <span className="text-amber-400"> <br/> The Hoppy Dog</span>
            </h1>
          </div>

          <div className="bg-black bg-opacity-50 mt-8 p-8 rounded-2xl">
            <p className="text-2xl lg:text-4xl font-bold mb-4">Coming Soon!</p>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg">
              New Hampshire's only indoor dog park &amp; taproom serving local craft beer and wine
            </p>

            <p className="text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Where your four-legged best friends can run free while you sample our wicked awesome selection of local craft brews. Live Free or Die... and drink good beer!
            </p>
          </div>
        </div>
      </section>

      {/* We're Looking for Space */}
      <NeedSpace />
    </div>
  );
}