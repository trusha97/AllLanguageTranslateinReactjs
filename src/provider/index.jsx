import { Suspense, lazy } from "react";

// Lazy load the children components
const LazyRouter = lazy(() =>
  import("react-router-dom").then((module) => ({
    default: module.BrowserRouter,
  }))
);

const AppProvider = ({ children }) => {
  return (
    <Suspense>
      {/* Wrap lazy-loaded Router with Suspense */}
      <LazyRouter>{children}</LazyRouter>
    </Suspense>
  );
};

export default AppProvider;
