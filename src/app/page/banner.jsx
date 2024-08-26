export default function Banner() {
  return (
    <div className="w-full flex flex-wrap">
      {/* Moeda à esquerda */}
      {/* <img
        src="https://facilita-banner-images.s3.sa-east-1.amazonaws.com/banner-promo/moeda+esquerda+baixo.png"
        className="hidden lg:block absolute top-[140px] left-[1px] sm:right-[120px] sm:bottom-[-40px] h-[80px] sm:h-[110px]"
        alt="Moeda"
      /> */}

      {/* Seção Branca */}
      <div className="bg-white w-full sm:w-[40%] flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="py-5 flex flex-col items-center text-center sm:text-left">
          <h1 className="text-4xl font-bold text-black leading-tight">
            OFERTA
            <br /> <span className="text-[#1a15be]">VÁLIDA</span>
          </h1>
          <p className="text-xl text-black font-bold">POR POUCOS DIAS</p>

          <button className="mt-4 bg-gradient-to-r from-[#19136d] to-[#0201f3] text-sm text-white font-semibold py-3 px-6 rounded-lg">
            QUERO MUDAR PARA O PREMIUM
          </button>
        </div>
      </div>

      {/*Seção da Imagem*/}
      <div className="hidden lg:block absolute right-[49%]">
        <img
          className="max-w-[278px]"
          src="https://facilita-banner-images.s3.sa-east-1.amazonaws.com/banner-promo/erikk.png"
        />
      </div>

      {/* Seção Azul */}
      <div className="bg-gradient-to-r from-[#19136d] to-[#0201f3] flex flex-1">
        <div className="w-full">
          <div className="text-center items-center px-2 mt-10">
            <p className="text-2xl">
              Prepare seu escritório para entrar em <br />
              uma nova fase com o <strong>Pacote Premium!</strong>
            </p>
          </div>
          <div>
            <p className="text-center py-10 px-14 font-bold text-2xl">
              Adquira hoje com 10% OFF
              <br />+ 1 antecipação de 24 horas.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          {/* <img
            src="https://facilita-landing-page.s3.sa-east-1.amazonaws.com/moeda+premium.png"
            className="hidden absolute lg:block h-[25%] left-[87%] top-[10%]"
            alt="Moeda"
          /> */}
        </div>
          {/* <img
            src="https://facilita-banner-images.s3.sa-east-1.amazonaws.com/banner-promo/moeda+direta+baixo.png"
            className="
              hidden lg:block top-[50%] left-[110%]
              sm:right-[-120px] sm:bottom-[-40px] h-[80px] sm:h-[50px]
              md:right-[-120px] md:bottom-[-40px] md:h-[100px]
              lg:right-[-120px] lg:bottom-[-40px] lg:h-[100px]
              "
            alt="Moeda"
          /> */}
      </div>

      {/* Moedas à direita */}
    </div>
  );
}
