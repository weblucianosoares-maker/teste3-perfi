import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { quizQuestions, answerScale } from '../constants';
import type { Answer } from '../types';

const Quiz: React.FC = () => {
  const { completeQuiz } = useAppContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (value: number) => {
    const newAnswers = [...answers, { questionId: currentQuestion.id, value }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeQuiz(newAnswers);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-black/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 transition-all duration-500">
        <div className="mb-8">
            <p className="text-white/80 font-semibold mb-2">Pergunta {currentQuestionIndex + 1} de {quizQuestions.length}</p>
            <div className="w-full bg-white/20 rounded-full h-2.5">
                <div className="bg-white h-2.5 rounded-full transition-all duration-300 ease-in-out" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
        
        <div className="text-center mb-8 min-h-[100px] flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-medium text-white">{currentQuestion.text}</h2>
        </div>

        <div className="space-y-4 mb-10">
            {answerScale.map(({ value, label, description }) => (
                <button
                    key={value}
                    onClick={() => handleAnswerSelect(value)}
                    className="w-full text-left p-4 border-2 rounded-lg transition-all duration-200 flex items-center bg-black/20 border-white/30 hover:bg-white/20 hover:border-white hover:scale-105"
                >
                    <span className="font-bold text-xl mr-4 w-6 text-center text-white">{value}</span>
                    <div>
                        <span className="font-semibold text-white">{label}</span>
                        <span className="text-sm ml-2 text-gray-200">({description})</span>
                    </div>
                </button>
            ))}
        </div>
    </div>
  );
};

export default Quiz;