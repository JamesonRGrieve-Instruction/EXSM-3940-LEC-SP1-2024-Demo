'use client';
import React from 'react';
import useSWR, { mutate } from 'swr';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
export default function CryptoPriceTicker({ assetName }) {
  const { data, error } = useSWR(
    `assets/${assetName}`,
    async () => {
      const toReturn = (await axios.get(`https://api.coincap.io/v2/assets/${assetName}`)).data.data;
      // One of the .data is to pull the axios response body out, the other is because this particular API nests the data in a "data" object.
      toReturn.priceUsd = Number(toReturn.priceUsd).toFixed(2);
      return toReturn;
    },
    {
      revalidateOnFocus: false, // When you click off the window and back.
      focusThrottleInterval: 5000, // Only focus revalidate once every X ms.
      revalidateOnMount: false, // When the component mounts.
      revalidateOnReconnect: false, // When you get a network connection back.
      // refreshInterval: 1000,
      refreshWhenHidden: false, // When minimized.
      refreshWhenOffline: false, // When no network (browser dependent).
      shouldRetryOnError: false, // Don't keep trying if an error is returned.
      errorRetryInterval: 3000, // How often to retry.
      errorRetryCount: 10, // Retry up to X times.
      dedupingInterval: 2000, // Requests are deduped if multiple on the same key in X ms (except mutate).
      loadingTimeout: 3000, // Timeout if no response.
      fallbackData: {
        symbol: 'Asset',
        priceUsd: 0,
      },
    },
  );
  return (
    <>
      <Typography variant='h1'>
        1 {data.symbol} = ${data.priceUsd} USD
      </Typography>
      <Button
        variant='contained'
        onClick={() => {
          mutate(`assets/${assetName}`);
        }}
      >
        Revalidate
      </Button>
      {error && (
        <Typography variant='body1' color='firebrick'>
          {error.response.status}: {JSON.stringify(error.response.data)}
        </Typography>
      )}
      ;
    </>
  );
}
