import Navigation from "@/components/navigation";
import NextAuthProvider from "./next-auth-provider";
import { ReactQueryProvider } from "./react-query-provider";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}

export const NextLayout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Navigation />
      {children}
    </div>
  );
};
