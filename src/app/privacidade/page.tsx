import type { Metadata } from "next";
import Link from "next/link";
import { Hammer, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Política de Privacidade | Conecta Marceneiro",
    description: "Política de privacidade e proteção de dados pessoais do Conecta Marceneiro, em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="bg-red-600 p-1.5 rounded-lg">
                            <Hammer className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-black text-[15px] tracking-tight text-gray-900">Conecta</span>
                            <span className="font-black text-[15px] tracking-tight text-red-600">Marceneiro</span>
                        </div>
                    </Link>
                    <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Voltar ao site
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
                {/* Title */}
                <div className="mb-12">
                    <h1 className="text-4xl font-black text-gray-900 mb-3">Política de Privacidade</h1>
                    <p className="text-gray-500 text-sm">
                        Última atualização: 22 de março de 2026 · Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)
                    </p>
                </div>

                <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

                    {/* 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">1. Quem somos</h2>
                        <p>
                            O <strong>Conecta Marceneiro</strong> é uma plataforma digital operada pela <strong>M&F Planejados</strong>
                            , empresa com sede no Brasil. Somos o controlador dos dados pessoais coletados por meio do nosso aplicativo
                            mobile (iOS e Android) e site.
                        </p>
                        <p className="mt-3">
                            Para dúvidas sobre privacidade, entre em contato com nosso Encarregado de Proteção de Dados (DPO):{" "}
                            <a href="mailto:privacidade@conectamarceneiro.com.br" className="text-red-600 hover:underline font-medium">
                                privacidade@conectamarceneiro.com.br
                            </a>
                        </p>
                    </section>

                    {/* 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">2. Quais dados coletamos</h2>

                        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-5">2.1 Dados fornecidos por você</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Conta:</strong> nome completo, e-mail, telefone, senha (armazenada com hash seguro)</li>
                            <li><strong>Perfil:</strong> foto de avatar, data de nascimento, CPF/CNPJ</li>
                            <li><strong>Endereço:</strong> CEP, logradouro, cidade, estado (para serviços com localização)</li>
                            <li><strong>Serviços:</strong> descrição, categorias, fotos e detalhes dos projetos publicados</li>
                            <li><strong>Financeiro:</strong> dados de pagamento processados pela Asaas (não armazenamos dados de cartão — são tratados pela Asaas, PCI-DSS compliant)</li>
                        </ul>

                        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-5">2.2 Dados coletados automaticamente</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Localização:</strong> coordenadas GPS para exibir profissionais próximos (apenas com permissão)</li>
                            <li><strong>Dispositivo:</strong> modelo, sistema operacional, token de notificação push</li>
                            <li><strong>Uso:</strong> telas acessadas, horários de acesso, logs de erros</li>
                            <li><strong>Comunicação:</strong> mensagens trocadas no chat da plataforma</li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">3. Como usamos seus dados</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left p-3 font-bold text-gray-900 border border-gray-200 rounded-tl-lg">Finalidade</th>
                                        <th className="text-left p-3 font-bold text-gray-900 border border-gray-200">Base Legal (LGPD)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Criação e autenticação de conta", "Execução de contrato (Art. 7º, V)"],
                                        ["Conexão entre clientes e profissionais", "Execução de contrato (Art. 7º, V)"],
                                        ["Processamento de pagamentos e saques", "Execução de contrato (Art. 7º, V)"],
                                        ["Envio de notificações push (com permissão)", "Consentimento (Art. 7º, I)"],
                                        ["Envio de e-mails transacionais", "Execução de contrato (Art. 7º, V)"],
                                        ["Suporte ao usuário", "Legítimo interesse (Art. 7º, IX)"],
                                        ["Melhoria da plataforma e análise de uso", "Legítimo interesse (Art. 7º, IX)"],
                                        ["Cumprimento de obrigações legais", "Obrigação legal (Art. 7º, II)"],
                                    ].map(([finalidade, base], i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                            <td className="p-3 border border-gray-200">{finalidade}</td>
                                            <td className="p-3 border border-gray-200 text-gray-500">{base}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 4 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">4. Compartilhamento de dados</h2>
                        <p className="mb-4">Não vendemos seus dados pessoais. Compartilhamos apenas quando necessário para a prestação do serviço:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Asaas Pagamentos:</strong> processamento de cobranças via PIX e cartão. Os dados financeiros são
                                regidos pela política de privacidade da Asaas.
                            </li>
                            <li>
                                <strong>Amazon Web Services (AWS S3):</strong> armazenamento seguro de fotos e arquivos enviados
                                pelos usuários.
                            </li>
                            <li>
                                <strong>Expo Push Notifications:</strong> envio de notificações push para dispositivos iOS e Android.
                            </li>
                            <li>
                                <strong>Entre usuários da plataforma:</strong> nome, foto e cidade são visíveis para facilitar a
                                contratação. Dados sensíveis (CPF, e-mail completo, telefone) não são expostos publicamente.
                            </li>
                            <li>
                                <strong>Autoridades públicas:</strong> quando exigido por lei, ordem judicial ou para defesa de direitos.
                            </li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">5. Por quanto tempo guardamos</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Dados de conta:</strong> enquanto a conta estiver ativa + 5 anos após exclusão (obrigação fiscal e legal)</li>
                            <li><strong>Mensagens de chat:</strong> 2 anos</li>
                            <li><strong>Logs de acesso:</strong> 6 meses (Marco Civil da Internet)</li>
                            <li><strong>Dados financeiros:</strong> 5 anos (legislação tributária)</li>
                            <li><strong>Tokens de notificação:</strong> removidos imediatamente ao fazer logout ou desinstalar</li>
                        </ul>
                    </section>

                    {/* 6 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">6. Seus direitos (LGPD — Art. 18)</h2>
                        <p className="mb-4">Como titular de dados pessoais, você tem direito a:</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                ["Confirmação", "Saber se tratamos seus dados"],
                                ["Acesso", "Obter uma cópia dos seus dados"],
                                ["Correção", "Atualizar dados incompletos ou incorretos"],
                                ["Anonimização", "Solicitar que seus dados sejam anonimizados"],
                                ["Portabilidade", "Receber seus dados em formato estruturado"],
                                ["Eliminação", "Excluir dados desnecessários"],
                                ["Informação", "Saber com quem compartilhamos seus dados"],
                                ["Revogação", "Retirar o consentimento a qualquer momento"],
                            ].map(([titulo, desc]) => (
                                <div key={titulo} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <p className="font-bold text-gray-900 text-sm">{titulo}</p>
                                    <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4">
                            Para exercer qualquer direito, envie e-mail para{" "}
                            <a href="mailto:privacidade@conectamarceneiro.com.br" className="text-red-600 hover:underline font-medium">
                                privacidade@conectamarceneiro.com.br
                            </a>
                            . Respondemos em até 15 dias úteis.
                        </p>
                    </section>

                    {/* 7 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">7. Segurança</h2>
                        <p>
                            Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-3">
                            <li>Comunicação criptografada via HTTPS/TLS</li>
                            <li>Senhas armazenadas com hash bcrypt</li>
                            <li>Autenticação JWT com tokens de curta duração</li>
                            <li>Acesso restrito aos dados por função (role-based access)</li>
                            <li>Armazenamento de arquivos em ambiente isolado (AWS S3 privado)</li>
                        </ul>
                        <p className="mt-3">
                            Em caso de incidente de segurança que possa afetar seus dados, você será notificado nos prazos
                            previstos pela LGPD e pela ANPD.
                        </p>
                    </section>

                    {/* 8 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">8. Cookies e rastreamento</h2>
                        <p>
                            O site institucional utiliza cookies essenciais para funcionamento. Não utilizamos cookies de
                            rastreamento de terceiros para publicidade. O aplicativo mobile não utiliza cookies.
                        </p>
                    </section>

                    {/* 9 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">9. Menores de idade</h2>
                        <p>
                            Nossos serviços são destinados a pessoas com 18 anos ou mais. Não coletamos intencionalmente
                            dados de menores de idade. Se identificarmos tal situação, excluiremos os dados imediatamente.
                        </p>
                    </section>

                    {/* 10 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">10. Alterações nesta política</h2>
                        <p>
                            Podemos atualizar esta política periodicamente. Quando houver mudanças relevantes, você será
                            notificado por e-mail ou push notification. A data no topo deste documento sempre indica a versão vigente.
                        </p>
                    </section>

                    {/* 11 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">11. Contato</h2>
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                            <p className="font-bold text-gray-900 mb-2">Encarregado de Proteção de Dados (DPO)</p>
                            <p className="text-gray-600 text-sm mb-1">M&F Planejados — Conecta Marceneiro</p>
                            <a href="mailto:privacidade@conectamarceneiro.com.br" className="text-red-600 font-medium hover:underline text-sm">
                                privacidade@conectamarceneiro.com.br
                            </a>
                            <p className="text-gray-500 text-xs mt-3">
                                Você também pode registrar uma reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD): gov.br/anpd
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-8 mt-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Conecta Marceneiro. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/privacidade" className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium">Privacidade</Link>
                        <Link href="/termos" className="text-sm text-gray-500 hover:text-red-600 transition-colors">Termos de Uso</Link>
                        <Link href="/" className="text-sm text-gray-500 hover:text-red-600 transition-colors">Início</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}