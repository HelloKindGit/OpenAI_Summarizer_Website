import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center mb-12 pt-4">
        <img src={logo} alt="suma_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open('https://github.com/HelloKindGit/openai_summarizer_website')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Einfach Texte zusammenfassen mit <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT</span>
      </h1>
      <h2 className="desc">Vereinfachen Sie ihre Texte mit dieser simplen Open-Source Variante</h2>
    </header>
  );
};

export default Hero;
