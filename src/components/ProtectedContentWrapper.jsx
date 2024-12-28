import React,{ useState, useEffect, } from "react";

// Content Protection Component
const ProtectedContentWrapper = ({ children }) => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'p' || e.key === 's')) ||
        (e.ctrlKey && e.shiftKey && e.key === 'i') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    // Disable text selection
    const handleSelect = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelect);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelect);
    };
  }, []);

  return (
    <div 
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
      }}
      onCopy={(e) => e.preventDefault()}
      onDrag={(e) => e.preventDefault()}
      onDrop={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
};

export default ProtectedContentWrapper