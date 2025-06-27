import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users, Shield, Award } from 'lucide-react';
import founderImage from '../assets/j-t-d.jpeg';
import sarahImage from '../assets/j-t-d.jpeg';
import storyImage from '../assets/dog-park.jpeg';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-amber-400">The Hoppy Dog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Born and raised in the Granite State, we're more than just a dog park - we're a community where New Hampshire dogs and their humans can socialize, relax, and create wicked good memories in our unique mill-inspired setting.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-850">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  The Hoppy Dog was born from a simple observation: New Hampshire dog owners needed a place where they could enjoy quality time while their pets socialized safely, especially during those brutal North Country winters.
                </p>
                <p>
                  Our founders, Jim and Theresa Robinson, lifelong Granite Staters and dog lovers who saw an opportunity to create a space that serves both the four-legged and two-legged members of our community. After traveling around visiting dog parks, they realized there was a gap in the market for a premium indoor experience right here in the "Live Free or Die" state.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={storyImage}
                alt="Customers enjoying drinks with their dog at The Hoppy Dog"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission &amp; Granite State Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to creating a safe, fun, and inclusive environment where dogs and their families can thrive together - the New Hampshire way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
              <p className="text-gray-300 leading-relaxed">
                Building connections between dogs and their owners through shared experiences and good old-fashioned New England neighborliness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safety First</h3>
              <p className="text-gray-300 leading-relaxed">
                Maintaining the highest standards of cleanliness, security, and health protocols. We take safety as seriously as a New Hampshire winter!
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality</h3>
              <p className="text-gray-300 leading-relaxed">
                Offering premium facilities, locally-sourced craft beverages, and service that exceeds expectations - because Granite Staters deserve the best.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Inclusion</h3>
              <p className="text-gray-300 leading-relaxed">
                Welcoming dogs of all sizes, breeds, and personalities in a judgment-free environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-850">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Granite State Team</h2>
            <p className="text-xl text-gray-300">
              The passionate dog lovers behind The Hoppy Dog experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center">
              <img
                src={founderImage}
                alt="Jim Robinson - Founder"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Jim & Theresa Robinson</h3>
              <p className="text-amber-400 mb-4">Founder &amp; Head Brew Enthusiast</p>
              <p className="text-gray-300 leading-relaxed">
                Born and raised in NH, Jim's passion for craft beer and love for dogs inspired The Hoppy Dog. Jim & Theresa ensure every visit is wicked memorable, often found sampling the latest local brews and chatting with regulars about their pups.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center">
              <img
                src={sarahImage}
                alt="Sarah Johnson - Co-Founder"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Sarah Johnson</h3>
              <p className="text-amber-400 mb-4">Co-Founder &amp; Chief Dog Whisperer</p>
              <p className="text-gray-300 leading-relaxed">
                A UNH graduate and certified dog trainer, Sarah moved to Manchester from Portsmouth. She oversees all safety protocols and ensures our furry guests have the best experience possible in true Granite State fashion.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Alex Chen - Bar Manager"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Parker Robinson</h3>
              <p className="text-amber-400 mb-4">Tapmaster &amp; Local Brew Curator</p>
              <p className="text-gray-300 leading-relaxed">
                Jim and Theresa's son who fell in love with New Hampshire's craft beer scene. Parker curates our wicked good selection featuring local favorites like Smuttynose, White Birch, and Stoneface Brewing.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}