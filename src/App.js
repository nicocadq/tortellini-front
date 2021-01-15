import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import theme from './theme';
import './App.css';

const Creator = lazy(() => import('./screens/Creator/index'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch>
            <Route path="/">
              <Creator />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
