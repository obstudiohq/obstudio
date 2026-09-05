'use client';
import * as React from 'react';

export const MenuPortalContext = React.createContext<boolean | undefined>(undefined);

export function useMenuPortalContext() {
  const value = React.useContext(MenuPortalContext);
  if (value === undefined) {
    throw new Error('Obstudio: <Menu.Portal> is missing.');
  }
  return value;
}
