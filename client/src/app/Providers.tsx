"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

export function Providers({ children }: { children: ReactNode }) {
  // This component wraps the application with the Redux store and React Query provider.
  // It also includes the React Query Devtools and Hook Form Devtools for debugging.
  // The `children` prop is the content of the application that will be rendered inside the providers.
  const { control } = useForm();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left" />
        <DevTool control={control} />
      </QueryClientProvider>
    </Provider>
  );
}
