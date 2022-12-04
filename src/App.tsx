import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
const Create = React.lazy(() => import("./components/Create"));


function App() {
  const queryClient = new QueryClient();

  return (
    <Suspense fallback={<p>Loading component...</p>}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/create" element={<Create />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
