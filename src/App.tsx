import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Users } from "./components/Users/Users";

import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
