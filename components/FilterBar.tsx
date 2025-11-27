import React from 'react';
import { Category, PricingModel, FilterState } from '../types';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalCount: number;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters, totalCount }) => {
  return (
    <>
      {/* Mobile / Tablet Horizontal Scroll Filter */}
      <div className="lg:hidden w-full overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide mb-4 sticky top-16 z-30 bg-black/95 border-b border-white/10 backdrop-blur-xl pt-4">
        <div className="flex gap-2">
            <button
                onClick={() => setFilters(prev => ({ ...prev, category: 'All' }))}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border transition-all ${filters.category === 'All' ? 'bg-white text-black border-white' : 'bg-black text-gray-400 border-white/20'}`}
            >
                All Tools
            </button>
            {Object.values(Category).map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border transition-all ${filters.category === cat ? 'bg-white text-black border-white' : 'bg-black text-gray-400 border-white/20'}`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Desktop Sidebar Filter */}
      <div className="hidden lg:block w-64 flex-shrink-0 space-y-8 sticky top-24 h-fit">
        
        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pl-2">Pricing Model</h3>
          <div className="space-y-1">
            <button
              onClick={() => setFilters(prev => ({ ...prev, pricing: 'All' }))}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all border border-transparent ${filters.pricing === 'All' ? 'bg-white text-black font-semibold shadow-lg shadow-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              Any Price
            </button>
            {Object.values(PricingModel).map((price) => (
              <button
                key={price}
                onClick={() => setFilters(prev => ({ ...prev, pricing: price }))}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all border border-transparent ${filters.pricing === price ? 'bg-white text-black font-semibold shadow-lg shadow-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {price}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pl-2">Categories</h3>
          <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            <button
              onClick={() => setFilters(prev => ({ ...prev, category: 'All' }))}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex justify-between items-center border border-transparent ${filters.category === 'All' ? 'bg-white text-black font-semibold shadow-lg shadow-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <span>All Categories</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${filters.category === 'All' ? 'bg-black text-white' : 'bg-white/10 text-gray-500'}`}>{totalCount}</span>
            </button>
            {Object.values(Category).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all border border-transparent ${filters.category === cat ? 'bg-white text-black font-semibold shadow-lg shadow-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10">
          <div className="bg-zinc-900 rounded-xl p-5 border border-white/10">
              <h4 className="font-bold text-white text-sm mb-1">Nexus Digest</h4>
              <p className="text-xs text-gray-500 mb-3">Weekly top tools & prompts.</p>
              <input type="email" placeholder="you@example.com" className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-xs text-white mb-2 focus:outline-none focus:border-white/30 placeholder-zinc-700" />
              <button className="w-full bg-white text-black font-bold text-xs py-2 rounded-lg hover:bg-gray-200 transition-colors">Join Free</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default FilterBar;