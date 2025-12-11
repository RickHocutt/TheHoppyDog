import { Heart, Users, Shield, Award } from 'lucide-react';
import storyImage from '../assets/dog-park.jpeg';
import SetTitle from './SetTitle';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SetTitle title="About" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-amber-400">The Hoppy Dog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Born and raised in the Granite State, we're more than just a dog park - we're a community where New Hampshire dogs and their humans can socialize, relax, and create wicked good memories.
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
                  The Hoppy Dog was born from a simple observation: New Hampshire dog owners needed a place where they could enjoy quality time while their pets socialized safely, especially during those brutal New England winters.
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

    </div>
  );
}