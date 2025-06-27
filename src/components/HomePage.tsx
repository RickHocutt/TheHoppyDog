import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Clock, Users, Shield, Award, Heart } from 'lucide-react';
import { Map } from './Map';
import heroImage from '../assets/hero.avif';
import interiorImage from '../assets/dog-park.jpeg';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl">
            Welcome to <span className="text-amber-400">The Hoppy Dog</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg">
            New Hampshire's wicked good indoor dog park &amp; craft brewery
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where your four-legged best friends can run free while you sample our wicked awesome selection of local craft brews in our converted mill warehouse. Live Free or Die... and drink good beer!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 hover:scale-105 cursor-pointer">
              Plan Your Visit
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-2xl cursor-pointer">
              View Our Brews
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-850">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Why Granite Staters Love Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've got everything you need for a wicked fun day out with your pup in the heart of New Hampshire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center hover:border-amber-500/40 transition-all duration-300">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safe Socialization</h3>
              <p className="text-gray-300 leading-relaxed">
                Your pups can make new friends in our carefully monitored play areas while you relax with a cold one. No stress, all fun!
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center hover:border-amber-500/40 transition-all duration-300">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Wicked Good Brews</h3>
              <p className="text-gray-300 leading-relaxed">
                Featuring the best craft beers from across New England, plus local NH favorites. IPA, stouts, and seasonal selections that'll knock your socks off!
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center hover:border-amber-500/40 transition-all duration-300">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Year-Round Fun</h3>
              <p className="text-gray-300 leading-relaxed">
                Beat those brutal NH winters! Our heated indoor space means your dogs can play even when it's colder than a witch's... well, you know.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center hover:border-amber-500/40 transition-all duration-300">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Family Atmosphere</h3>
              <p className="text-gray-300 leading-relaxed">
                From tiny Chihuahuas to gentle giants, all pups are welcome! Bring the whole family for a wicked good time in true Granite State style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">The Granite State's Premier Dog Park Experience</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Housed in a beautifully restored 1890s textile mill, The Hoppy Dog brings together the best of New Hampshire's industrial heritage with modern dog park innovation. We're talking exposed brick walls, original steel beams, and that authentic mill-town character you can't fake.
                </p>
                <p>
                  Our climate-controlled space means your pups can play comfortably whether it's mud season, peak foliage, or a January blizzard. Plus, with our wicked extensive beer selection featuring local breweries like Smuttynose, Stoneface, and White Birch, you'll never go thirsty.
                </p>
                <p>
                  And hey, being in the "Live Free or Die" state means no sales tax on your drinks! More money for treats for your furry friends.
                </p>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src={interiorImage}
                alt="The Hoppy Dog interior showing colorful play equipment, mural wall, and dogs enjoying the space"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-20 bg-gray-850">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Plan Your Visit</h2>
            <p className="text-xl text-gray-300">
              Everything you need to know for a perfect day at The Hoppy Dog
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
              <Clock className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Thursday: 3pm - 10pm</p>
                <p>Friday: 3pm - 12am</p>
                <p>Saturday: 12pm - 12am</p>
                <p>Sunday: 12pm - 8pm</p>
              </div>
              <p className="text-amber-400 mt-4 text-sm">
                Open late on weekends because we know how Granite Staters like to unwind!
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
              <MapPin className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
              <div className="space-y-2 text-gray-300">
                <p>425 Mill Street</p>
                <p>Manchester, NH 03101</p>
                <p>(603) 555-HOPPY</p>
              </div>
              <p className="text-amber-400 mt-4 text-sm">
                Right in the heart of the Millyard District - can't miss us!
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
              <Users className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">What to Bring</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Vaccination records</p>
                <p>• Leash for entry/exit</p>
                <p>• Your appetite for good beer!</p>
                <p>• Proof of age (21+ for alcohol)</p>
              </div>
              <p className="text-amber-400 mt-4 text-sm">
                First visit? We'll show you the ropes, New England style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Find Us in the Queen City</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in Manchester's historic Millyard District, we're easy to find and even easier to love.
              Plenty of parking and just a hop, skip, and a jump from downtown!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
}