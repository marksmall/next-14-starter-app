import { ReactNode } from 'react';

import { Link as GovUKLink } from 'govuk-react';
import NextLink from 'next/link';

type LinkProps = {
  url: string;
  children: ReactNode;
};

export const Link = ({ url, children, ...props }: LinkProps) => (
  <GovUKLink
    as={NextLink as typeof GovUKLink}
    className="gap-2 underline"
    // NextLink is not compatible via TS as its href can accept an object.
    // It's otherwise suitable, so this is an acceptable workaround.
    href={url}
    style={{ color: '#008938' }}
    {...props}
  >
    {children}
  </GovUKLink>
);
