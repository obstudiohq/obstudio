import { createDemoWithVariants } from 'docs/src/utils/createDemo';
import CssModules from './css-modules';

export const DemoPreventObstudioHandler = createDemoWithVariants(import.meta.url, { CssModules });
