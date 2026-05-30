import { Metadata } from "next";
import Concurso from "@/components/Concurso";

export const metadata: Metadata = {
  title: "Concurso - Miniswimmer",
  description: "Concurso Miniswimmer - Gana una clase gratis",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ConcursoPage() {
  return (
    <main>
      <Concurso />
    </main>
  );
}
