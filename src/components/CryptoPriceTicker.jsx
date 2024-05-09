'use client';
import React from 'react';
import useSWR, { mutate } from 'swr';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
export default function CryptoPriceTicker({ assetName }) {
  const { data, error } = useSWR(
    `assets/${assetName}`,
    async () => {
      return (await axios.get(`https://api.coincap.io/v2/assets/${assetName}`)).data.data;
      // One of the .data is to pull the axios response body out, the other is because this particular API nests the data in a "data" object.
    },
    {
      revalidateOnFocus: false,
      revalidateOnMount: false,
      fallbackData: {
        symbol: 'Asset',
        priceUsd: 0,
      },
    },
  );
  return (
    <>
      <Typography variant='h1'>
        1 {data.symbol} = ${Number(data.priceUsd).toFixed(2)} USD
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
