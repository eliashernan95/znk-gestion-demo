import { useState, useCallback } from 'react';
import LandingPage from './pages/LandingPage';
import DemoApp from './pages/DemoApp';

export default function App() {
  const [showDemo, setShowDemo] = useState(false);

  const enterDemo = useCallback(() => setShowDemo(true), []);
  const exitDemo = useCallback(() => setShowDemo(false), []);

  if (showDemo) {
    return <DemoApp onExit={exitDemo} />;
  }

  return <LandingPage onEnterDemo={enterDemo} />;
}
