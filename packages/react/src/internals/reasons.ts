import * as REASONS from './reason-parts';

export { REASONS };
export type ObstudioEventReasons = typeof REASONS;
export type ObstudioEventReason = ObstudioEventReasons[keyof ObstudioEventReasons];
