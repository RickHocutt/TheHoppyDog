export default function NeedSpace() {
  return (
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
  );
}