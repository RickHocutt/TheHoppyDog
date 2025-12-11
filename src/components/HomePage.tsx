import heroImage from '../assets/hero.png';
import mainLogo from '../assets/hoppy-dog-logo.jpg';
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
      <section className="py-20 bg-gray-850">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">We're Looking for Space</h2>
            <div className="bg-gray-800 p-10 rounded-lg border-2 border-amber-600/30">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                The Hoppy Dog is searching for the perfect commercial location to bring our wicked good dog park and craft brewery concept to life!
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We're looking for a warehouse-style space that's approximately 3,000-6,000 square feet. Know of a property that could be perfect for us?
              </p>
              <div className="bg-gray-900 p-6 rounded-lg mb-6">
                <p className="text-amber-400 font-semibold mb-2">
                  If you know of a space for lease, we'd love to hear from you!
                </p>
                <a
                  href="mailto:thehoppydogllc@gmail.com"
                  className="text-2xl text-white hover:text-amber-400 transition-colors duration-300 cursor-pointer"
                >
                  thehoppydogllc@gmail.com
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Help us create New Hampshire's premier indoor dog park and bar experience. Let's make this happen, Granite State style!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}