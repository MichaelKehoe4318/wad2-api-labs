import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LoginPage from "../../src/pages/loginPage";
import SignupPage from "../../src/pages/signupPage";
import TasksPage from "../../src/pages/tasksPage";
import StartPage from "../../src/pages/startPage";
import ProfilePage from "../../src/pages/profilePage";
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="container">
          <h1>Tasky</h1>
          <Routes>
            <Route path="/" element={< StartPage />} />
            <Route path="/login" element={< LoginPage />} />
            <Route path="/signup" element={< SignupPage />} />
            <Route path="/tasks" element={< TasksPage />} />
            <Route path="/profile" element={< ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
