import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Conecta Marceneiro | Encontre Marceneiros Verificados Perto de Você",
  description:
    "Solicite móveis sob medida, compare orçamentos na plataforma e pague com segurança. Profissionais verificados, pagamento protegido e acompanhamento do serviço do início ao fim.",
  keywords:
    "marceneiro, móveis planejados, marcenaria, orçamento online, móveis sob medida, marceneiro perto de mim",
  openGraph: {
    title: "Conecta Marceneiro — O marceneiro certo, na hora certa",
    description:
      "Compare orçamentos, contrate com segurança e acompanhe seu projeto pelo app. Uma iniciativa M&F Planejados.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
