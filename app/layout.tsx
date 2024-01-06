import FooterLayout from "@/components/FooterLayout";
import HeaderLayout from "@/components/HeaderLayout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";

const Layout = ({ children }: { children: any }) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <HeaderLayout />
          {children}
          <FooterLayout />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default Layout;
