'use client';
import * as React from 'react';

export const NavigationMenuPortalContext = React.createContext<boolean | undefined>(undefined);

export function useNavigationMenuPortalContext() {
  const value = React.useContext(NavigationMenuPortalContext);
  if (value === undefined) {
    throw new Error('Obstudio: <NavigationMenu.Portal> is missing.');
  }
  return value;
}
