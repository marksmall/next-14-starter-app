'use client';

import { ReactNode } from 'react';

import { SkipLink } from 'govuk-react';

import { Footer } from '@/components/layout/footer/Footer';
import { Axe } from '@/components/utils/Axe';
import { MSW } from '@/components/utils/MSW';
import { StyledComponentsRegistry } from '@/components/utils/StyledComponentsRegistry';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SkipLink href="#main-content">Skip to main content</SkipLink>

      <Axe />
      <MSW />

      <StyledComponentsRegistry>
        <main className="flex-grow p-4" id="main-content">
          {children}
        </main>

        <Footer />
      </StyledComponentsRegistry>
    </>
  );
};
