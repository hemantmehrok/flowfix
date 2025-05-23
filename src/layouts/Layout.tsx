import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnnouncementBanner from '../components/AnnouncementBanner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-matte-black">
      <AnnouncementBanner />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;