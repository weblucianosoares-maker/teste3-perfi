import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8">
      <div className="text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Panther Inteligência Emocional Financeira. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
