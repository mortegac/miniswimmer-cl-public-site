import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { type Metadata, type Viewport } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.miniswimmer.cl"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-K9KD3K78";

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <link rel="preload" href="/fonts/Satoshi-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Satoshi-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <GoogleTagManager />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col dark:bg-[#151F34]`}
      >
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
