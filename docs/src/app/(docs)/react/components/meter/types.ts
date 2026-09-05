import { Meter } from '@obstudio/react/meter';
import { createMultipleTypes } from 'docs/src/utils/createTypes';

const { types, AdditionalTypes } = createMultipleTypes(import.meta.url, Meter);

export const TypesMeter = types;
export const TypesMeterAdditional = AdditionalTypes;
