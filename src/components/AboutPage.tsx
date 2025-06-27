import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users, Shield, Award } from 'lucide-react';
import founderImage from '../assets/dog-park.jpeg';
import sarahImage from '../assets/j-t-d.jpeg';
import storyImage from '../assets/dog-park.jpeg';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-20">
        {/* String Lights Effect */}
        <div className="absolute top-0 left-0 w-full h-2">
          <div className="flex justify-between items-center h-full px-4">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-amber-400 shadow-lg animate-pulse"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2.5s'
                }}
              />
            ))}
          </div>
        </div>

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
              <h2 className="text-4xl font-bold text-white mb-8">Our New Hampshire Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  The Hoppy Dog was born from a wicked simple observation: New Hampshire dog owners needed a place where they could enjoy quality time while their pets socialized safely, especially during those brutal North Country winters. Founded in 2023, we transformed a historic 1890s textile mill in Manchester's Millyard District into something completely unique.
                </p>
                <p>
                  Our founder, Jim Robinson, is a lifelong Granite Stater and dog lover who saw an opportunity to create a space that serves both the four-legged and two-legged members of our community. After traveling around New England visiting dog parks from the White Mountains to Cape Cod, he realized there was a gap in the market for a premium indoor experience right here in the "Live Free or Die" state.
                </p>
                <p>
                  We preserved the mill's industrial character - those gorgeous exposed brick walls, original steel beams from the 1800s, and concrete floors that have seen generations of New Hampshire workers. The result is a space that feels authentically Granite State: rugged, welcoming, and built to last through any season Mother Nature throws at us.
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
              <h3 className="text-2xl font-bold text-white mb-4">Wicked Quality</h3>
              <p className="text-gray-300 leading-relaxed">
                Offering premium facilities, locally-sourced craft beverages, and service that exceeds expectations - because Granite Staters deserve the best.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">All Are Welcome</h3>
              <p className="text-gray-300 leading-relaxed">
                Welcoming dogs of all sizes, breeds, and personalities in a judgment-free environment. True to the NH motto: "Live Free or Die!"
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
              The passionate New Englanders behind The Hoppy Dog experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center">
              <img
                src={founderImage}
                alt="Jim Robinson - Founder"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Jim Robinson</h3>
              <p className="text-amber-400 mb-4">Founder &amp; Head Brew Enthusiast</p>
              <p className="text-gray-300 leading-relaxed">
                Born and raised in Concord, NH, Jim's passion for craft beer and love for dogs inspired The Hoppy Dog. He ensures every visit is wicked memorable, often found sampling the latest local brews and chatting with regulars about their pups.
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
              <h3 className="text-2xl font-bold text-white mb-2">Alex Chen</h3>
              <p className="text-amber-400 mb-4">Tapmaster &amp; Local Brew Curator</p>
              <p className="text-gray-300 leading-relaxed">
                Award-winning bartender who fell in love with New Hampshire's craft beer scene. Alex curates our wicked good selection featuring local favorites like Smuttynose, White Birch, and Stoneface Brewing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Pack?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of canine fun and wicked good craft beverages in our authentic mill setting. Your dog will love the space, and you'll love the atmosphere - guaranteed to be better than a day at Hampton Beach!
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
            Come Visit Us in the Queen City!
          </button>
        </div>
      </section>
    </div>
  );
}