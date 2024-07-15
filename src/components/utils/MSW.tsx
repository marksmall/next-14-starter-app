'use client';

import { useEffect } from 'react';

import { setupMsw } from '@/mocks';

/**
 * This component is used to setup MSW, if we are in a browser environment.
 * Event then, only if the Environment variable `NEXT_PUBLIC_MOCK_API` is
 * set, should it setup MSW, as MSW is only really to be used during
 * development.
 *
 * @return {*}
 */
export const MSW = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MOCK_API === 'enabled') {
      void setupMsw();
    }
  }, []);

  return null;
};
