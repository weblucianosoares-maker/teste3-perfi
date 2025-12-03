import React, { useState, useMemo } from 'react';
import LandingForm from './components/LandingForm';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import Footer from './components/Footer';
import { AppContext } from './context/AppContext';
import type { UserData, Answer } from './types';
import { ViewState, ProfileName } from './types';
import { quizQuestions, profileDetails } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.LANDING);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState<number>(0);
  const [profile, setProfile] = useState<ProfileName>(ProfileName.AnsiosoEvitativo);
  const [isQualified, setIsQualified] = useState<boolean>(false);

  const calculateScore = (userAnswers: Answer[]): number => {
    return userAnswers.reduce((total, answer) => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      if (!question) return total;

      const answerValue = answer.value;
      if (question.type === 'positive') {
        return total + answerValue;
      } else {
        return total + (6 - answerValue);
      }
    }, 0);
  };

  const determineProfile = (finalScore: number): ProfileName => {
    if (finalScore >= 61) return ProfileName.Equilibrado;
    if (finalScore >= 46) return ProfileName.EmocionalmenteSensivel;
    if (finalScore >= 31) return ProfileName.Impulsivo;
    return ProfileName.AnsiosoEvitativo;
  };

  const checkQualification = (data: UserData): boolean => {
    const incomeDisqualified = ["0 a R$ 3 mil", "R$ 3 mil a R$ 5 mil"].includes(data.income);
    if (incomeDisqualified) return false;

    if (data.situation === "Estou sobrevivendo, todos os meses deixo de pagar varias contas...") return false;

    if (data.occupation === "Desempregado") return false;

    return true;
  };

  const handleStartQuiz = (data: UserData) => {
    setUserData(data);
    console.log("Storing user data:", data);
    try {
        localStorage.setItem('userData', JSON.stringify(data));
    } catch (e) {
        console.error("Failed to save user data to localStorage", e);
    }
    setView(ViewState.QUIZ);
  };

  const handleQuizComplete = (finalAnswers: Answer[]) => {
    if (!userData) return;
    
    const finalScore = calculateScore(finalAnswers);
    const userProfile = determineProfile(finalScore);
    const qualificationStatus = checkQualification(userData);

    setAnswers(finalAnswers);
    setScore(finalScore);
    setProfile(userProfile);
    setIsQualified(qualificationStatus);

    const resultData = {
      answers: finalAnswers,
      score: finalScore,
      profile: userProfile,
      status: qualificationStatus ? 'Qualificado' : 'Desqualificado'
    };

    console.log("Storing quiz results:", resultData);
    try {
        localStorage.setItem('quizResults', JSON.stringify(resultData));
    } catch(e) {
        console.error("Failed to save quiz results to localStorage", e);
    }

    setView(ViewState.RESULT);
  };
  
  const contextValue = useMemo(() => ({
    userData,
    score,
    profile,
    isQualified,
    profileDetails: profileDetails[profile],
    startQuiz: handleStartQuiz,
    completeQuiz: handleQuizComplete
  }), [userData, score, profile, isQualified]);

  const renderContent = () => {
    switch (view) {
      case ViewState.QUIZ:
        return <Quiz />;
      case ViewState.RESULT:
        return <ResultPage />;
      case ViewState.LANDING:
      default:
        return <LandingForm />;
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="text-white min-h-screen font-sans flex flex-col p-4 selection:bg-white selection:text-[#4568DC]">
        <main className="flex-grow flex flex-col items-center justify-center w-full">
            {renderContent()}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;