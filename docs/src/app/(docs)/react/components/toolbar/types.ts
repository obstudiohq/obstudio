import { Toolbar } from '@obstudio/react/toolbar';
import { createMultipleTypes } from 'docs/src/utils/createTypes';

const { types, AdditionalTypes } = createMultipleTypes(import.meta.url, Toolbar);

export const TypesToolbar = types;
export const TypesToolbarAdditional = AdditionalTypes;
