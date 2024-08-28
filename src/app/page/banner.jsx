'use client'
import {useRouter} from 'next/navigation'

export default function BannerPremiumPackagePromotion() {
  const router = useRouter ()

  const handleClick = () => {
    router.push('https://facilita-juridico.firebaseapp.com/checkout/package/23')
  }
  return (
    <div className="relative overflow-hidden w-full flex flex-wrap">
      {/* Moeda à esquerda */}
      

      {/* Seção Branca */}
      <div className="relative w-full h-full overflow-hidden bg-white sm:w-[40%] flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="py-5 flex flex-col items-center text-center sm:text-left">
          <h1 className="text-4xl font-bold text-black leading-tight">
            OFERTA
            <br /> <span className="text-[#1a15be]">VÁLIDA</span>
          </h1>
          <p className="text-xl text-black font-bold">POR POUCOS DIAS</p>

          <button 
          onClick={handleClick}
          className="mt-4 bg-gradient-to-r from-[#19136d] to-[#0201f3] text-sm text-white font-semibold py-3 px-6 rounded-lg">
            QUERO MUDAR PARA O PREMIUM
          </button>
          {/* Moeda da esquerda */}
          <img
          src="https://facilita-landing-page.s3.sa-east-1.amazonaws.com/images/moeda-dourada.png"
          className="rotate-[17deg] hidden absolute lg:block h-[50%] left-[-8%] top-[47%] blur-[1.5px]"
          alt="Moeda"
      />
        </div>
        
      </div>

      {/*Seção da Imagem*/}
      <div className="hidden lg:block absolute right-[48%] top-[-10%]">
        <img
          className="max-w-[350px]"
          src="https://facilita-landing-page.s3.sa-east-1.amazonaws.com/images/Lucila.png"
        />
      </div>

      {/* Seção Azul */}
      <div className="bg-gradient-to-r from-[#19136d] to-[#0201f3] flex flex-1">
        <div className="relative h-full w-full overflow-hidden">
          <div className="text-center items-center px-2 mt-10">
            <p className="text-2xl text-white">
              Prepare seu escritório para entrar em <br />
              uma nova fase com o <strong>Pacote Premium!</strong>
            </p>
          </div>
          <div>
            <p className="text-center py-10 px-14 font-bold text-2xl">
              Adquira hoje com <span className="text-4xl">10% OFF</span>
              <br />+ 1 antecipação de 24 horas.
            </p>
            
          </div>

          {/* Moedas da direita */}
          <div>
            <img
              src="https://facilita-landing-page.s3.sa-east-1.amazonaws.com/images/moeda-dourada.png"
              className="hidden absolute lg:block h-[95%] left-[68%] top-[46%] blur-[1.5px]"
              alt="Moeda"
            />
            <img
              src="https://facilita-landing-page.s3.sa-east-1.amazonaws.com/images/moeda-dourada.png"
              className="hidden absolute lg:block h-[60%] left-[85.5%] top-[-12%] -rotate-12 blur-[3px]"
              alt="Moeda"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
