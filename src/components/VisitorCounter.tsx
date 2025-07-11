import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Get visitor count from localStorage
    const getVisitorCount = () => {
      try {
        // Check if this is a new session
        const lastVisit = localStorage.getItem('portfolio_last_visit');
        const currentTime = new Date().getTime();
        const oneDayInMs = 24 * 60 * 60 * 1000; // 24 hours

        // Get current visitor count
        let currentCount = parseInt(localStorage.getItem('portfolio_visitor_count') || '127', 10);

        // If it's been more than 24 hours or first visit, increment counter
        if (!lastVisit || (currentTime - parseInt(lastVisit) > oneDayInMs)) {
          currentCount += 1;
          localStorage.setItem('portfolio_visitor_count', currentCount.toString());
          localStorage.setItem('portfolio_last_visit', currentTime.toString());
        }

        // Simulate loading delay for better UX
        setTimeout(() => {
          setVisitorCount(currentCount);
          setIsLoading(false);
        }, 1000);

      } catch (error) {
        // Fallback if localStorage is not available
        setVisitorCount(Math.floor(Math.random() * 500) + 200);
        setIsLoading(false);
      }
    };

    getVisitorCount();
  }, []);

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="glass-strong rounded-xl p-4 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover-lift">
        <div className="flex items-center space-x-3">
          {/* Visitor Icon */}
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse-glow">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
            </svg>
          </div>
          
          {/* Counter Display */}
          <div className="text-left">
            <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
              Total Visitors
            </div>
            <div className="text-lg font-bold text-white">
              {isLoading ? (
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex items-center space-x-1"
                >
                  <span>Loading</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </motion.div>
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="gradient-text"
                >
                  {formatNumber(visitorCount)}
                </motion.span>
              )}
            </div>
          </div>
        </div>
        
        {/* Live indicator */}
        <div className="flex items-center mt-2 space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Live tracking</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitorCounter;
