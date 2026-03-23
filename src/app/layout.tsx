import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Conecta Marceneiro | Marcenaria de Qualidade na Palma da Mão",
  description:
    "A plataforma que conecta clientes exigentes aos melhores marceneiros verificados do Brasil. Orçamentos online, chat em tempo real, pagamento seguro e acompanhamento do serviço. Uma iniciativa M&F Planejados.",
  keywords: "marceneiro, móveis planejados, marcenaria, orçamento online, móveis sob medida",
  openGraph: {
    title: "Conecta Marceneiro",
    description: "O marceneiro certo, na hora certa. Profissionais verificados, pagamento seguro.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
