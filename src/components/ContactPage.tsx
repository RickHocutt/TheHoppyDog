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
            <p className="text-xl text-gray-300 leading-relaxed">
              Located in Manchester's historic Millyard District - we're wicked easy to find and even easier to love!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-850">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300">
              Questions? Want to plan a visit? Just want to chat about your pup? We're here for you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center">
              <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold">425 Mill Street</p>
                <p>Manchester, NH 03101</p>
                <p className="text-sm text-amber-400 mt-2">
                  Right in the heart of the Queen City's Millyard District
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center">
              <Phone className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-2xl font-bold text-amber-400">(603) 555-HOPPY</p>
                <p className="text-sm">That's (603) 555-4677</p>
                <p className="text-sm text-amber-400 mt-2">
                  New Hampshire proud - no sales tax on your fun!
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 text-center">
              <Mail className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
              <div className="space-y-2 text-gray-300">
                <p>hello@thehoppydog.com</p>
                <p className="text-sm">We typically respond faster than a husky in fresh snow!</p>
                <p className="text-sm text-amber-400 mt-2">
                  Wicked quick response times
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Info Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Hours &amp; Info</h2>
              
              <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 mb-8">
                <Clock className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-6">Open Every Day</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Thursday:</span>
                    <span className="text-amber-400">3:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday:</span>
                    <span className="text-amber-400">3:00 PM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-amber-400">12:00 PM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-amber-400">12:00 PM - 8:00 PM</span>
                  </div>
                </div>
                <p className="text-sm text-amber-400 mt-4">
                  Extended weekend hours because we know how Granite Staters like to unwind!
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
                <Users className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">What to Bring</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Current vaccination records (we're strict about this!)</li>
                  <li>• Leash for entry and exit</li>
                  <li>• Valid ID if you plan to enjoy our wicked good brews</li>
                  <li>• Your sense of fun and New England spirit!</li>
                </ul>
                <p className="text-amber-400 mt-4 text-sm">
                  First-timers get a tour and introduction to our pack!
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Getting Here</h2>
              
              <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20 mb-8">
                <Car className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Parking &amp; Directions</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">From I-93 North/South:</strong><br />
                    Take Exit 6 (Elm Street), turn toward downtown. Follow Elm Street to Mill Street, turn right. We're in the big brick building - you can't miss us!
                  </p>
                  <p>
                    <strong className="text-white">From Route 101:</strong><br />
                    Take the Queen City Avenue exit, follow signs to downtown Manchester. Turn onto Mill Street - we're right there in the Millyard.
                  </p>
                  <p className="text-amber-400">
                    <strong>Free parking available!</strong> No meters, no hassle - just park and play.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
                <h3 className="text-2xl font-bold text-white mb-4">Public Transit</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Manchester Transit Authority (MTA) buses stop nearby</p>
                  <p>Routes 1, 5, and 9 all serve the Millyard District</p>
                  <p className="text-amber-400 text-sm">
                    Check MTA schedules - we're wicked accessible by bus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-850">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Find Us in Manchester</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the historic Millyard District, we're proud to call New Hampshire's largest city home. 
              Come see what makes the Queen City special!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Map />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Drop Us a Line</h2>
              <p className="text-xl text-gray-300">
                Questions about bringing your pup? Want to plan a private event? We'd love to hear from you!
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
                  placeholder="Tell us what's on your mind! Planning a visit? Have questions? We're all ears."
                ></textarea>
              </div>

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                Send Message - We'll Get Back to You Wicked Quick!
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-850">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              The answers to what most Granite Staters want to know
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
              <h3 className="text-xl font-bold text-white mb-4">Do I need to make a reservation?</h3>
              <p className="text-gray-300">
                Nope! We're walk-in friendly, just like a good New England diner. However, we do recommend calling ahead during peak times (Friday/Saturday nights) or if you're bringing a large group.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
              <h3 className="text-xl font-bold text-white mb-4">What if my dog doesn't play well with others?</h3>
              <p className="text-gray-300">
                No worries! We have separate areas for different dog sizes and temperaments. Our trained staff can help assess the best space for your pup. We're all about making sure every dog has a wicked good time safely.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
              <h3 className="text-xl font-bold text-white mb-4">Can I bring my kids?</h3>
              <p className="text-gray-300">
                Absolutely! We're a family-friendly establishment. Kids love watching the dogs play, and we have non-alcoholic beverages including local sodas and hot chocolate (perfect after playing in the New Hampshire snow!).
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-amber-600/20">
              <h3 className="text-xl font-bold text-white mb-4">Do you really have no sales tax on drinks?</h3>
              <p className="text-gray-300">
                You bet! One of the perks of being in the "Live Free or Die" state. No sales tax means more money in your pocket for treats for your four-legged friend!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}