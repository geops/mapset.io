import React from "react";

function Imprint() {
  return (
    <div>
      <p>
        <span>geOps AG </span>
        <span>Solothurnerstrasse 235</span>
        <span>CH-4600 Olten</span>
      </p>
      <p>
        <span>phone +41 61 588 05 05</span>
        <span>
          mail&nbsp;
          <a
            href={"mailto:info@geops.ch"}
            style={{ color: "rgb(110, 144, 166)" }}
          >
            info@geops.ch
          </a>
        </span>
      </p>
      <p>
        <span>Managing Director, Chairman of the Board: Ulrich Müller-Ertle</span>
      </p>

      <p>
        <span>Commercial register no. CHE-455.829.547 Basel-Landschaft</span>
        <span>UID: CHE-455,829,547 VAT</span>
      </p>
      <br />
      <p>
        <span>
          Disclaimer: Despite careful control of the contents, we do not assume any liability for the contents of external links. The operators of the linked pages are solely responsible for the content of their pages.
        </span>
      </p>

      <p>
        <span>
          Responsible for content: Ulrich Müller-Ertle (addresses as above)
        </span>
      </p>
    </div>
  );
}

export default Imprint;
