export default function Banner() {
  return (
    <div className="flex flex-wrap">
      
      {/* Moeda à esquerda */}
      <img
        src="https://facilita-banner-images.s3.sa-east-1.amazonaws.com/banner-promo/moeda+esquerda+baixo.png"
        className="absolute top-[190px] left-[1px] sm:right-[-120px] sm:bottom-[-40px] h-[80px] sm:h-[140px]"
        alt="Moeda"
      />

      {/* Seção Branca */}
      <div className="bg-white w-full sm:w-[40%] flex flex-col items-center justify-center p-4 sm:p-8">
          
        <div className="py-5 flex flex-col items-center text-center sm:text-left">
          <h1 className="text-2xl sm:text-7xl font-bold text-black leading-tight">
            OFERTA<br/> <span className="text-[#0367fd]">VÁLIDA</span>
          </h1>
          <p className="text-3xl text-black font-bold">POR POUCOS DIAS</p>
          
          <button className="mt-4 bg-gradient-to-r from-[#19136d] to-[#0201f3] text-white font-semibold py-3 px-6 rounded-lg">
            QUERO MUDAR PARA O PREMIUM
          </button>
          
        </div>
     
      </div>
       
       {/*Seção da Imagem*/}
      <div className="absolute top-[26.6%] left-[calc(35%-50px)] transform -translate-y-1/2 z-20">
        <img className="max-w-[347px]"
        src="https://facilita-banner-images.s3.sa-east-1.amazonaws.com/banner-promo/erikk.png"
        />
       </div>
        
      {/* Seção Azul */}
      <div className="bg-gradient-to-r from-[#19136d] to-[#0201f3] w-full sm:w-[40%] flex-1 flex flex-col items-center p-4 sm:p-8">
        
        <div>
          <p className="text-white text-3xl pt-10 pr-10">
            Prepare seu escritório para entrar em <br />
            uma nova fase com o <strong>Pacote Premium!</strong>
          </p>
          <p className="text-center py-10 pr-16 font-bold text-3xl">
            Adquira <span className="font-extralight">hoje</span> com 10% OFF<br />
            + 1 antecipação de 24 horas.
          </p>
        </div>

      </div>
      {/* Moedas à direita */}
      <img
        src="https://facilita-banner-images.s3.sa-east-1.amazonaws.com/banner-promo/moeda+direita+cima.png"
        className="absolute top-[-2px] left-[1326px] sm:right-[-120px] sm:bottom-[-40px] h-[0px] sm:h-[110px]"
        alt="Moeda"
      />

      <img
        src="https://facilita-banner-images.s3.sa-east-1.amazonaws.com/banner-promo/moeda+direta+baixo.png"
        className="absolute top-[210px] left-[1190px] sm:right-[-120px] sm:bottom-[-40px] h-[80px] sm:h-[140px]"
        alt="Moeda"
      />
    </div>
  );
}
