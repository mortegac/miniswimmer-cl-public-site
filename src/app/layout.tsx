import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GoogleTagManager from '@/components/GoogleTagManager';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const gtmId = "GTM-K9KD3K78";
  // const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <GoogleTagManager />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col dark:bg-[#151F34]`}>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
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