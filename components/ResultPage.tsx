
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const CTAButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <a href="#" className={`block w-full sm:w-auto text-center bg-amber-500 text-gray-900 font-bold py-4 px-8 rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-400 transition duration-300 ease-in-out transform hover:scale-105 text-lg ${className}`}>
        {children}
    </a>
);

const ResultHeader: React.FC<{ name: string, score: number, title: string, description: string }> = ({ name, score, title, description }) => (
     <div className="text-center bg-[#112240] p-8 rounded-lg shadow-2xl border border-gray-700 mb-12">
        <p className="text-xl text-gray-300 mb-2">Olá, {name}!</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Seu Perfil é: <span className="text-amber-400">{title}</span></h1>
        <p className="mt-4 text-2xl text-gray-400">Pontuação Final: {score} de 75</p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">{description}</p>
    </div>
);


const ResultQualified: React.FC = () => {
    const { userData, score, profileDetails } = useAppContext();
    if (!userData || !profileDetails) return null;

    return (
        <div className="w-full max-w-4xl mx-auto">
            <ResultHeader name={userData.name} score={score} title={profileDetails.title} description={profileDetails.description} />

            {/* Sales Page Section */}
            <div className="space-y-16 text-gray-200">
                
                {/* Dobra 1 */}
                <section className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Você descobriu seu Perfil Emocional Financeiro. Agora é hora de descobrir como virar esse jogo.</h2>
                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">Você ganha acima da média, trabalha duro, produz, entrega resultado — mas suas finanças continuam presas num padrão que não faz sentido para o seu nível profissional.</p>
                    <p className="mt-4 text-xl font-semibold text-amber-400 max-w-3xl mx-auto">E aqui vai a verdade que quase ninguém fala: Não é falta de renda. É falta de clareza emocional.</p>
                    <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">Você acabou de responder um teste que revela, com precisão cirúrgica, como suas emoções moldam suas decisões com dinheiro — mesmo quando você acredita que é racional. Esse padrão pode ser ajustado. E quando ele muda, TODO o resto muda junto.</p>
                    <div className="mt-10 flex justify-center">
                        <CTAButton>Quero desbloquear meu padrão emocional</CTAButton>
                    </div>
                </section>

                {/* Dobra 2 */}
                <section className="text-center bg-[#112240] p-8 rounded-lg border border-gray-700">
                    <h2 className="text-3xl font-bold text-white">Você pode reorganizar sua vida financeira <span className="text-amber-400">sem ganhar 1 real a mais</span> — apenas mudando o padrão emocional que sabota suas decisões.</h2>
                    <p className="mt-6 text-lg text-gray-300">O que está travando sua evolução não está no extrato bancário. Está nos gatilhos emocionais que definem como você gasta, como você guarda, como você decide.</p>
                    <p className="mt-6 text-xl font-bold text-white">Pessoas de alta renda têm problemas financeiros sofisticados. E problemas sofisticados exigem soluções sofisticadas.</p>
                    <p className="mt-4 text-lg text-gray-400">Planilha não resolve. Cortar cafezinho não resolve. “Fazer renda extra” não resolve. O que resolve é desmontar o padrão emocional que te leva a repetir o mesmo ciclo — mês após mês — mesmo sabendo exatamente “o que deveria fazer”.</p>
                    <p className="mt-6 text-lg text-gray-300">Na Sessão de Alinhamento Emocional Financeiro, você vai finalmente entender <span className="font-bold">O PORQUÊ</span> do padrão, e <span className="font-bold">O COMO</span> sair dele.</p>
                    <div className="mt-10 flex justify-center">
                        <CTAButton>Quero minha Sessão de Alinhamento</CTAButton>
                    </div>
                </section>

                {/* Dobra 3 */}
                <section>
                    <h2 className="text-3xl font-bold text-center text-white mb-10">O que você vai destravar na Sessão de Alinhamento Emocional Financeiro:</h2>
                    <ul className="space-y-6 max-w-2xl mx-auto">
                        {['Seu padrão emocional financeiro atual', 'Identificação dos gatilhos emocionais', 'A raiz do problema financeiro que você vive hoje', 'Estratégia prática para romper o ciclo', 'Seu mapa de libertação emocional e financeira'].map((item, index) => (
                             <li key={index} className="flex items-start p-4 bg-gray-800/50 rounded-md">
                                <svg className="h-7 w-7 text-amber-400 mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{item}</h3>
                                    <p className="text-gray-400 mt-1">{
                                        [
                                            "Com base no teste, você terá uma análise objetiva do que realmente está guiando suas escolhas.",
                                            "As emoções que te levam ao impulso, ao medo, à paralisia, ao excesso de controle ou à fuga do dinheiro.",
                                            "A causa emocional por trás do comportamento financeiro repetitivo.",
                                            "Um plano de ação emocional + financeiro que você começa a aplicar na mesma semana.",
                                            "Um plano de 3 passos para reorganizar sua vida financeira sem sofrimento e sem hacks mirabolantes."
                                        ][index]
                                    }</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                     <div className="mt-12 flex justify-center">
                        <CTAButton>Quero romper meu padrão emocional</CTAButton>
                    </div>
                </section>

                {/* Dobra 4 */}
                <section className="bg-[#112240] p-8 rounded-lg border border-gray-700 flex flex-col md:flex-row items-center gap-8">
                    <img src="https://picsum.photos/seed/adrianajuwer/200/200" alt="Adriana Juwer" className="w-48 h-48 rounded-full object-cover border-4 border-amber-400 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold text-amber-400">Quem vai conduzir sua sessão:</h3>
                        <h2 className="text-4xl font-bold text-white mt-1">Adriana Juwer</h2>
                        <p className="mt-4 text-lg text-gray-300">Mentora, consultora e especialista em Inteligência Emocional Financeira pela Panther Consultoria. Ela une ciência, educação e tecnologia para transformar sua relação com o dinheiro.</p>
                        <p className="mt-4 text-gray-400">Adriana ajuda funcionários públicos, gerentes, diretores, executivos e empresários — pessoas que GANHAM BEM, mas que continuam presas emocionalmente a padrões que drenam a prosperidade.</p>
                         <div className="mt-8 flex justify-start">
                            <CTAButton>Quero falar com a Adriana</CTAButton>
                        </div>
                    </div>
                </section>
                
                {/* Dobra 5 & 6 */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-white">O ciclo financeiro que você vive hoje tem uma causa.<br/>E você acabou de dar o primeiro passo para mudá-la.</h2>
                    <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">Você já sabe o que não funciona. Nada muda porque a causa não está no comportamento. Está na emoção que antecede a decisão. Com a Sessão de Alinhamento, você não recebe conselhos genéricos. Você recebe clareza, diagnóstico e uma rota de saída definitiva.</p>
                    <div className="mt-10 flex justify-center">
                        <CTAButton className="w-full md:w-auto">Quero minha Sessão de Alinhamento Emocional Financeiro</CTAButton>
                    </div>
                    <p className="mt-8 text-sm text-gray-500 max-w-2xl mx-auto italic">A sessão é individual, sigilosa e 100% personalizada com base no seu teste. Você vai sair com clareza, direção e um plano emocional-financeiro aplicável imediatamente.</p>
                </section>

            </div>
        </div>
    );
};

const ResultDisqualified: React.FC = () => {
    const { userData, score, profileDetails } = useAppContext();
    if (!userData || !profileDetails) return null;
    
    return (
        <div className="w-full max-w-3xl mx-auto">
             <ResultHeader name={userData.name} score={score} title={profileDetails.title} description={profileDetails.description} />
        </div>
    );
};

const ResultPage: React.FC = () => {
  const { isQualified } = useAppContext();
  return isQualified ? <ResultQualified /> : <ResultDisqualified />;
};

export default ResultPage;
