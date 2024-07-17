'use client';

import { GridCol, GridRow, Heading, Paragraph } from 'govuk-react';

const NotFound = () => (
  <GridRow>
    <GridCol setWidth="two-thirds">
      <Heading id="main-content" margin={0} size="XLARGE">
        404 Page Not Found
      </Heading>

      <>
        <Paragraph>If you typed the web address, check it is correct.</Paragraph>
        <Paragraph>If you pasted the web address, check you copied the entire address.</Paragraph>
        <Paragraph>
          If the web address is correct or you selected a link or button, you can [contact
          us](/contactus) to receive support.
        </Paragraph>
      </>
    </GridCol>
  </GridRow>
);

export default NotFound;
