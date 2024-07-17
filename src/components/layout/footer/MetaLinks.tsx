import { Footer } from 'govuk-react';

import { ExternalLink } from '@/components/ExternalLink';

const LINKS = [
  {
    label: 'Accessibility statement',
    url: 'https://environment.data.gov.uk/support/faqs/275810340/275810354',
  },
  {
    label: 'Cookie Policy',
    url: 'https://environment.data.gov.uk/help/cookies',
  },
  {
    label: 'Terms and Conditions',
    url: 'https://environment.data.gov.uk/support/faqs/275811163/275811177',
  },
  {
    label: 'Privacy',
    url: 'https://environment.data.gov.uk/support/faqs/275811163/275811229',
  },
  {
    label: 'Contact Us',
    url: 'https://environment.data.gov.uk/support',
  },
];

export const MetaLinks = () => (
  <Footer.MetaLinks heading="Support Links">
    {LINKS.map((link) => (
      <ExternalLink key={link.label} url={link.url}>
        {link.label}
      </ExternalLink>
    ))}
  </Footer.MetaLinks>
);
