import React, { useState } from 'react';
import { Tool, PricingModel } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPricingStyle = (pricing: PricingModel) => {
    switch (pricing) {
      case PricingModel.Free: return 'bg-white text-black border-white';
      case PricingModel.Freemium: return 'bg-zinc-800 text-gray-200 border-zinc-700';
      case PricingModel.Paid: return 'bg-zinc-900 text-gray-400 border-zinc-800';
      case PricingModel.OpenSource: return 'bg-transparent text-white border-white/40 border-dashed';
      default: return 'bg-zinc-900 text-gray-500';
    }
  };

  const shareText = `Check out ${tool.name} on Curvexly! ${tool.description}`;
  
  const handleTwitterShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(tool.url)}`, '_blank');
  };

  const handleLinkedinShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(tool.url)}`, '_blank');
  };

  return (
    <div className={`group relative flex flex-col p-4 sm:p-5 bg-black border rounded-[2rem] transition-all duration-300 hover:shadow-[0_4px_30px_-5px_rgba(255,255,255,0.1)] overflow-hidden gap-0 ${isExpanded ? 'border-white/30 bg-zinc-950/50' : 'border-white/10'}`}>
      
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-4 sm:gap-6 z-10">
        
        {/* Logo Section */}
        <div className="flex-shrink-0 relative">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg shadow-black/50">
              <img src={tool.iconUrl} alt={tool.name} className="w-full h-full object-contain" />
          </div>
          {tool.popular && (
              <div className="absolute -top-1.5 -right-1.5 bg-white text-black text-[9px] font-black px-2 py-0.5 rounded-full border border-black shadow-sm tracking-tighter z-20">
                  HOT
              </div>
          )}
        </div>

        {/* Info Section */}
        <div className="flex-1 min-w-0 flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors truncate tracking-tight">
                  {tool.name}
              </h3>
          </div>
          <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed font-medium">
              {tool.description}
          </p>
          
          {/* Mobile Tags (Visible only on small screens when NOT expanded) */}
          {!isExpanded && (
            <div className="flex flex-wrap gap-2 mt-3 sm:hidden">
                <span className="text-[10px] font-semibold text-gray-500 bg-zinc-900 px-2.5 py-1 rounded-lg border border-white/5">
                    {tool.category}
                </span>
                <div className="flex items-center gap-2 ml-auto">
                    <button onClick={handleTwitterShare} className="text-gray-500 hover:text-white transition-colors p-1">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </button>
                    <button onClick={handleLinkedinShare} className="text-gray-500 hover:text-white transition-colors p-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                </div>
            </div>
          )}
        </div>

        {/* Meta/Action Section - Banner Style on Desktop */}
        <div className="w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 sm:gap-1.5 mt-2 sm:mt-0 pl-0 sm:pl-6 sm:border-l border-white/5 sm:min-w-[140px]">
          
          {/* Category Label (Desktop) */}
          <span className="hidden sm:inline-block text-[10px] font-bold tracking-wider text-zinc-600 uppercase mb-1">
              {tool.category}
          </span>

          {/* Pricing Label */}
          <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide border ${getPricingStyle(tool.pricing)}`}>
              {tool.pricing}
          </span>

          {/* Desktop Socials & Visit Group */}
          <div className="hidden sm:flex flex-col items-end gap-2 mt-2 w-full">
              <a 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-white group-hover:underline underline-offset-4 decoration-white/30"
              >
              Visit Site <span className="text-gray-500 group-hover:text-white transition-colors">↗</span>
              </a>
              
              <div className="flex items-center gap-3 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <button onClick={handleTwitterShare} className="text-zinc-600 hover:text-white transition-colors" title="Share on X">
                       <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </button>
                  <div className="w-px h-3 bg-white/10"></div>
                  <button onClick={handleLinkedinShare} className="text-zinc-600 hover:text-white transition-colors" title="Share on LinkedIn">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </button>
              </div>
          </div>
          
           {/* Expand Button (Desktop) */}
           <button 
             onClick={(e) => { e.preventDefault(); setIsExpanded(!isExpanded); }}
             className="hidden sm:flex items-center gap-1 text-[10px] uppercase font-bold text-gray-500 hover:text-white mt-2 transition-colors"
           >
             {isExpanded ? 'Less Info' : 'More Info'}
             <svg className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
           </button>

          {/* Mobile Visit & Expand */}
          <div className="sm:hidden flex items-center gap-3">
             <button 
                onClick={(e) => { e.preventDefault(); setIsExpanded(!isExpanded); }}
                className="p-2 text-gray-500 hover:text-white transition-colors"
             >
                <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
             </button>
             <a 
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white text-black shadow-lg shadow-white/10 active:scale-95 transition-transform"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
          </div>

        </div>
      </div>

      {/* Expanded Details Section */}
      <div 
        className={`grid transition-[grid-template-rows,padding,margin,opacity] duration-300 ease-in-out z-10 w-full ${
            isExpanded 
            ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/10' 
            : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-none'
        }`}
      >
        <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Description</h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-medium">
                        {tool.description}
                        <br /><br />
                        <span className="text-gray-500 text-xs">
                            Included in the Curvexly library as a top-tier {tool.category} solution. 
                            {tool.popular ? " Currently trending among our users." : ""}
                        </span>
                    </p>
                </div>
                
                <div className="flex flex-col justify-between">
                    <div>
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Tags & Features</h4>
                        <div className="flex flex-wrap gap-2">
                            {tool.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold text-gray-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/20 hover:text-white transition-colors cursor-default">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                             <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Share</h4>
                             <button onClick={handleTwitterShare} className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                             </button>
                             <button onClick={handleLinkedinShare} className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                             </button>
                         </div>
                         <button 
                            onClick={() => {
                                navigator.clipboard.writeText(tool.url);
                            }}
                            className="text-xs font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-1.5"
                         >
                             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                             Copy Link
                         </button>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ToolCard;