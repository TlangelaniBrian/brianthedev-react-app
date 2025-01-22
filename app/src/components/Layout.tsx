import React, { ReactNode, useState } from 'react';
import Navbar from './Navbar';
import SidePanel from './SidePanel';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <SidePanel isOpen={isSidePanelOpen} toggle={toggleSidePanel} />
        <main className="flex-1 overflow-y-auto p-4 mt-16 mb-16">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
