import React from 'react';

import A from 'components/A';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <section>
        <p>This project is licensed under the MIT license..</p>
      </section>
      <section>
        <p>Made with love by <A href="https://twitter.com/mxstbr">Max Stoiber</A>.</p>
      </section>
    </Wrapper>
  );
}

export default Footer;
