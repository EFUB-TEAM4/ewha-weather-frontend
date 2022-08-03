/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MetaTag({ title, description, keywords, imgsrc, url }) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta
        property="og:description"
        content={description}
        data-react-helmet="true"
      />
      <meta property="og:image" content={imgsrc} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
        data-react-helmet="true"
      />
      <meta name="twitter:image" content={imgsrc} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
