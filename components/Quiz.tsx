import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { quizQuestions, answerScale } from '../constants';
import type { Answer } from '../types';

const Quiz: React.FC = () => {
  const { completeQuiz } = useAppContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;

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
    <div className="w-full max-w-3xl mx-auto bg-[#112240] p-8 rounded-lg shadow-2xl border border-gray-700 transition-all duration-500">
        <div className="mb-8">
            <p className="text-amber-400 font-semibold mb-2">Pergunta {currentQuestionIndex + 1} de {quizQuestions.length}</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
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
                    className="w-full text-left p-4 border-2 rounded-lg transition-all duration-200 flex items-center bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-amber-400 hover:scale-105"
                >
                    <span className="font-bold text-xl mr-4 w-6 text-center text-amber-400">{value}</span>
                    <div>
                        <span className="font-semibold text-white">{label}</span>
                        <span className="text-sm ml-2 text-gray-400">({description})</span>
                    </div>
                </button>
            ))}
        </div>
    </div>
  );
};

export default Quiz;
