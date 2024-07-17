import Image from 'next/image';

import { ExternalLink } from '@/components/ExternalLink';

export const Licence = () => (
  <>
    <Image
      alt="Open Government Licence"
      height={36}
      priority={false}
      src={`${process.env.deployPath}/ogl.svg`}
      width={36}
    />

    <span>
      All content is available under the{' '}
      <ExternalLink url="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
        Open Government Licence v3.0
      </ExternalLink>
      , except where otherwise stated
    </span>
  </>
);
