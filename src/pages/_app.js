import { AuthModalProvider } from "@/context/AuthModalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

import Layout from "@/components/layout/Layout";
import interceptors from '@/services/interceptors'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthModalProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        <Toaster />
      </AuthModalProvider>
    </QueryClientProvider>
  );
}
