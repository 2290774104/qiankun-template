import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../views/root';
import NextPage from '../views/next';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root></Root>,
    },
    {
      path: '/nextPage',
      element: <NextPage></NextPage>,
    },
  ],
  {
    basename: import.meta.env.VITE_APP_BASE_URL,
  }
);

export default router;