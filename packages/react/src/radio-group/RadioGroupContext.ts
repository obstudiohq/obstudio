'use client';
import * as React from 'react';
import type { UseFieldValidationReturnValue } from '../field/root/useFieldValidation';
import type { ObstudioChangeEventDetails } from '../internals/createObstudioEventDetails';
import type { ObstudioEventReasons } from '../internals/reasons';

export interface RadioGroupContext<Value> {
  disabled: boolean | undefined;
  readOnly: boolean | undefined;
  required: boolean | undefined;
  form: string | undefined;
  name: string | undefined;
  checkedValue: Value | undefined;
  setCheckedValue: (
    value: Value,
    eventDetails: ObstudioChangeEventDetails<ObstudioEventReasons['none']>,
  ) => void;
  touched: boolean;
  setTouched: React.Dispatch<React.SetStateAction<boolean>>;
  validation?: UseFieldValidationReturnValue | undefined;
  registerInputRef: (element: HTMLInputElement | null) => void;
}

export const RadioGroupContext = React.createContext<RadioGroupContext<any> | undefined>(undefined);

export function useRadioGroupContext() {
  return React.useContext(RadioGroupContext);
}
