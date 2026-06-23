import type { Metadata } from "next";
import Link from "next/link";
import { Hammer, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Termos de Uso | Conecta Marceneiro",
    description: "Termos e condições de uso da plataforma Conecta Marceneiro.",
};

export default function TermosPage() {
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
                    <h1 className="text-4xl font-black text-gray-900 mb-3">Termos de Uso</h1>
                    <p className="text-gray-500 text-sm">
                        Última atualização: 22 de março de 2026 · Leia com atenção antes de usar a plataforma.
                    </p>
                </div>

                <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <p>
                            Ao se cadastrar ou usar o <strong>Conecta Marceneiro</strong> (aplicativo mobile e site), você concorda
                            com estes Termos de Uso. Se não concordar, não utilize a plataforma.
                            Estes Termos regem a relação entre você e a <strong>M&F Planejados</strong>, operadora do Conecta Marceneiro.
                        </p>
                    </div>

                    {/* 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">1. O que é a plataforma</h2>
                        <p>
                            O Conecta Marceneiro é um marketplace digital que conecta <strong>clientes</strong> (pessoas que precisam de serviços de
                            marcenaria) a <strong>profissionais</strong> (marceneiros e prestadores de serviço). A M&F Planejados atua como
                            intermediadora, <strong>não sendo parte nos contratos de serviço</strong> celebrados entre clientes e profissionais.
                        </p>
                        <p className="mt-3">
                            A plataforma oferece: publicação de serviços, envio e recepção de orçamentos, comunicação via chat,
                            processamento de pagamentos e sistema de avaliações.
                        </p>
                    </section>

                    {/* 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">2. Cadastro e conta</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Você deve ter <strong>18 anos ou mais</strong> para criar uma conta.</li>
                            <li>As informações cadastradas devem ser verdadeiras, completas e atualizadas.</li>
                            <li>Você é responsável pela confidencialidade da sua senha.</li>
                            <li>Uma pessoa física pode ter apenas uma conta ativa por tipo (cliente ou profissional).</li>
                            <li>A M&F Planejados pode suspender ou excluir contas que violem estes Termos, sem aviso prévio em casos graves.</li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">3. Para clientes</h2>

                        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">3.1 Publicação de serviços</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Ao publicar um serviço, você se compromete a fornecer informações precisas sobre o que precisa.</li>
                            <li>É proibido publicar serviços fora do escopo da plataforma (marcenaria, móveis, carpintaria).</li>
                            <li>Conteúdos falsos, ofensivos ou fraudulentos serão removidos e a conta suspensa.</li>
                        </ul>

                        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">3.2 Aceite de orçamento</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Ao aceitar um orçamento, você concorda com o valor, prazo e condições descritas pelo profissional.</li>
                            <li>O pagamento deve ser realizado pelo aplicativo — pagamentos fora da plataforma não têm a garantia do Conecta Marceneiro.</li>
                        </ul>

                        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">3.3 Confirmação e liberação</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Após o profissional marcar o serviço como concluído, você tem <strong>3 dias úteis</strong> para confirmar ou contestar.</li>
                            <li>Sem manifestação no prazo, o pagamento é liberado automaticamente ao profissional.</li>
                        </ul>
                    </section>

                    {/* 4 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">4. Para profissionais</h2>

                        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">4.1 Verificação</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Ao se cadastrar como profissional, você concorda em fornecer documentos para verificação de identidade.</li>
                            <li>Informações falsas resultam em banimento imediato e podem ser comunicadas às autoridades competentes.</li>
                        </ul>

                        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">4.2 Orçamentos e execução</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Orçamentos aceitos pelo cliente criam um compromisso de prestação de serviço.</li>
                            <li>O não cumprimento injustificado pode resultar em suspensão da conta e retenção do valor depositado.</li>
                            <li>Você é o único responsável pela qualidade, prazo e execução do serviço contratado.</li>
                        </ul>

                        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">4.3 Recebimento</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>O Conecta Marceneiro repassa <strong>90%</strong> do valor pago pelo cliente. Os 10% restantes são a taxa de intermediação da plataforma.</li>
                            <li>O saque está sujeito à disponibilidade de saldo e às regras do parceiro de pagamentos (Asaas).</li>
                            <li>O prazo de repasse pode variar conforme o método de pagamento utilizado pelo cliente.</li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">5. Pagamentos</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Os pagamentos são processados pela <strong>Asaas Pagamentos S.A.</strong>, regulada pelo Banco Central do Brasil.</li>
                            <li>Aceitamos PIX e cartão de crédito (parcelamento sujeito a juros da operadora).</li>
                            <li>O valor pago fica em custódia até a confirmação do serviço (modelo escrow).</li>
                            <li>
                                <strong>Cancelamentos:</strong> em caso de cancelamento antes do início do serviço, o valor é devolvido integralmente.
                                Após o início, reembolsos são analisados caso a caso pelo suporte.
                            </li>
                            <li>
                                <strong>Disputas:</strong> em caso de divergência entre cliente e profissional, o Conecta Marceneiro atuará como
                                mediador e tomará a decisão final com base nas evidências apresentadas.
                            </li>
                        </ul>
                    </section>

                    {/* 6 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">6. Condutas proibidas</h2>
                        <p className="mb-3">É estritamente proibido:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Tentar burlar as taxas da plataforma negociando pagamentos fora do app</li>
                            <li>Criar avaliações falsas, comprar avaliações ou manipular o sistema de reputação</li>
                            <li>Usar a plataforma para fins ilegais, fraudulentos ou que prejudiquem terceiros</li>
                            <li>Assediar, ameaçar ou discriminar outros usuários no chat</li>
                            <li>Compartilhar dados de acesso da conta com terceiros</li>
                            <li>Realizar engenharia reversa, scraping ou qualquer tentativa de acesso não autorizado aos sistemas</li>
                        </ul>
                        <p className="mt-3">Violações resultam em suspensão ou banimento permanente sem devolução de valores pendentes.</p>
                    </section>

                    {/* 7 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">7. Avaliações</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Avaliações só podem ser feitas por quem efetivamente realizou ou recebeu o serviço.</li>
                            <li>As avaliações devem ser honestas, respeitosas e baseadas na experiência real.</li>
                            <li>A M&F Planejados pode remover avaliações que violem estes Termos.</li>
                            <li>O profissional pode responder a avaliações de forma pública e respeitosa.</li>
                        </ul>
                    </section>

                    {/* 8 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">8. Propriedade intelectual</h2>
                        <p>
                            Todo o conteúdo da plataforma — marca, logotipo, design, código e textos — pertence à M&F Planejados.
                            É proibida a reprodução sem autorização prévia por escrito.
                        </p>
                        <p className="mt-3">
                            Ao enviar fotos ou textos para a plataforma, você concede à M&F Planejados uma licença não exclusiva
                            para utilizá-los exclusivamente no contexto do serviço, sem custos adicionais.
                        </p>
                    </section>

                    {/* 9 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">9. Limitação de responsabilidade</h2>
                        <p>
                            O Conecta Marceneiro é uma plataforma de conexão e não se responsabiliza por:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-3">
                            <li>Qualidade, segurança ou legalidade dos serviços prestados pelos profissionais</li>
                            <li>Danos materiais ou morais decorrentes dos serviços contratados entre usuários</li>
                            <li>Interrupções temporárias de serviço por manutenção ou falhas de terceiros</li>
                            <li>Perdas indiretas, lucros cessantes ou danos emergentes</li>
                        </ul>
                        <p className="mt-3">
                            Nossa responsabilidade máxima em qualquer situação fica limitada ao valor das taxas pagas à plataforma
                            nos últimos 3 meses.
                        </p>
                    </section>

                    {/* 10 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">10. Encerramento de conta</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Você pode solicitar a exclusão da sua conta a qualquer momento pelo app ou por e-mail.</li>
                            <li>Serviços em andamento devem ser concluídos ou cancelados antes da exclusão.</li>
                            <li>Saldos disponíveis podem ser sacados antes do encerramento.</li>
                            <li>Alguns dados são mantidos pelo período legalmente exigido mesmo após a exclusão (veja a Política de Privacidade).</li>
                        </ul>
                    </section>

                    {/* 11 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">11. Alterações nos Termos</h2>
                        <p>
                            Podemos atualizar estes Termos a qualquer momento. Mudanças relevantes serão comunicadas com ao menos
                            15 dias de antecedência via e-mail ou notificação no app. O uso continuado da plataforma após a
                            vigência das mudanças implica na aceitação dos novos Termos.
                        </p>
                    </section>

                    {/* 12 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">12. Lei aplicável e foro</h2>
                        <p>
                            Estes Termos são regidos pela legislação brasileira, em especial pelo Código de Defesa do Consumidor
                            (Lei nº 8.078/90), pelo Marco Civil da Internet (Lei nº 12.965/14) e pela LGPD (Lei nº 13.709/18).
                        </p>
                        <p className="mt-3">
                            Para resolução de conflitos, fica eleito o Foro da Comarca de domicílio do consumidor, conforme
                            estabelecido pelo CDC.
                        </p>
                    </section>

                    {/* 13 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">13. Contato</h2>
                        <div className="bg-gray-900 text-white rounded-2xl p-6">
                            <p className="font-bold mb-2">M&F Planejados — Conecta Marceneiro</p>
                            <p className="text-gray-400 text-sm mb-1">Para dúvidas sobre estes Termos:</p>
                            <a href="mailto:contato@conectamarceneiro.com.br" className="text-red-400 font-medium hover:underline">
                                contato@conectamarceneiro.com.br
                            </a>
                            <p className="text-gray-500 text-xs mt-4">
                                Você também pode usar o suporte integrado no próprio aplicativo.
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
                        <Link href="/privacidade" className="text-sm text-gray-500 hover:text-red-600 transition-colors">Privacidade</Link>
                        <Link href="/termos" className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium">Termos de Uso</Link>
                        <Link href="/" className="text-sm text-gray-500 hover:text-red-600 transition-colors">Início</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}