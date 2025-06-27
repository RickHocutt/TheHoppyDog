import { MapPin, Phone, Mail, Clock, Users, Car } from 'lucide-react';
import { Map } from './Map';

export function ContactPage() {
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
              Come Visit <span className="text-amber-400">The Hoppy Dog</span>
            </h1>
            <p className="text-4xl text-gray-300 leading-relaxed">
              Coming Soon!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Drop Us a Line</h2>
              <p className="text-xl text-gray-300">
                Questions? We'd love to hear from you!
              </p>
            </div>

            <form className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    placeholder="What should we call you?"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white mb-2">Your Dog's Name (Optional)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                  placeholder="We love hearing about your furry friends!"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-500 focus:outline-none resize-none"
                  placeholder="Tell us what's on your mind! Have questions? We're all ears."
                ></textarea>
              </div>

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}