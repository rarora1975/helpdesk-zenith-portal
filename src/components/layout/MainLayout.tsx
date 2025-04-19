
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import NavBar from './NavBar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar />
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="container mx-auto py-6 px-4 md:px-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
