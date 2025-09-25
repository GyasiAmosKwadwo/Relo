import { useState } from "react";
import Header from '../Header';

export default function HeaderExample() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="min-h-screen">
      <Header
        onSearch={(query) => console.log('Search:', query)}
        onMenuToggle={() => console.log('Menu toggled')}
        isDarkMode={isDarkMode}
        onThemeToggle={() => {
          setIsDarkMode(!isDarkMode);
          console.log('Theme toggled:', !isDarkMode);
        }}
      />
      <div className="p-8">
        <h1 className="text-2xl font-bold">Header Component Demo</h1>
        <p className="text-muted-foreground mt-2">Try the search, mobile menu, and theme toggle.</p>
      </div>
    </div>
  );
}