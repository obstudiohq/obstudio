import { Fieldset } from '@obstudio/react/fieldset';
import { createMultipleTypes } from 'docs/src/utils/createTypes';

const { types, AdditionalTypes } = createMultipleTypes(import.meta.url, Fieldset);

export const TypesFieldset = types;
export const TypesFieldsetAdditional = AdditionalTypes;
