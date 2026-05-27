import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-right" />
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
