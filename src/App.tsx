import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="dashboard" lazy={() => import('@/pages/dashboard')} />
      <Route path="login" lazy={() => import('@/pages/login')} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
