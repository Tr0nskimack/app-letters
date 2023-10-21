import React, { useState } from "react";

export const Home = () => {
  const [texto, setTexto] = useState("");
  const [convertirTodas, setConvertirTodas] = useState(true);
  const [copied, setCopied] = useState(false);
  
  
  const convertirMayusculas = () => {
    setTexto(
      convertirTodas
        ? texto.toUpperCase()
        : texto
            .split(" ")
            .map((palabra) => palabra[0].toUpperCase() + palabra.slice(1))
            .join(" ")
    );
  };
  const capitalizeText = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(texto);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className=" flex flex-col justify-center items-center min-h-screen gap-4 h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
    
      <div className="w-full flex justify-center">
        <input
          className="outline-none p-4 rounded-md w-2/4 hover:shadow-2xl transition duration-500"
          type="text"
          placeholder="Escribe el texto que deseas convertir"
          onChange={(event) => setTexto(event.target.value)}
        />
      </div>

      <div className="flex justify-center items-center gap-4">
        <div>
          <input
            type="checkbox"
            id="convertirTodas"
            checked={convertirTodas}
            onChange={(event) => setConvertirTodas(event.target.checked)}
          />
          <label className="text-gray-300 font-medium" htmlFor="convertirTodas">
            Convertir MAYUSCULAS / Letra Capital
          </label>
        </div>
        <div className="flex gap-4">
          <button
            className="bg-green-500 px-4 py-2 rounded-md text-gray-900 font-medium"
            onClick={convertirMayusculas}
          >
            CONVERTIR
          </button>
          
        </div>
      </div>

      <div className="bg-gray-100 w-2/4 rounded-md ">
        <div className="px-20 rounded-md bg-green-100">
          <div className="bg-white p-8 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500">
            <div className="text-2xl text-gray-800 font-semibold mb-3 bg-gray-100 overflow-hidden">
              
              
              <p className="white-space: nowrap">{texto}</p>
            </div>
            
            <p className="text-gray-600 leading-6 tracking-normal"></p>
            <button onClick={copyToClipboard} className="py-2 px-4 mt-8 bg-indigo-600 text-white rounded-md shadow-xl ">
            {copied ? 'Copiado!' : 'Copiar'}
            </button>
            {/* <div>
              <span className="absolute py-2 px-8 text-sm text-white top-0 right-0 bg-indigo-600 rounded-md transform translate-x-2 -translate-y-3 shadow-xl">
                Nuevo
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
