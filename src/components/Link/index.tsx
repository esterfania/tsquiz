import React from 'react';
import NextLink from 'next/link';

export default function LinkComponent({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
