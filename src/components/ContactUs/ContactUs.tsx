import React, { useEffect, useState } from 'react';
import DesktopVersion from './DesktopVersion';
import MobileVersion from './MobileVersion';

export default function ContactUs() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const breakpoint = 1024;

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!screenWidth) return null;

  return (
    <section id="contact-us" className="min-h-screen bg-white dark:bg-slate-700 dark:text-white pb-20">
      <h2 className="font-montserrat text-base uppercase w-fit mx-auto py-5 dark:text-white">
        Contact us
      </h2>
      {screenWidth < breakpoint ? <MobileVersion /> : <DesktopVersion />}
    </section>
  );
}
