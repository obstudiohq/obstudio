import { EMPTY_OBJECT } from '@obstudio/utils/empty';
import { DISABLED_TRANSITIONS_STYLE } from './constants';
import type { TransitionStatus } from './useTransitionStatus';

export function getDisabledMountTransitionStyles(transitionStatus: TransitionStatus): {
  style?: React.CSSProperties | undefined;
} {
  return transitionStatus === 'starting' ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}
