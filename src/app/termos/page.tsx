import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/legal/LegalPageShell';
import {
  LegalSection,
  LegalSubheading,
  LegalList,
  LegalCallout,
} from '@/components/legal/LegalSection';

export const metadata: Metadata = {
  title: 'Termos de Uso | Conecta Marceneiro',
  description: 'Termos e condições de uso da plataforma Conecta Marceneiro.',
};

const toc = [
  { id: 'plataforma', label: '1. A plataforma' },
  { id: 'cadastro', label: '2. Cadastro e conta' },
  { id: 'clientes', label: '3. Para clientes' },
  { id: 'profissionais', label: '4. Para profissionais' },
  { id: 'pagamentos', label: '5. Pagamentos' },
  { id: 'condutas', label: '6. Condutas proibidas' },
  { id: 'avaliacoes', label: '7. Avaliações' },
  { id: 'propriedade', label: '8. Propriedade intelectual' },
  { id: 'responsabilidade', label: '9. Limitação de responsabilidade' },
  { id: 'encerramento', label: '10. Encerramento de conta' },
  { id: 'alteracoes', label: '11. Alterações' },
  { id: 'foro', label: '12. Lei e foro' },
  { id: 'contato', label: '13. Contato' },
];

export default function TermosPage() {
  return (
    <LegalPageShell
      title="Termos de Uso"
      description="Regras e condições para usar o Conecta Marceneiro como cliente ou profissional. Leia com atenção antes de se cadastrar."
      updatedAt="23 de junho de 2026"
      badge="Termos e Condições"
      badgeIcon="file"
      relatedHref="/privacidade"
      relatedLabel="Política de Privacidade"
      toc={toc}
    >
      <LegalCallout variant="warning">
        <p>
          Ao se cadastrar ou usar o <strong>Conecta Marceneiro</strong>, você concorda com estes
          Termos. Se não concordar, não utilize a plataforma. Estes Termos regem a relação entre
          você e a <strong>M&F Planejados</strong>, operadora do Conecta Marceneiro.
        </p>
      </LegalCallout>

      <LegalSection id="plataforma" title="1. O que é a plataforma">
        <p>
          O Conecta Marceneiro é um marketplace digital que conecta <strong>clientes</strong>{' '}
          (pessoas que precisam de serviços de marcenaria) a <strong>profissionais</strong>{' '}
          (marceneiros e prestadores de serviço). A M&F Planejados atua como intermediadora,{' '}
          <strong>não sendo parte nos contratos de serviço</strong> celebrados entre clientes e
          profissionais.
        </p>
        <p>
          A plataforma oferece: publicação de serviços, envio e recepção de orçamentos,
          comunicação via chat, processamento de pagamentos e sistema de avaliações.
        </p>
      </LegalSection>

      <LegalSection id="cadastro" title="2. Cadastro e conta">
        <LegalList
          items={[
            'Você deve ter 18 anos ou mais para criar uma conta.',
            'As informações cadastradas devem ser verdadeiras, completas e atualizadas.',
            'Você é responsável pela confidencialidade da sua senha.',
            'Uma pessoa física pode ter apenas uma conta ativa por tipo (cliente ou profissional).',
            'A M&F Planejados pode suspender ou excluir contas que violem estes Termos, sem aviso prévio em casos graves.',
          ]}
        />
      </LegalSection>

      <LegalSection id="clientes" title="3. Para clientes">
        <LegalSubheading>3.1 Publicação de serviços</LegalSubheading>
        <LegalList
          items={[
            'Ao publicar um serviço, você se compromete a fornecer informações precisas sobre o que precisa.',
            'É proibido publicar serviços fora do escopo da plataforma (marcenaria, móveis, carpintaria).',
            'Conteúdos falsos, ofensivos ou fraudulentos serão removidos e a conta suspensa.',
          ]}
        />

        <LegalSubheading>3.2 Aceite de orçamento</LegalSubheading>
        <LegalList
          items={[
            'Ao aceitar um orçamento, você concorda com o valor, prazo e condições descritas pelo profissional.',
            'O pagamento deve ser realizado pelo aplicativo — pagamentos fora da plataforma não têm a garantia do Conecta Marceneiro.',
          ]}
        />

        <LegalSubheading>3.3 Confirmação e liberação</LegalSubheading>
        <LegalList
          items={[
            <>
              Após o profissional marcar o serviço como concluído, você tem{' '}
              <strong>3 dias úteis</strong> para confirmar ou contestar.
            </>,
            'Sem manifestação no prazo, o pagamento é liberado automaticamente ao profissional.',
          ]}
        />
      </LegalSection>

      <LegalSection id="profissionais" title="4. Para profissionais">
        <LegalSubheading>4.1 Verificação</LegalSubheading>
        <LegalList
          items={[
            'Ao se cadastrar como profissional, você concorda em fornecer documentos para verificação de identidade.',
            'Informações falsas resultam em banimento imediato e podem ser comunicadas às autoridades competentes.',
          ]}
        />

        <LegalSubheading>4.2 Orçamentos e execução</LegalSubheading>
        <LegalList
          items={[
            'Orçamentos aceitos pelo cliente criam um compromisso de prestação de serviço.',
            'O não cumprimento injustificado pode resultar em suspensão da conta e retenção do valor depositado.',
            'Você é o único responsável pela qualidade, prazo e execução do serviço contratado.',
          ]}
        />

        <LegalSubheading>4.3 Recebimento</LegalSubheading>
        <LegalList
          items={[
            <>
              O Conecta Marceneiro repassa <strong>90%</strong> do valor pago pelo cliente. Os 10%
              restantes são a taxa de intermediação da plataforma.
            </>,
            'O saque está sujeito à disponibilidade de saldo e às regras do parceiro de pagamentos (Asaas).',
            'O prazo de repasse pode variar conforme o método de pagamento utilizado pelo cliente.',
          ]}
        />
      </LegalSection>

      <LegalSection id="pagamentos" title="5. Pagamentos">
        <LegalList
          items={[
            <>
              Os pagamentos são processados pela <strong>Asaas Pagamentos S.A.</strong>, regulada
              pelo Banco Central do Brasil.
            </>,
            'Aceitamos PIX e cartão de crédito (parcelamento sujeito a juros da operadora).',
            'O valor pago fica em custódia até a confirmação do serviço (modelo escrow).',
            <>
              <strong>Cancelamentos:</strong> antes do início do serviço, o valor é devolvido
              integralmente. Após o início, reembolsos são analisados caso a caso pelo suporte.
            </>,
            <>
              <strong>Disputas:</strong> em caso de divergência, o Conecta Marceneiro atuará como
              mediador com base nas evidências apresentadas.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="condutas" title="6. Condutas proibidas">
        <p>É estritamente proibido:</p>
        <LegalList
          items={[
            'Tentar burlar as taxas da plataforma negociando pagamentos fora do app',
            'Criar avaliações falsas, comprar avaliações ou manipular o sistema de reputação',
            'Usar a plataforma para fins ilegais, fraudulentos ou que prejudiquem terceiros',
            'Assediar, ameaçar ou discriminar outros usuários no chat',
            'Compartilhar dados de acesso da conta com terceiros',
            'Realizar engenharia reversa, scraping ou acesso não autorizado aos sistemas',
          ]}
        />
        <p>Violações resultam em suspensão ou banimento permanente sem devolução de valores pendentes.</p>
      </LegalSection>

      <LegalSection id="avaliacoes" title="7. Avaliações">
        <LegalList
          items={[
            'Avaliações só podem ser feitas por quem efetivamente realizou ou recebeu o serviço.',
            'As avaliações devem ser honestas, respeitosas e baseadas na experiência real.',
            'A M&F Planejados pode remover avaliações que violem estes Termos.',
            'O profissional pode responder a avaliações de forma pública e respeitosa.',
          ]}
        />
      </LegalSection>

      <LegalSection id="propriedade" title="8. Propriedade intelectual">
        <p>
          Todo o conteúdo da plataforma — marca, logotipo, design, código e textos — pertence à
          M&F Planejados. É proibida a reprodução sem autorização prévia por escrito.
        </p>
        <p>
          Ao enviar fotos ou textos para a plataforma, você concede à M&F Planejados uma licença
          não exclusiva para utilizá-los exclusivamente no contexto do serviço, sem custos
          adicionais.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidade" title="9. Limitação de responsabilidade">
        <p>O Conecta Marceneiro é uma plataforma de conexão e não se responsabiliza por:</p>
        <LegalList
          items={[
            'Qualidade, segurança ou legalidade dos serviços prestados pelos profissionais',
            'Danos materiais ou morais decorrentes dos serviços contratados entre usuários',
            'Interrupções temporárias de serviço por manutenção ou falhas de terceiros',
            'Perdas indiretas, lucros cessantes ou danos emergentes',
          ]}
        />
        <p>
          Nossa responsabilidade máxima em qualquer situação fica limitada ao valor das taxas pagas
          à plataforma nos últimos 3 meses.
        </p>
      </LegalSection>

      <LegalSection id="encerramento" title="10. Encerramento de conta">
        <LegalList
          items={[
            'Você pode solicitar a exclusão da sua conta a qualquer momento pelo app ou por e-mail.',
            'Serviços em andamento devem ser concluídos ou cancelados antes da exclusão.',
            'Saldos disponíveis podem ser sacados antes do encerramento.',
            'Alguns dados são mantidos pelo período legalmente exigido mesmo após a exclusão (veja a Política de Privacidade).',
          ]}
        />
      </LegalSection>

      <LegalSection id="alteracoes" title="11. Alterações nos Termos">
        <p>
          Podemos atualizar estes Termos a qualquer momento. Mudanças relevantes serão comunicadas
          com ao menos 15 dias de antecedência via e-mail ou notificação no app. O uso continuado
          da plataforma após a vigência das mudanças implica na aceitação dos novos Termos.
        </p>
      </LegalSection>

      <LegalSection id="foro" title="12. Lei aplicável e foro">
        <p>
          Estes Termos são regidos pela legislação brasileira, em especial pelo Código de Defesa
          do Consumidor (Lei nº 8.078/90), pelo Marco Civil da Internet (Lei nº 12.965/14) e pela
          LGPD (Lei nº 13.709/18).
        </p>
        <p>
          Para resolução de conflitos, fica eleito o Foro da Comarca de domicílio do consumidor,
          conforme estabelecido pelo CDC.
        </p>
      </LegalSection>

      <LegalSection id="contato" title="13. Contato">
        <LegalCallout variant="contact">
          <p className="font-display font-bold text-gray-900 mb-2">
            M&F Planejados — Conecta Marceneiro
          </p>
          <p className="text-sm text-gray-500 mb-2">Para dúvidas sobre estes Termos:</p>
          <a href="mailto:contato@conectamarceneiro.com.br">contato@conectamarceneiro.com.br</a>
          <p className="text-gray-500 text-xs mt-4">
            Você também pode usar o suporte integrado no próprio aplicativo.
          </p>
        </LegalCallout>
      </LegalSection>
    </LegalPageShell>
  );
}
