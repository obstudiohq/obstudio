import { Slider } from '@obstudio/react/slider';
import { createMultipleTypes } from 'docs/src/utils/createTypes';

const { types, AdditionalTypes } = createMultipleTypes(import.meta.url, Slider);

export const TypesSlider = types;
export const TypesSliderAdditional = AdditionalTypes;
