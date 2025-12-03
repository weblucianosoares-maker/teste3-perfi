
import { createContext } from 'react';
import type { UserData, Answer, ProfileDetail } from '../types';

interface AppContextType {
  userData: UserData | null;
  score: number;
  profile: string;
  isQualified: boolean;
  profileDetails: ProfileDetail | null;
  startQuiz: (data: UserData) => void;
  completeQuiz: (answers: Answer[]) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
