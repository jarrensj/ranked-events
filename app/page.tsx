'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-24T22:59:00-08:00'); // August 24th, 2025 at 10:59 PM PST

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-700 via-cyan-700 via-teal-700 via-blue-800 to-indigo-800">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-white">
          Season Ends In 
        </h1>
        
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          <div className="bg-white/20 rounded-xl p-3 md:p-6 backdrop-blur-sm">
            <div className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2">
              {timeLeft.days}
            </div>
            <div className="text-[10px] md:text-base text-white/80 uppercase tracking-tight">
              <span className="md:hidden">Days</span>
              <span className="hidden md:inline">Days</span>
            </div>
          </div>
          
          <div className="bg-white/20 rounded-xl p-3 md:p-6 backdrop-blur-sm">
            <div className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-base text-white/80 uppercase tracking-tight">
              <span className="md:hidden">Hrs</span>
              <span className="hidden md:inline">Hours</span>
            </div>
          </div>
          
          <div className="bg-white/20 rounded-xl p-3 md:p-6 backdrop-blur-sm">
            <div className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-base text-white/80 uppercase tracking-tight">
              <span className="md:hidden">Min</span>
              <span className="hidden md:inline">Minutes</span>
            </div>
          </div>
          
          <div className="bg-white/20 rounded-xl p-3 md:p-6 backdrop-blur-sm">
            <div className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-base text-white/80 uppercase tracking-tight">
              <span className="md:hidden">Sec</span>
              <span className="hidden md:inline">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}