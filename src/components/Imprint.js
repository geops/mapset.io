import React from 'react';
import { FormattedMessage } from 'react-intl';

function Imprint() {
  return (
    <div>
      <p>
        <span>geOps AG </span>
        <span>Solothurnerstrasse 235</span>
        <span>CH-4600 Olten</span>
      </p>
      <p>
        <span>
          <FormattedMessage id="imprint.phone" /> +41 61 588 05 05
        </span>
        <span>
          <FormattedMessage id="imprint.mail" />
          &nbsp;
          <a
            href={'mailto:info@geops.ch'}
            style={{ color: 'rgb(110, 144, 166)' }}
          >
            info@geops.ch
          </a>
        </span>
      </p>
      <p>
        <span>
          <FormattedMessage id="imprint.managingDirector" />
        </span>
      </p>

      <p>
        <FormattedMessage id="imprint.commercialNumber" />
        <span>UID: CHE-455.829.547 VAT</span>
      </p>
      <br />
      <p>
        <span>
          <FormattedMessage id="imprint.disclaimer" />
        </span>
      </p>

      <p>
        <span>
          <FormattedMessage id="imprint.responsible" />
        </span>
      </p>
    </div>
  );
}

export default Imprint;
