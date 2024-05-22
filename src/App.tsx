import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";

import { Users } from "./components/Users/Users";

function App() {
  const queryClient = new QueryClient();

  const add = (...params: number[]) => params.reduce((acc, cur) => acc + cur);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Users />
        <>{console.log(`La somme des parametres vaut : ${add(1, 4, 6)}`)}</>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
