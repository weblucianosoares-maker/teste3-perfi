import type { QuizQuestion, ProfileDetail } from './types';
import { ProfileName } from './types';

export const OCCUPATION_OPTIONS: string[] = [
  'Funcionário público',
  'Funcionário empresa privada',
  'Aposentado',
  'Empresário',
  'Profissional liberal',
  'Desempregado',
];

export const INCOME_OPTIONS: string[] = [
  '0 a R$ 3 mil',
  'R$ 3 mil a R$ 5 mil',
  'R$ 5 mil a R$ 10 mil',
  'R$ 10 mil a R$ 20 mil',
  'Mais de R$ 20 mil',
];

export const SITUATION_OPTIONS: string[] = [
  'Estou sobrevivendo, todos os meses deixo de pagar varias contas...',
  'Estou vivendo no rotativo e no cheque especial...',
  'Estou apertado, mas tenho conseguido guardar um pouquinho...',
  'Estou no limite, não sobra nada mas também não falta....',
  'Estou bem, tenho uma reserva e todos os meses sobra bastante dinheiro ...',
];

export const quizQuestions: QuizQuestion[] = [
  { id: 1, text: 'Quando penso em dinheiro, sinto ansiedade ou preocupação com o futuro.', type: 'negative' },
  { id: 2, text: 'Eu costumo controlar meus gastos de forma organizada e planejo meu orçamento mensal.', type: 'positive' },
  { id: 3, text: 'Prefiro evitar pensar em dinheiro porque me causa desconforto emocional.', type: 'negative' },
  { id: 4, text: 'Tenho facilidade para poupar dinheiro, mesmo que precise abrir mão de alguns prazeres imediatos.', type: 'positive' },
  { id: 5, text: 'Quando recebo uma quantia extra, gosto de gastar rapidamente para me sentir bem.', type: 'negative' },
  { id: 6, text: 'Me sinto inseguro(a) para tomar decisões financeiras importantes.', type: 'negative' },
  { id: 7, text: 'Acredito que dinheiro é sinal de sucesso e felicidade.', type: 'positive' },
  { id: 8, text: 'Evito conversar sobre dinheiro com pessoas próximas porque acho que gera conflito ou ansiedade.', type: 'negative' },
  { id: 9, text: 'Costumo planejar meus objetivos financeiros a longo prazo.', type: 'positive' },
  { id: 10, text: 'Meus sentimentos influenciam diretamente minhas decisões financeiras.', type: 'negative' },
  { id: 11, text: 'Já deixei de aproveitar momentos especiais com pessoas queridas por medo de gastar dinheiro.', type: 'negative' },
  { id: 12, text: 'Mesmo quando digo que estou bem financeiramente, sinto uma tensão interna que não consigo explicar.', type: 'negative' },
  { id: 13, text: 'Quando compro algo por impulso, costumo justificar para mim mesmo(a) dizendo que “era necessário”.', type: 'negative' },
  { id: 14, text: 'Acredito que, se eu tivesse mais dinheiro, todos os meus problemas emocionais estariam resolvidos.', type: 'negative' },
  { id: 15, text: 'Me considero uma pessoa super controlada com dinheiro, mas vivo no limite do cartão ou cheque especial.', type: 'negative' },
];

export const answerScale: { value: number; label: string; description: string }[] = [
    { value: 1, label: 'Nunca', description: 'não acontece comigo' },
    { value: 2, label: 'Raramente', description: 'quase nunca acontece' },
    { value: 3, label: 'Às vezes', description: 'acontece com alguma frequência' },
    { value: 4, label: 'Frequentemente', description: 'acontece com bastante frequência' },
    { value: 5, label: 'Sempre', description: 'é constante na minha vida' },
];

export const profileDetails: Record<ProfileName, ProfileDetail> = {
  [ProfileName.Equilibrado]: {
    title: ProfileName.Equilibrado,
    description: 'Você tem uma relação saudável e consciente com o dinheiro. Sente-se seguro(a) para tomar decisões financeiras e mantém um bom planejamento, mesmo diante de emoções. Sabe lidar com imprevistos sem se desesperar, o que contribui para sua estabilidade financeira e emocional.',
    influence: "Seu equilíbrio emocional permite que você tome decisões financeiras com clareza e propósito. Você não é facilmente abalado por impulsos ou medos, o que significa que suas escolhas financeiras estão alinhadas com seus objetivos de longo prazo, em vez de reações momentâneas.",
    risks: ["Excesso de confiança, que pode levar a subestimar riscos em investimentos.", "Racionalidade excessiva, ignorando a intuição em momentos importantes.", "Dificuldade em se permitir 'gastos por prazer' sem culpa, tornando-se rígido demais."],
    opportunities: ["Construir riqueza de forma consistente e segura.", "Alcançar a independência financeira com mais rapidez e tranquilidade.", "Servir de exemplo e ajudar outras pessoas a melhorarem sua relação com o dinheiro."]
  },
  [ProfileName.EmocionalmenteSensivel]: {
    title: ProfileName.EmocionalmenteSensivel,
    description: 'Você percebe as emoções influenciando suas decisões financeiras, mas já busca controlar melhor seus gastos e planejar seu orçamento. Com um pouco mais de atenção às emoções e estratégias para lidar com elas, pode alcançar mais equilíbrio e segurança.',
    influence: "Sua sensibilidade faz com que o estado emocional do momento tenha um peso grande em suas decisões. Em dias bons, você pode ser otimista e gastar mais. Em dias ruins, a ansiedade pode paralisar decisões importantes, criando um ciclo de instabilidade financeira.",
    risks: ["Tomar decisões de investimento baseadas em euforia ou pânico.", "Procrastinar o planejamento financeiro por sentir-se sobrecarregado pelas emoções.", "Usar o dinheiro como uma ferramenta para regular o humor (compras para se sentir melhor)."],
    opportunities: ["Desenvolver uma profunda autoconsciência sobre seus gatilhos emocionais.", "Usar a empatia para entender e negociar melhor em situações financeiras.", "Transformar a sensibilidade em intuição para identificar boas oportunidades quando aliada à análise."]
  },
  [ProfileName.Impulsivo]: {
    title: ProfileName.Impulsivo,
    description: 'Suas emoções frequentemente guiam suas escolhas financeiras, o que pode levar a gastos não planejados e dificuldades em poupar. É importante desenvolver consciência dos gatilhos emocionais e adotar ferramentas para evitar decisões precipitadas.',
    influence: "Sua impulsividade significa que a recompensa imediata muitas vezes vence o planejamento de longo prazo. O gatilho emocional (estresse, alegria, tédio) leva diretamente à ação (gastar), sem um filtro racional, o que compromete a construção de patrimônio e a segurança financeira.",
    risks: ["Acumular dívidas de cartão de crédito e entrar no cheque especial.", "Dificuldade extrema em poupar e investir para o futuro.", "Sentimento de arrependimento e culpa após compras, gerando mais estresse emocional."],
    opportunities: ["Aprender a canalizar a energia do impulso para metas financeiras motivadoras.", "Criar sistemas (como débitos automáticos para investimentos) que 'enganem' a impulsividade a seu favor.", "Desenvolver disciplina e autocontrole que transbordarão para outras áreas da vida."]
  },
  [ProfileName.AnsiosoEvitativo]: {
    title: ProfileName.AnsiosoEvitativo,
    description: 'O medo e a ansiedade relacionados ao dinheiro impactam fortemente suas decisões financeiras. Você pode evitar lidar com finanças ou sentir-se paralisado(a) para agir. Buscar suporte emocional e financeiro pode ajudar a construir segurança e controle.',
    influence: "O medo e a ansiedade criam uma barreira entre você e o dinheiro. Você evita olhar o extrato, fazer o orçamento ou planejar o futuro porque isso dispara gatilhos de desconforto. Essa evitação impede que você tome as rédeas da sua vida financeira, deixando-a à deriva.",
    risks: ["Perder o controle sobre as finanças por não saber para onde o dinheiro está indo.", "Deixar de aproveitar oportunidades de investimento por medo de perder.", "Manter o dinheiro em opções de baixo rendimento (como a poupança) por receio de arriscar."],
    opportunities: ["Buscar conhecimento financeiro como ferramenta para reduzir a ansiedade e ganhar confiança.", "Começar com pequenos passos (organizar uma conta, fazer um pequeno investimento) para construir segurança.", "Transformar o medo em prudência, tornando-se um investidor cauteloso e consciente."]
  },
};