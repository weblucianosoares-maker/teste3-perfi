export enum ViewState {
  LANDING = 'LANDING',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
}

export interface UserData {
  name: string;
  whatsapp: string;
  occupation: string;
  role: string;
  income: string;
  location: string;
  situation: string;
  painPoint: string;
  willingToInvest: 'Sim' | 'Não';
}

export interface QuizQuestion {
  id: number;
  text: string;
  type: 'positive' | 'negative';
}

export interface Answer {
  questionId: number;
  value: number;
}

export enum ProfileName {
  Equilibrado = 'Equilibrado',
  EmocionalmenteSensivel = 'Emocionalmente Sensível',
  Impulsivo = 'Impulsivo',
  AnsiosoEvitativo = 'Ansioso e Evitativo',
}

export interface ProfileDetail {
  title: ProfileName;
  description: string;
  influence: string;
  risks: string[];
  opportunities: string[];
}