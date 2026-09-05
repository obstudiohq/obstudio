'use client';
import * as React from 'react';

export const ComboboxPortalContext = React.createContext<boolean | undefined>(undefined);

export function useComboboxPortalContext() {
  const context = React.useContext(ComboboxPortalContext);
  if (context === undefined) {
    throw new Error('Obstudio: <Combobox.Portal> is missing.');
  }
  return context;
}
