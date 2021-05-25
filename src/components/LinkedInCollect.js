import React from 'react';

export default function LinkedInCollect({ conversionId, run }) {
  return (
    run && (
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        alt=""
        src={`https://px.ads.linkedin.com/collect/?pid=3582425&fmt=gif${
          conversionId && `conversionId=${conversionId}`
        }`}
      />
    )
  );
}
