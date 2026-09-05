'use client';
import * as React from 'react';
import { useIsoLayoutEffect } from '@obstudio/utils/useIsoLayoutEffect';
import { type FieldRootState } from '../root/FieldRoot';
import { useFieldRootContext } from '../../internals/field-root-context/FieldRootContext';
import { useLabelableContext } from '../../internals/labelable-provider/LabelableContext';
import { fieldValidityMapping } from '../../internals/field-constants/constants';
import type { ObstudioComponentProps } from '../../internals/types';
import { useObstudioId } from '../../internals/useObstudioId';
import { useRenderElement } from '../../internals/useRenderElement';
import { useFieldItemContext } from '../item/FieldItemContext';

/**
 * A paragraph with additional information about the field.
 * Renders a `<p>` element.
 *
 * Documentation: [Obstudio Field](https://obstudio.co/react/components/field)
 */
export const FieldDescription = React.forwardRef(function FieldDescription(
  componentProps: FieldDescription.Props,
  forwardedRef: React.ForwardedRef<HTMLParagraphElement>,
) {
  const { render, id: idProp, className, style, ...elementProps } = componentProps;

  const id = useObstudioId(idProp);

  const fieldRootContext = useFieldRootContext(false);
  const fieldItemContext = useFieldItemContext();
  const { setMessageIds } = useLabelableContext();

  const state: FieldDescriptionState = {
    ...fieldRootContext.state,
    disabled: fieldRootContext.disabled || fieldItemContext.disabled,
  };

  useIsoLayoutEffect(() => {
    if (!id) {
      return undefined;
    }

    setMessageIds((v) => v.concat(id));

    return () => {
      setMessageIds((v) => v.filter((item) => item !== id));
    };
  }, [id, setMessageIds]);

  const element = useRenderElement('p', componentProps, {
    ref: forwardedRef,
    state,
    props: [{ id }, elementProps],
    stateAttributesMapping: fieldValidityMapping,
  });

  return element;
});

export interface FieldDescriptionState extends FieldRootState {}

export interface FieldDescriptionProps extends ObstudioComponentProps<'p', FieldDescriptionState> {}

export namespace FieldDescription {
  export type State = FieldDescriptionState;
  export type Props = FieldDescriptionProps;
}
