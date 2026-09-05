'use client';
import * as React from 'react';
import { useIsoLayoutEffect } from '@obstudio/utils/useIsoLayoutEffect';
import { platform } from '@obstudio/utils/platform';
import { visuallyHidden } from '@obstudio/utils/visuallyHidden';

/**
 * @internal
 */
export const FocusGuard = React.forwardRef(function FocusGuard(
  props: React.ComponentPropsWithoutRef<'span'>,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  const [role, setRole] = React.useState<'button' | undefined>();

  useIsoLayoutEffect(() => {
    // Unlike NVDA and JAWS, VoiceOver's virtual cursor triggers `onFocus` as
    // it moves — but only on focusable/role-button elements through WebKit's
    // NSAccessibility path. Setting `role="button"` lets the focus trap catch
    // the cursor.
    if (platform.screenReader.voiceOver && platform.engine.webkit) {
      setRole('button');
    }
  }, []);

  const restProps = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
  };

  return (
    <span
      {...props}
      ref={ref}
      style={visuallyHidden}
      aria-hidden={role ? undefined : true}
      {...restProps}
      data-obstudio-focus-guard=""
    />
  );
});
