import { ScrollArea } from '@obstudio/react/scroll-area';
import { createMultipleTypes } from 'docs/src/utils/createTypes';

const { types, AdditionalTypes } = createMultipleTypes(import.meta.url, ScrollArea);

export const TypesScrollArea = types;
export const TypesScrollAreaAdditional = AdditionalTypes;
