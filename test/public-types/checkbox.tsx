import { Checkbox } from '@obstudio/react/checkbox';

export type CheckboxProps = Omit<Checkbox.Root.Props, 'children'> & {
  // Add an optional className to mirror original example's augmentation pattern.
  className?: string;
};
