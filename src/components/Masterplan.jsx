import React, { useState } from 'react';
import { Home, CheckCircle, XCircle } from 'lucide-react';
import masterplanimage from '../assets/images/Master Plan.jpg';

const MasterplanComponent = () => {
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Plot data with coordinates mapped to the actual image
  // Status: 'available' or 'sold' - Update these based on your actual availability
  const plots = [
    // Bottom row (01-05)
    { id: '01', x: 360, y: 685, width: 45, height: 50, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '02', x: 415, y: 685, width: 45, height: 50, status: 'sold', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '03', x: 470, y: 685, width: 45, height: 50, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '04', x: 525, y: 685, width: 45, height: 50, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '05', x: 305, y: 685, width: 45, height: 50, status: 'sold', price: '₹44.8L', area: '240 Sq.Yd' },
    
    // Row above (06-22)
    { id: '06', x: 250, y: 580, width: 45, height: 50, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '07', x: 305, y: 580, width: 45, height: 50, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '08', x: 360, y: 580, width: 45, height: 50, status: 'sold', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '09', x: 415, y: 580, width: 45, height: 50, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '10', x: 470, y: 580, width: 45, height: 50, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '11', x: 525, y: 580, width: 45, height: 50, status: 'sold', price: '₹45.5L', area: '242 Sq.Yd' },
    
    { id: '20', x: 595, y: 545, width: 40, height: 50, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '21', x: 645, y: 545, width: 40, height: 50, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '22', x: 695, y: 545, width: 40, height: 50, status: 'sold', price: '₹48.5L', area: '250 Sq.Yd' },
    
    // Middle sections (33-77)
    { id: '33', x: 115, y: 455, width: 40, height: 45, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '34', x: 165, y: 455, width: 40, height: 45, status: 'sold', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '35', x: 215, y: 455, width: 40, height: 45, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '36', x: 265, y: 455, width: 40, height: 45, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '37', x: 315, y: 455, width: 40, height: 45, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '38', x: 365, y: 455, width: 40, height: 45, status: 'sold', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '39', x: 415, y: 455, width: 40, height: 45, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '40', x: 465, y: 455, width: 40, height: 45, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '41', x: 515, y: 455, width: 40, height: 45, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '42', x: 565, y: 455, width: 40, height: 45, status: 'sold', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '43', x: 615, y: 455, width: 40, height: 45, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    
    { id: '44', x: 745, y: 455, width: 40, height: 45, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '45', x: 795, y: 455, width: 40, height: 45, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '46', x: 745, y: 390, width: 40, height: 45, status: 'sold', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '47', x: 795, y: 390, width: 40, height: 45, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    
    // Upper middle rows (50-77)
    { id: '50', x: 515, y: 390, width: 40, height: 45, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '51', x: 465, y: 390, width: 40, height: 45, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '52', x: 415, y: 390, width: 40, height: 45, status: 'sold', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '53', x: 365, y: 390, width: 40, height: 45, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '54', x: 315, y: 390, width: 40, height: 45, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '55', x: 265, y: 390, width: 40, height: 45, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '56', x: 215, y: 390, width: 40, height: 45, status: 'sold', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '57', x: 165, y: 390, width: 40, height: 45, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '58', x: 115, y: 390, width: 40, height: 45, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    
    { id: '70', x: 645, y: 295, width: 40, height: 45, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '71', x: 695, y: 295, width: 40, height: 45, status: 'sold', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '72', x: 745, y: 295, width: 40, height: 45, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '73', x: 795, y: 295, width: 40, height: 45, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '74', x: 845, y: 295, width: 40, height: 45, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '75', x: 895, y: 295, width: 40, height: 45, status: 'sold', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '76', x: 945, y: 295, width: 40, height: 45, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '77', x: 995, y: 295, width: 40, height: 45, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    
    // Upper rows (80-112)
    { id: '80', x: 645, y: 245, width: 40, height: 40, status: 'sold', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '81', x: 695, y: 245, width: 40, height: 40, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '82', x: 745, y: 245, width: 40, height: 40, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '83', x: 795, y: 245, width: 40, height: 40, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '84', x: 845, y: 245, width: 40, height: 40, status: 'sold', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '85', x: 895, y: 245, width: 40, height: 40, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    
    { id: '86', x: 115, y: 295, width: 40, height: 45, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '87', x: 165, y: 295, width: 40, height: 45, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '88', x: 215, y: 295, width: 40, height: 45, status: 'sold', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '89', x: 265, y: 295, width: 40, height: 45, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '90', x: 315, y: 295, width: 40, height: 45, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '91', x: 365, y: 295, width: 40, height: 45, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '92', x: 415, y: 295, width: 40, height: 45, status: 'sold', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '93', x: 465, y: 295, width: 40, height: 45, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '94', x: 515, y: 295, width: 40, height: 45, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    
    { id: '95', x: 115, y: 245, width: 40, height: 40, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '96', x: 165, y: 245, width: 40, height: 40, status: 'sold', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '97', x: 215, y: 245, width: 40, height: 40, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '98', x: 265, y: 245, width: 40, height: 40, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '99', x: 315, y: 245, width: 40, height: 40, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '100', x: 365, y: 245, width: 40, height: 40, status: 'sold', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '101', x: 415, y: 245, width: 40, height: 40, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    
    // Top row (102-112)
    { id: '102', x: 465, y: 185, width: 40, height: 40, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '103', x: 515, y: 185, width: 40, height: 40, status: 'available', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '104', x: 565, y: 185, width: 40, height: 40, status: 'sold', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '105', x: 615, y: 185, width: 40, height: 40, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '106', x: 665, y: 185, width: 40, height: 40, status: 'available', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '107', x: 715, y: 185, width: 40, height: 40, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
    { id: '108', x: 765, y: 185, width: 40, height: 40, status: 'sold', price: '₹44.8L', area: '240 Sq.Yd' },
    { id: '109', x: 815, y: 185, width: 40, height: 40, status: 'available', price: '₹45.5L', area: '242 Sq.Yd' },
    { id: '110', x: 865, y: 185, width: 40, height: 40, status: 'available', price: '₹46.2L', area: '245 Sq.Yd' },
    { id: '111', x: 915, y: 185, width: 40, height: 40, status: 'sold', price: '₹47.8L', area: '248 Sq.Yd' },
    { id: '112', x: 965, y: 185, width: 40, height: 40, status: 'available', price: '₹48.5L', area: '250 Sq.Yd' },
  ];

  const handleMouseMove = (e) => {
    if (hoveredPlot) {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg">
      <div className="mb-4">
        <h1 className="text-3xl font-medium text-slate-800 mb-2">Interactive Masterplan</h1>
        <p className="text-slate-600">Hover over any plot to see details and availability</p>
      </div>

      {/* Legend */}
      <div className="flex gap-6 mb-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-emerald-500 bg-opacity-60 rounded border-2 border-emerald-600"></div>
          <span className="text-sm font-medium text-slate-700">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-red-500 bg-opacity-60 rounded border-2 border-red-600"></div>
          <span className="text-sm font-medium text-slate-700">Sold</span>
        </div>
      </div>

      {/* Masterplan Container */}
      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border-2 border-slate-200">
        <div 
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredPlot(null)}
        >
          <img 
            src={masterplanimage}
            alt="Master Layout Plan"
            className="w-full h-auto"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800"%3E%3Crect fill="%23f1f5f9" width="1400" height="800"/%3E%3Ctext x="700" y="400" font-family="Arial" font-size="24" fill="%2394a3b8" text-anchor="middle"%3EMasterplan Image - Upload your image here%3C/text%3E%3C/svg%3E';
              setImageLoaded(true);
            }}
          />
          
          {/* Invisible SVG Overlay for interactive plots */}
          {imageLoaded && (
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 1400 800"
              preserveAspectRatio="xMidYMid meet"
            >
              {plots.map((plot) => (
                <rect
                  key={plot.id}
                  x={plot.x}
                  y={plot.y}
                  width={plot.width}
                  height={plot.height}
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="0"
                  className="cursor-pointer pointer-events-auto"
                  onMouseEnter={() => setHoveredPlot(plot)}
                />
              ))}
            </svg>
          )}

          {/* Popup Tooltip */}
          {hoveredPlot && (
            <div
              className="absolute bg-white rounded-lg shadow-2xl p-4 border-2 pointer-events-none z-20 animate-in fade-in duration-150"
              style={{
                left: `${Math.min(mousePos.x + 15, window.innerWidth - 250)}px`,
                top: `${Math.max(mousePos.y - 80, 10)}px`,
                borderColor: hoveredPlot.status === 'available' ? '#10b981' : '#ef4444',
                minWidth: '220px'
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-slate-600" />
                  <h3 className="font-bold text-slate-800">Plot #{hoveredPlot.id}</h3>
                </div>
                {hoveredPlot.status === 'available' ? (
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    hoveredPlot.status === 'available' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {hoveredPlot.status === 'available' ? 'AVAILABLE' : 'SOLD'}
                  </span>
                </div>
                
                <div className="pt-2 border-t border-slate-200 space-y-1">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Area:</span> {hoveredPlot.area}
                  </p>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Price:</span> {hoveredPlot.price}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <p className="text-sm text-slate-600">Total Plots</p>
          <p className="text-2xl font-bold text-slate-800">{plots.length}</p>
        </div>
        <div className="bg-emerald-50 p-4 rounded-lg shadow-sm border border-emerald-200">
          <p className="text-sm text-emerald-700">Available</p>
          <p className="text-2xl font-bold text-emerald-600">
            {plots.filter(p => p.status === 'available').length}
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg shadow-sm border border-red-200">
          <p className="text-sm text-red-700">Sold</p>
          <p className="text-2xl font-bold text-red-600">
            {plots.filter(p => p.status === 'sold').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasterplanComponent;




