import { useState, useEffect } from 'react';
import { DemoProvider } from '../components/demo/DemoStore';
import DemoLayout from '../components/demo/DemoLayout';
import DemoPOS from './demo/DemoPOS';
import DemoProducts from './demo/DemoProducts';
import DemoDashboard from './demo/DemoDashboard';

interface DemoAppProps {
  onExit: () => void;
}

export default function DemoApp({ onExit }: DemoAppProps) {
  const [activePage, setActivePage] = useState('pos');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case '1':
            e.preventDefault();
            setActivePage('pos');
            break;
          case '2':
            e.preventDefault();
            setActivePage('productos');
            break;
          case '3':
            e.preventDefault();
            setActivePage('dashboard');
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'pos':
        return <DemoPOS />;
      case 'productos':
        return <DemoProducts />;
      case 'dashboard':
        return <DemoDashboard />;
      default:
        return <DemoPOS />;
    }
  };

  return (
    <DemoProvider>
      <DemoLayout activePage={activePage} onNavigate={setActivePage} onExit={onExit}>
        {renderPage()}
      </DemoLayout>
    </DemoProvider>
  );
}
