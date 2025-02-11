'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  console.log('loading...');
  ReactDOM.preload('src/app/css/pico.fuchsia.min.css', { as: 'style' });

  return null;
}
