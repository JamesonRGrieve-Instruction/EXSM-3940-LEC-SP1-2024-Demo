'use client';
import React, { forwardRef } from 'react';
import NextLink from 'next/link';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
const NextLinkInjector = forwardRef(function LinkBehaviour(props, ref) {
  // @ts-expect-error https://stackoverflow.com/questions/66226576/using-the-material-ui-link-component-with-the-next-js-link-component
  return <NextLink ref={ref} {...props} />;
});

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiLink: {
            defaultProps: {
              component: NextLinkInjector,
            },
          },
        },
      })}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
