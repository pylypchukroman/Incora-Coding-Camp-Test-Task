import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const StreamingServicePage = lazy(() =>
  import('../pages/StreamingServicePage/StreamingServicePage')
);
const SubscriptionPage = lazy(() =>
  import('../pages/SubscriptionPage/SubscriptionPage')
);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/streamingService">
            <StreamingServicePage />
          </Route>
          <Route exact path="/subscription">
            <SubscriptionPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
