'use client';
import type * as React from 'react';
import { useIsoLayoutEffect } from '@obstudio/utils/useIsoLayoutEffect';
import { useObstudioId } from '../internals/useObstudioId';

export function useRegisteredLabelId(
  idProp: string | undefined,
  setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>,
): string | undefined {
  const id = useObstudioId(idProp);

  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId((currentId) => (currentId === id ? undefined : currentId));
    };
  }, [id, setLabelId]);

  return id;
}
