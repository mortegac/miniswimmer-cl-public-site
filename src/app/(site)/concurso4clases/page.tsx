import { Metadata } from "next";
import Concurso4Clases from "@/components/Concurso4Clases";

export const metadata: Metadata = {
  title: "Ganaste 4 Clases Gratis - Miniswimmer",
  description: "Concurso Miniswimmer - Gana 4 clases gratis",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Concurso4ClasesPage() {
  return (
    <main>
      <Concurso4Clases />
    </main>
  );
}
