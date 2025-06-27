import { useState } from 'react';
import { Plus, Minus, MapPin, Navigation, Maximize2 } from 'lucide-react';

interface MapProps {
  address?: string;
  className?: string;
}

export function Map({ address = "123 Industrial Way, Downtown District", className = "" }: MapProps) {
  const [zoomLevel, setZoomLevel] = useState(15);
  const [mapStyle, setMapStyle] = useState<'roadmap' | 'satellite'>('roadmap');

  const zoomIn = () => {
    if (zoomLevel < 20) setZoomLevel(zoomLevel + 1);
  };

  const zoomOut = () => {
    if (zoomLevel > 10) setZoomLevel(zoomLevel - 1);
  };

  return (
    <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      {/* Map Container */}
      <div className="relative h-96 bg-gradient-to-br from-green-100 via-green-50 to-blue-50">
        {/* Street Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ filter: 'blur(0.5px)' }}>
          {/* Vertical Streets */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={`v-${i}`}
              x1={`${i * 16}%`}
              y1="0%"
              x2={`${i * 16}%`}
              y2="100%"
              stroke="#666"
              strokeWidth="1"
            />
          ))}
          {/* Horizontal Streets */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={`h-${i}`}
              x1="0%"
              y1={`${i * 20}%`}
              x2="100%"
              y2={`${i * 20}%`}
              stroke="#666"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Buildings/Blocks */}
        <div className="absolute inset-0">
          {/* Industrial blocks */}
          <div className="absolute top-8 left-12 w-16 h-12 bg-gray-300 rounded-sm opacity-40"></div>
          <div className="absolute top-20 left-32 w-20 h-16 bg-gray-400 rounded-sm opacity-40"></div>
          <div className="absolute top-32 left-8 w-24 h-20 bg-gray-300 rounded-sm opacity-40"></div>
          
          {/* The Hoppy Dog Location - Center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-6 bg-amber-600 rounded-sm shadow-lg"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <MapPin className="w-8 h-8 text-amber-600 drop-shadow-lg animate-bounce" />
            </div>
          </div>

          {/* Other buildings */}
          <div className="absolute bottom-16 right-12 w-18 h-14 bg-gray-300 rounded-sm opacity-40"></div>
          <div className="absolute bottom-8 right-32 w-16 h-12 bg-gray-400 rounded-sm opacity-40"></div>
        </div>

        {/* Street Names */}
        <div className="absolute top-4 left-20 text-xs text-gray-600 font-medium bg-white/80 px-2 py-1 rounded">
          Industrial Way
        </div>
        <div className="absolute bottom-12 right-4 text-xs text-gray-600 font-medium bg-white/80 px-2 py-1 rounded transform -rotate-90">
          Commerce St
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {/* Zoom Controls */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <button
              onClick={zoomIn}
              className="p-3 hover:bg-gray-100 transition-colors border-b border-gray-200"
              title="Zoom in"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={zoomOut}
              className="p-3 hover:bg-gray-100 transition-colors"
              title="Zoom out"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>

          {/* Fullscreen Button */}
          <button className="bg-white shadow-lg rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* My Location Button */}
          <button className="bg-white shadow-lg rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <Navigation className="w-4 h-4" />
          </button>
        </div>

        {/* Map Style Toggle */}
        <div className="absolute top-4 left-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <button
              onClick={() => setMapStyle('roadmap')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mapStyle === 'roadmap'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Map
            </button>
            <button
              onClick={() => setMapStyle('satellite')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mapStyle === 'satellite'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Satellite
            </button>
          </div>
        </div>

        {/* Zoom Level Indicator */}
        <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm text-gray-600">
          Zoom: {zoomLevel}
        </div>
      </div>

      {/* Location Info Card */}
      <div className="absolute bottom-4 right-4 bg-white shadow-2xl rounded-lg p-4 max-w-xs">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">🐕</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">The Hoppy Dog</h4>
            <p className="text-gray-600 text-xs leading-relaxed">{address}</p>
            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
              <span>4.9 ⭐</span>
              <span>Open until 10 PM</span>
            </div>
            <button className="mt-2 text-amber-600 text-xs font-medium hover:text-amber-700">
              Get Directions →
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white/70 px-2 rounded">
        © MapData 2025
      </div>
    </div>
  );
}