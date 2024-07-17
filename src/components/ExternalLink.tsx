import { ReactNode } from 'react';

import { Link } from 'govuk-react';

type ExternalLinkProps = {
  url: string;
  children: ReactNode;
};

export const ExternalLink = ({ url, children }: ExternalLinkProps) => (
  <Link
    className="cursor-pointer underline"
    href={url}
    rel="noopener noreferrer"
    style={{ color: '#505a5f' }}
    target="_blank"
  >
    {children}
  </Link>
);
