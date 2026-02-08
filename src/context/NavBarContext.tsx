import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { reactive_bar, REACTIVE_BAR_THRESHOLD_PX } from '../config';

type NavBarContextValue = {
  reactiveBar: boolean;
  navVisible: boolean;
};

const NavBarContext = createContext<NavBarContextValue | null>(null);

export function NavBarProvider({ children }: { children: React.ReactNode }) {
  const [navVisible, setNavVisible] = useState(true);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleHide = useCallback(() => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => setNavVisible(false), 0);
  }, []);

  const show = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setNavVisible(true);
  }, []);

  useEffect(() => {
    if (!reactive_bar) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= REACTIVE_BAR_THRESHOLD_PX) {
        show();
      } else {
        scheduleHide();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [show, scheduleHide]);

  const value: NavBarContextValue = {
    reactiveBar: reactive_bar,
    navVisible: reactive_bar ? navVisible : true,
  };

  return (
    <NavBarContext.Provider value={value}>
      {children}
    </NavBarContext.Provider>
  );
}

export function useNavBar(): NavBarContextValue {
  const ctx = useContext(NavBarContext);
  if (!ctx) {
    return {
      reactiveBar: false,
      navVisible: true,
    };
  }
  return ctx;
}
