'use client';

import { Footer as GovUKFooter } from 'govuk-react';

import { AppVersion } from '@/components/layout/footer/AppVersion';
import { Licence } from '@/components/layout/footer/Licence';
import { MetaLinks } from '@/components/layout/footer/MetaLinks';

export const Footer = () => (
  <GovUKFooter
    copyright={{
      image: {
        height: 100,
        width: 125,
        src: `${process.env.deployPath}/copyright-logo.png`,
      },
      text: `Crown Copyright ${new Date().getFullYear()}`,
      link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
    }}
    licence={<Licence />}
    meta={
      <div className="pb-10">
        <MetaLinks />
        <AppVersion />
      </div>
    }
  />
);
