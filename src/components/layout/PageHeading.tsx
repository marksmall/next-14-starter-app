'use client';

import { ReactNode } from 'react';

import { Heading } from 'govuk-react';

type PageHeadingProps = {
  children: ReactNode;
};

export const PageHeading = ({ children }: PageHeadingProps) => {
  return <Heading>{children}</Heading>;
};
