import "@/styles/globals.css";
import "@/styles/satoshi.css";

import { Providers } from "@/app/(site)/providers";
import { HeaderWrapper } from "@/components/Header/HeaderWrapper";
import FooterWrapper from "@/components/Footer/FooterWrapper";
import NotFound from "@/components/404";

export default function NotFoundPage() {
  return (
    <Providers>
      <HeaderWrapper />
      <NotFound />
      <FooterWrapper />
    </Providers>
  );
}
