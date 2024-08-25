// components/Banner.js

export default function Banner() {
  return (
    <div className="relative w-full h-64 sm:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/BANNER-PROMOCAO.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-700 opacity-70"></div>
      <div className="relative z-10 flex items-center justify-between h-full px-6 sm:px-12">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            OFERTA <span className="text-blue-400">VÁLIDA</span> <br />
            POR POUCOS DIAS
          </h1>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
            QUERO MUDAR PARA O PREMIUM
          </button>
        </div>
        <div className="text-right text-white">
          <p className="text-lg sm:text-2xl">
            Prepare seu escritório para entrar em <br />
            uma nova fase com o <strong>Pacote Premium!</strong>
          </p>
          <p className="mt-4 text-2xl sm:text-3xl font-bold">
            Adquira hoje com <span className="text-yellow-400">10% OFF</span><br />
            + 1 antecipação de 24 horas.
          </p>
        </div>
      </div>
    </div>
  );
}
