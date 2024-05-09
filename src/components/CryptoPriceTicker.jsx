'use client';
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Typography } from '@mui/material';
export default function CryptoPriceTicker({ assetName }) {
  const { data, error } = useSWR(
    `assets/${assetName}`,
    async () => {
      return (await axios.get(`https://api.coincap.io/v2/assets/${assetName}`)).data.data;
      // One of the .data is to pull the axios response body out, the other is because this particular API nests the data in a "data" object.
    },
    {
      fallbackData: {
        symbol: 'Asset',
        priceUsd: 0,
      },
    },
  );
  console.log(error);
  return (
    <>
      <Typography variant='h1'>
        1 {data.symbol} = ${Number(data.priceUsd).toFixed(2)} USD
      </Typography>
      {error && (
        <Typography variant='body1' color='firebrick'>
          {error.response.status}: {JSON.stringify(error.response.data)}
        </Typography>
      )}
      ;
    </>
  );
}
