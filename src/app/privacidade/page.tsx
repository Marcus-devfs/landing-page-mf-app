import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/legal/LegalPageShell';
import {
  LegalSection,
  LegalSubheading,
  LegalList,
  LegalCallout,
  LegalTable,
} from '@/components/legal/LegalSection';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Conecta Marceneiro',
  description:
    'Política de privacidade e proteção de dados pessoais do Conecta Marceneiro, em conformidade com a LGPD.',
};

const toc = [
  { id: 'quem-somos', label: '1. Quem somos' },
  { id: 'dados-coletados', label: '2. Dados coletados' },
  { id: 'como-usamos', label: '3. Como usamos' },
  { id: 'compartilhamento', label: '4. Compartilhamento' },
  { id: 'retencao', label: '5. Retenção' },
  { id: 'direitos', label: '6. Seus direitos' },
  { id: 'seguranca', label: '7. Segurança' },
  { id: 'cookies', label: '8. Cookies' },
  { id: 'menores', label: '9. Menores de idade' },
  { id: 'alteracoes', label: '10. Alterações' },
  { id: 'contato', label: '11. Contato' },
];

const rights = [
  ['Confirmação', 'Saber se tratamos seus dados'],
  ['Acesso', 'Obter uma cópia dos seus dados'],
  ['Correção', 'Atualizar dados incompletos ou incorretos'],
  ['Anonimização', 'Solicitar que seus dados sejam anonimizados'],
  ['Portabilidade', 'Receber seus dados em formato estruturado'],
  ['Eliminação', 'Excluir dados desnecessários'],
  ['Informação', 'Saber com quem compartilhamos seus dados'],
  ['Revogação', 'Retirar o consentimento a qualquer momento'],
];

export default function PrivacidadePage() {
  return (
    <LegalPageShell
      title="Política de Privacidade"
      description="Como coletamos, usamos e protegemos seus dados pessoais — em conformidade com a LGPD (Lei nº 13.709/2018)."
      updatedAt="23 de junho de 2026"
      badge="LGPD · Proteção de Dados"
      relatedHref="/termos"
      relatedLabel="Termos de Uso"
      toc={toc}
    >
      <LegalCallout variant="info">
        <p>
          Ao usar o <strong>Conecta Marceneiro</strong>, você confia seus dados à{' '}
          <strong>M&F Planejados</strong>. Esta política explica o que coletamos, por quê e quais
          são os seus direitos. Para dúvidas, fale com nosso Encarregado de Proteção de Dados.
        </p>
      </LegalCallout>

      <LegalSection id="quem-somos" title="1. Quem somos">
        <p>
          O <strong>Conecta Marceneiro</strong> é uma plataforma digital operada pela{' '}
          <strong>M&F Planejados</strong>, empresa com sede no Brasil. Somos o controlador dos
          dados pessoais coletados por meio do nosso aplicativo mobile (iOS e Android) e site.
        </p>
        <p>
          Encarregado de Proteção de Dados (DPO):{' '}
          <a href="mailto:privacidade@conectamarceneiro.com.br">
            privacidade@conectamarceneiro.com.br
          </a>
        </p>
      </LegalSection>

      <LegalSection id="dados-coletados" title="2. Quais dados coletamos">
        <LegalSubheading>2.1 Dados fornecidos por você</LegalSubheading>
        <LegalList
          items={[
            <>
              <strong>Conta:</strong> nome completo, e-mail, telefone, senha (armazenada com hash
              seguro)
            </>,
            <>
              <strong>Perfil:</strong> foto de avatar, data de nascimento, CPF/CNPJ
            </>,
            <>
              <strong>Endereço:</strong> CEP, logradouro, cidade, estado (para serviços com
              localização)
            </>,
            <>
              <strong>Serviços:</strong> descrição, categorias, fotos e detalhes dos projetos
              publicados
            </>,
            <>
              <strong>Financeiro:</strong> dados de pagamento processados pela Asaas — não
              armazenamos dados de cartão (PCI-DSS compliant)
            </>,
          ]}
        />

        <LegalSubheading>2.2 Dados coletados automaticamente</LegalSubheading>
        <LegalList
          items={[
            <>
              <strong>Localização:</strong> coordenadas GPS para exibir profissionais próximos
              (apenas com permissão)
            </>,
            <>
              <strong>Dispositivo:</strong> modelo, sistema operacional, token de notificação push
            </>,
            <>
              <strong>Uso:</strong> telas acessadas, horários de acesso, logs de erros
            </>,
            <>
              <strong>Comunicação:</strong> mensagens trocadas no chat da plataforma
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="como-usamos" title="3. Como usamos seus dados">
        <LegalTable
          headers={['Finalidade', 'Base Legal (LGPD)']}
          rows={[
            ['Criação e autenticação de conta', 'Execução de contrato (Art. 7º, V)'],
            ['Conexão entre clientes e profissionais', 'Execução de contrato (Art. 7º, V)'],
            ['Processamento de pagamentos e saques', 'Execução de contrato (Art. 7º, V)'],
            ['Envio de notificações push (com permissão)', 'Consentimento (Art. 7º, I)'],
            ['Envio de e-mails transacionais', 'Execução de contrato (Art. 7º, V)'],
            ['Suporte ao usuário', 'Legítimo interesse (Art. 7º, IX)'],
            ['Melhoria da plataforma e análise de uso', 'Legítimo interesse (Art. 7º, IX)'],
            ['Cumprimento de obrigações legais', 'Obrigação legal (Art. 7º, II)'],
          ]}
        />
      </LegalSection>

      <LegalSection id="compartilhamento" title="4. Compartilhamento de dados">
        <p>Não vendemos seus dados pessoais. Compartilhamos apenas quando necessário para a prestação do serviço:</p>
        <LegalList
          items={[
            <>
              <strong>Asaas Pagamentos:</strong> processamento de cobranças via PIX e cartão
            </>,
            <>
              <strong>Amazon Web Services (AWS S3):</strong> armazenamento seguro de fotos e
              arquivos enviados pelos usuários
            </>,
            <>
              <strong>Expo Push Notifications:</strong> envio de notificações push para iOS e
              Android
            </>,
            <>
              <strong>Entre usuários:</strong> nome, foto e cidade são visíveis para facilitar a
              contratação. CPF, e-mail completo e telefone não são expostos publicamente
            </>,
            <>
              <strong>Autoridades públicas:</strong> quando exigido por lei, ordem judicial ou
              para defesa de direitos
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="retencao" title="5. Por quanto tempo guardamos">
        <LegalList
          items={[
            <>
              <strong>Dados de conta:</strong> enquanto a conta estiver ativa + 5 anos após
              exclusão (obrigação fiscal e legal)
            </>,
            <>
              <strong>Mensagens de chat:</strong> 2 anos
            </>,
            <>
              <strong>Logs de acesso:</strong> 6 meses (Marco Civil da Internet)
            </>,
            <>
              <strong>Dados financeiros:</strong> 5 anos (legislação tributária)
            </>,
            <>
              <strong>Tokens de notificação:</strong> removidos ao fazer logout ou desinstalar o
              app
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="direitos" title="6. Seus direitos (LGPD — Art. 18)">
        <p>Como titular de dados pessoais, você tem direito a:</p>
        <div className="grid sm:grid-cols-2 gap-3 not-prose">
          {rights.map(([titulo, desc]) => (
            <div key={titulo} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="font-display font-bold text-gray-900 text-sm">{titulo}</p>
              <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          Para exercer qualquer direito, envie e-mail para{' '}
          <a href="mailto:privacidade@conectamarceneiro.com.br">
            privacidade@conectamarceneiro.com.br
          </a>
          . Respondemos em até 15 dias úteis.
        </p>
      </LegalSection>

      <LegalSection id="seguranca" title="7. Segurança">
        <p>Adotamos medidas técnicas e organizacionais para proteger seus dados:</p>
        <LegalList
          items={[
            'Comunicação criptografada via HTTPS/TLS',
            'Senhas armazenadas com hash bcrypt',
            'Autenticação JWT com tokens de curta duração',
            'Acesso restrito aos dados por função (role-based access)',
            'Armazenamento de arquivos em ambiente isolado (AWS S3 privado)',
          ]}
        />
        <p>
          Em caso de incidente de segurança que possa afetar seus dados, você será notificado nos
          prazos previstos pela LGPD e pela ANPD.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="8. Cookies e rastreamento">
        <p>
          O site institucional utiliza cookies essenciais para funcionamento. Não utilizamos cookies
          de rastreamento de terceiros para publicidade. O aplicativo mobile não utiliza cookies.
        </p>
      </LegalSection>

      <LegalSection id="menores" title="9. Menores de idade">
        <p>
          Nossos serviços são destinados a pessoas com 18 anos ou mais. Não coletamos
          intencionalmente dados de menores de idade. Se identificarmos tal situação, excluiremos os
          dados imediatamente.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" title="10. Alterações nesta política">
        <p>
          Podemos atualizar esta política periodicamente. Quando houver mudanças relevantes, você
          será notificado por e-mail ou push notification. A data no topo deste documento sempre
          indica a versão vigente.
        </p>
      </LegalSection>

      <LegalSection id="contato" title="11. Contato">
        <LegalCallout variant="contact">
          <p className="font-display font-bold text-gray-900 mb-2">
            Encarregado de Proteção de Dados (DPO)
          </p>
          <p className="text-sm mb-1">M&F Planejados — Conecta Marceneiro</p>
          <a href="mailto:privacidade@conectamarceneiro.com.br" className="text-sm">
            privacidade@conectamarceneiro.com.br
          </a>
          <p className="text-gray-500 text-xs mt-4">
            Você também pode registrar uma reclamação junto à ANPD:{' '}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
              gov.br/anpd
            </a>
          </p>
        </LegalCallout>
      </LegalSection>
    </LegalPageShell>
  );
}
