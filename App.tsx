import React, { useState, useMemo } from 'react';
import { AI_TOOLS, APP_NAME, TAGLINE } from './constants';
import { FilterState, Tool } from './types';
import ToolCard from './components/ToolCard';
import FilterBar from './components/FilterBar';
import Concierge from './components/Concierge';

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'All',
    pricing: 'All',
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter((tool: Tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(filters.search.toLowerCase()) || 
                            tool.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                            tool.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));
      const matchesCategory = filters.category === 'All' || tool.category === filters.category;
      const matchesPricing = filters.pricing === 'All' || tool.pricing === filters.pricing;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-white selection:text-black">
      
      {/* Premium Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <span className="font-black text-black text-xl leading-none tracking-tighter">Cx</span>
                </div>
                <span className="font-bold text-xl tracking-tight text-white">{APP_NAME}</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-gray-500">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Library</a>
                <a href="#" className="hover:text-white transition-colors">Submit</a>
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]">Login</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50 relative"
            >
                {isMobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col items-center animate-in slide-in-from-top-10 duration-300">
          <div className="flex flex-col gap-8 text-center text-lg font-bold tracking-widest uppercase text-gray-400 w-full">
            <a href="#" className="text-white py-4 border-b border-white/10 hover:bg-white/5 rounded-xl transition-colors">Library</a>
            <a href="#" className="py-4 border-b border-white/10 hover:text-white hover:bg-white/5 rounded-xl transition-colors">Submit Tool</a>
            <a href="#" className="py-4 border-b border-white/10 hover:text-white hover:bg-white/5 rounded-xl transition-colors">About Curvexly</a>
            <a href="#" className="bg-white text-black py-4 rounded-2xl mt-4 hover:scale-[1.02] transition-transform">Login</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative pt-40 pb-20 z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-[10px] uppercase tracking-[0.25em] text-gray-300 shadow-xl">
            The Premium AI Library
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Intelligence.</span><br />
            Designed for You.
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-gray-400 mb-12 leading-relaxed">
            {TAGLINE} Discover the viral tools shaping the future of work, code, and art in a beautifully curated interface.
          </p>

          {/* Main Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
             <div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-[2rem] border border-white/20 flex items-center p-2.5 shadow-2xl shadow-black/50 transition-all focus-within:border-white/40 focus-within:bg-black">
                <div className="pl-4 pr-2 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input 
                    type="text" 
                    placeholder="Search tools (e.g., 'image generator', 'coding')..."
                    className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-zinc-600 px-2 py-3 text-base"
                    value={filters.search}
                    onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                />
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Code Assistant', 'Image Generator', 'Video', 'Productivity'].map(tag => (
                 <button 
                    key={tag}
                    onClick={() => setFilters(prev => ({ ...prev, search: tag }))} 
                    className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-400 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all hover:-translate-y-0.5"
                >
                    {tag}
                 </button>
             ))}
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10 relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar / Filter Bar */}
          <FilterBar filters={filters} setFilters={setFilters} totalCount={filteredTools.length} />

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-end mb-8 pb-4 border-b border-white/10">
                <h2 className="text-2xl font-bold text-white tracking-wide">
                    {filters.search ? `Search Results` : 'Trending Tools'}
                    <span className="ml-3 text-sm font-normal text-gray-500 align-middle">({filteredTools.length} available)</span>
                </h2>
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Live Updates
                </div>
            </div>
            
            {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {filteredTools.map(tool => (
                        <ToolCard key={tool.id} tool={tool} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-zinc-900/30 rounded-3xl border border-white/5 border-dashed">
                    <div className="text-5xl mb-6 grayscale opacity-30">🔍</div>
                    <h3 className="text-xl font-bold text-white mb-2">No matching tools</h3>
                    <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search query.</p>
                    <button 
                        onClick={() => setFilters({ search: '', category: 'All', pricing: 'All' })}
                        className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-20 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="font-black text-white text-xl leading-none">Cx</span>
            </div>
            <h3 className="text-white font-bold text-lg tracking-wide mb-2">{APP_NAME}</h3>
            <p className="text-gray-500 text-sm max-w-sm mb-8">
                The premier destination for discovering the next generation of AI technology.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
            <p className="text-zinc-800 text-xs mt-12 uppercase tracking-widest">
                © {new Date().getFullYear()} Curvexly Inc. All rights reserved.
            </p>
        </div>
      </footer>

      {/* Concierge Widget */}
      <Concierge />
      
    </div>
  );
};

export default App;