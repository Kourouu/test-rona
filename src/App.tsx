import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";

import { Users } from "./components/Users/Users";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Users />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
