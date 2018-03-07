import * as PlotlyIcons from 'plotly-icons';
import React from 'react';

import Head from 'next/head';

const Icons = Object.entries(PlotlyIcons).sort(function(a, b) {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
});
export default () => (
  <div
    style={{
      fontFamily: 'sans-serif',
      padding: '40px 0'
    }}
  >
    <Head>
      <title>Plotly Icons</title>
    </Head>
    <h1
      style={{
        textAlign: 'center',
      }}
    >
      Plotly Icons
    </h1>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 260px)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {Icons.map(([k, Component]) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '160px',
          }}
        >
          <div
            style={{
              padding: '20px',
              flexGrow: '1',
              width: '60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Component />
          </div>
          <div>{k}</div>
        </div>
      ))}
    </div>
  </div>
);
