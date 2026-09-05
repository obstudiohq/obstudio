import { createLogOnce } from './createLogOnce';

export const warn = createLogOnce('warn', 'Obstudio');

export { reset } from './createLogOnce';
