import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import interceptors from '@/services/interceptors'
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
