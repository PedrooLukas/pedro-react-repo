import React from 'react'
import { FaGithub } from 'react-icons/fa';


const Projects = () => {
  return (
    <div id='projetos'>
      <h2 className='text-center text-white font-bold text-[35px] mt-[18rem] mb-[2rem]'>Meus Projetos</h2>
      <div className='text-start w-full bg-[#B4C2D1] rounded-2xl p-5 mb-[3rem]'>
        <h3 className='text-[#316370] text-[24px] font-extrabold mb-1'>Gerador de QR Code</h3>
        <p className='mb-1'>Gera um QR Code baseado no link colado!</p>
        <div className='flex gap-2 mb-1'>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>HTML</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>CSS</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>JavaScript</span>
        </div>
        <div>
          <a className='flex gap-2 items-center mt-5' href="https://github.com/PedrooLukas/QR-Code-Generator">Veja no GitHub <FaGithub /> </a>
        </div>
      </div>
      <div className='text-start w-full bg-[#B4C2D1] rounded-2xl p-5 mb-[3rem]'>
        <h3 className='text-[#316370] text-[24px] font-extrabold mb-1'>Meu portfólio </h3>
        <p className='mb-1'>Meus portfólio pessoal, onde aprensento os meus projetos desenvolvidos.</p>
        <div className='flex gap-2 mb-1'>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>HTML</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>CSS</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>React</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>Tailwind</span>
          
        </div>
        <div>
          <a className='flex gap-2 items-center mt-5' href="">Veja no GitHub <FaGithub /> </a>
        </div>
      </div>
      <div className='text-start w-full bg-[#B4C2D1] rounded-2xl p-5 mb-[3rem]'>
        <h3 className='text-[#316370] text-[24px] font-extrabold mb-1'>Previsão do clima</h3>
        <p className='mb-1'>Um simples e prático sistema que mostra a previsão do clima atual e dos próximos 5 dias.</p>
        <div className='flex gap-2 mb-1'>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>HTML</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>CSS</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>Tailwind</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>React</span>
        </div>
        <div>
          <a className='flex gap-2 items-center mt-5' href="https://github.com/PedrooLukas/Previs-o-do-Clima">Veja no GitHub <FaGithub /> </a>
        </div>
      </div>
            <div className='text-start w-full bg-[#B4C2D1] rounded-2xl p-5 mb-[3rem]'>
        <h3 className='text-[#316370] text-[24px] font-extrabold mb-1'>Em breve...</h3>
        <p className='mb-1'>...</p>
        <div className='flex gap-2 mb-1'>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>HTML</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>CSS</span>
          <span className='bg-[#1CB5E0] p-1.5 text-[#316370] rounded-2xl hover:bg-[#1698bd]'>JavaScript</span>
        </div>
        <div>
          <a className='flex gap-2 items-center mt-5' href="">Veja no GitHub <FaGithub /> </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
