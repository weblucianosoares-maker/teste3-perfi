import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import type { UserData } from '../types';
import { OCCUPATION_OPTIONS, INCOME_OPTIONS, SITUATION_OPTIONS } from '../constants';
import Logo from './Logo';

const LandingForm: React.FC = () => {
  const { startQuiz } = useAppContext();
  const [formData, setFormData] = useState<UserData>({
    name: '',
    whatsapp: '',
    occupation: '',
    role: '',
    income: '',
    location: '',
    situation: '',
    painPoint: '',
    willingToInvest: 'Sim',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value as 'Sim' | 'Não' });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    for (const key in formData) {
      if (key !== 'painPoint' && formData[key as keyof UserData] === '') {
        setError('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
    }
    setError('');
    startQuiz(formData);
  };

  const inputClasses = "w-full bg-black/20 border border-white/30 rounded-md p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/80 transition";
  const labelClasses = "block text-sm font-medium text-gray-200 mb-2";

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
        <Logo />
        <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Descubra seu <span className="font-extrabold">Perfil Emocional Financeiro</span></h1>
            <p className="mt-4 text-lg text-gray-200">Entenda como suas emoções influenciam suas decisões financeiras e transforme sua vida.</p>
        </div>
        <div className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
            <h2 className="text-2xl font-semibold text-center text-white mb-6">Preencha para iniciar o teste</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className={labelClasses}>Nome Completo *</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={inputClasses} required />
                    </div>
                    <div>
                        <label htmlFor="whatsapp" className={labelClasses}>WhatsApp *</label>
                        <input type="text" name="whatsapp" id="whatsapp" value={formData.whatsapp} onChange={handleChange} className={inputClasses} required />
                    </div>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="occupation" className={labelClasses}>Principal Ocupação *</label>
                        <select name="occupation" id="occupation" value={formData.occupation} onChange={handleChange} className={inputClasses} required>
                            <option value="">Selecione...</option>
                            {OCCUPATION_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="role" className={labelClasses}>Cargo Atual *</label>
                        <input type="text" name="role" id="role" value={formData.role} onChange={handleChange} className={inputClasses} required />
                    </div>
                </div>
                <div>
                    <label htmlFor="income" className={labelClasses}>Renda Mensal Atual *</label>
                    <select name="income" id="income" value={formData.income} onChange={handleChange} className={inputClasses} required>
                        <option value="">Selecione...</option>
                        {INCOME_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="location" className={labelClasses}>Cidade/UF *</label>
                    <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} className={inputClasses} required />
                </div>
                <div>
                    <label htmlFor="situation" className={labelClasses}>Frase que mais define o momento *</label>
                    <select name="situation" id="situation" value={formData.situation} onChange={handleChange} className={inputClasses} required>
                        <option value="">Selecione...</option>
                        {SITUATION_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="painPoint" className={labelClasses}>Qual é a sua maior dor atualmente? (Opcional)</label>
                    <textarea name="painPoint" id="painPoint" value={formData.painPoint} onChange={handleChange} className={inputClasses} rows={3}></textarea>
                </div>
                <div>
                    <label className={labelClasses}>Você está disposto a investir para curar suas emoções financeiras e viver uma nova realidade? *</label>
                    <div className="flex items-center space-x-6 mt-2">
                         <label className="flex items-center text-gray-200 cursor-pointer">
                            <input type="radio" name="willingToInvest" value="Sim" checked={formData.willingToInvest === 'Sim'} onChange={handleRadioChange} className="h-5 w-5 text-[#4568DC] bg-gray-200 border-gray-400 focus:ring-[#7A8BD1]" />
                            <span className="ml-3">Sim</span>
                        </label>
                        <label className="flex items-center text-gray-200 cursor-pointer">
                            <input type="radio" name="willingToInvest" value="Não" checked={formData.willingToInvest === 'Não'} onChange={handleRadioChange} className="h-5 w-5 text-[#4568DC] bg-gray-200 border-gray-400 focus:ring-[#7A8BD1]" />
                            <span className="ml-3">Não</span>
                        </label>
                    </div>
                </div>
                {error && <p className="text-red-300 text-sm text-center">{error}</p>}
                <div className="pt-4">
                    <button type="submit" className="w-full bg-green-600 text-white font-bold py-4 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105 text-lg">
                        INICIAR TESTE
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LandingForm;