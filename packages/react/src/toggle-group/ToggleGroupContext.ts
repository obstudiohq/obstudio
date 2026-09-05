'use client';
import * as React from 'react';
import type { ObstudioChangeEventDetails } from '../internals/createObstudioEventDetails';
import type { ObstudioEventReasons } from '../internals/reasons';

export interface ToggleGroupContext<Value> {
  value: readonly Value[];
  setGroupValue: (
    newValue: Value,
    nextPressed: boolean,
    eventDetails: ObstudioChangeEventDetails<ObstudioEventReasons['none']>,
  ) => void;
  disabled: boolean;
  /**
   * Indicates whether the value has been initialized via `value` or `defaultValue` props.
   * Used to determine if Toggle should warn users about data inconsistency problems.
   */
  isValueInitialized: boolean;
}

export const ToggleGroupContext = React.createContext<ToggleGroupContext<any> | undefined>(
  undefined,
);

export function useToggleGroupContext<Value>() {
  return React.useContext<ToggleGroupContext<Value> | undefined>(ToggleGroupContext);
}
