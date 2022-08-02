/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MetaTag({ title, description, keywords, imgsrc, url }) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} data-react-helmet="true" />
      <meta name="keywords" content={keywords} data-react-helmet="true" />

      <meta property="og:type" content="website" data-react-helmet="true" />
      <meta property="og:title" content={title} data-react-helmet="true" />
      <meta property="og:site_name" content={title} data-react-helmet="true" />
      <meta
        property="og:description"
        content={description}
        data-react-helmet="true"
      />
      <meta property="og:image" content={imgsrc} data-react-helmet="true" />
      <meta property="og:url" content={url} data-react-helmet="true"/> 

      <meta name="twitter:title" content={title} data-react-helmet="true" />
      <meta
        name="twitter:description"
        content={description}
        data-react-helmet="true"
      />
      <meta name="twitter:image" content={imgsrc} data-react-helmet="true" />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
