
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const FECHA_BODA = "2026-11-14T13:00:00-06:00";

// ==========================================
// CALCULAR TIEMPO RESTANTE
// ==========================================

const calcularTiempo = (fecha) => {
  const diferencia = new Date(fecha).getTime() - Date.now();

  if (!Number.isFinite(diferencia) || diferencia <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  }

  return {
    dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diferencia / (1000 * 60)) % 60),
    segundos: Math.floor((diferencia / 1000) % 60),
  };
};

// ==========================================
// DECORACIÓN BOTÁNICA
// ==========================================

const RamaOlivo = ({ className = "", invertida = false }) => (
  <svg
    viewBox="0 0 200 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
    style={{
      transform: invertida ? "scaleX(-1)" : "none",
    }}
  >
    {/* TALLO PRINCIPAL */}
    <path
      d="M18 230 C 38 175, 75 125, 155 20"
      stroke="#657052"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* RAMAS */}
    <g stroke="#657052" strokeWidth="1.2">
      <path d="M45 181 Q 17 160 18 127" />
      <path d="M61 154 Q 104 159 128 126" />
      <path d="M82 124 Q 53 100 56 67" />
      <path d="M108 91 Q 151 100 177 69" />
      <path d="M129 58 Q 112 35 123 12" />
    </g>

    {/* HOJAS */}
    <g fill="#788568" opacity="0.85">
      <ellipse cx="23" cy="145" rx="8" ry="21" transform="rotate(-22 23 145)" />
      <ellipse cx="37" cy="173" rx="7" ry="18" transform="rotate(-55 37 173)" />
      <ellipse cx="103" cy="145" rx="8" ry="22" transform="rotate(55 103 145)" />
      <ellipse cx="125" cy="130" rx="7" ry="19" transform="rotate(43 125 130)" />
      <ellipse cx="60" cy="82" rx="8" ry="22" transform="rotate(-15 60 82)" />
      <ellipse cx="77" cy="111" rx="7" ry="18" transform="rotate(-50 77 111)" />
      <ellipse cx="151" cy="85" rx="8" ry="21" transform="rotate(55 151 85)" />
      <ellipse cx="173" cy="70" rx="7" ry="18" transform="rotate(43 173 70)" />
      <ellipse cx="124" cy="28" rx="7" ry="19" transform="rotate(-10 124 28)" />
      <ellipse cx="148" cy="32" rx="7" ry="20" transform="rotate(37 148 32)" />
    </g>

    {/* FLORES BLANCAS */}
    <g transform="translate(52 185)">
      <ellipse cx="0" cy="-10" rx="6" ry="11" fill="#FFFDF6" />
      <ellipse cx="10" cy="-2" rx="6" ry="11" transform="rotate(72 10 -2)" fill="#FFFDF6" />
      <ellipse cx="6" cy="10" rx="6" ry="11" transform="rotate(144 6 10)" fill="#FFFDF6" />
      <ellipse cx="-7" cy="9" rx="6" ry="11" transform="rotate(216 -7 9)" fill="#FFFDF6" />
      <ellipse cx="-11" cy="-3" rx="6" ry="11" transform="rotate(288 -11 -3)" fill="#FFFDF6" />
      <circle cx="0" cy="0" r="4" fill="#D2C59A" />
    </g>

    <g transform="translate(126 105) scale(0.75)">
      <ellipse cx="0" cy="-10" rx="6" ry="11" fill="#FFFDF6" />
      <ellipse cx="10" cy="-2" rx="6" ry="11" transform="rotate(72 10 -2)" fill="#FFFDF6" />
      <ellipse cx="6" cy="10" rx="6" ry="11" transform="rotate(144 6 10)" fill="#FFFDF6" />
      <ellipse cx="-7" cy="9" rx="6" ry="11" transform="rotate(216 -7 9)" fill="#FFFDF6" />
      <ellipse cx="-11" cy="-3" rx="6" ry="11" transform="rotate(288 -11 -3)" fill="#FFFDF6" />
      <circle cx="0" cy="0" r="4" fill="#D2C59A" />
    </g>
  </svg>
);

// ==========================================
// COMPONENTE CONTADOR
// ==========================================

export default function Contador({
  titulo = "FALTAN",
  subtitulo = "para nuestro gran día",
  texto = "Hay momentos que marcan la vida, y este es uno de ellos...",
  fecha = FECHA_BODA,
}) {
  const [tiempo, setTiempo] = useState(null);

  useEffect(() => {
    const actualizar = () => {
      setTiempo(calcularTiempo(fecha));
    };

    actualizar();

    const intervalo = setInterval(actualizar, 1000);

    return () => clearInterval(intervalo);
  }, [fecha]);

  const unidades = [
    { label: "Días", valor: tiempo?.dias ?? 0 },
    { label: "Horas", valor: tiempo?.horas ?? 0 },
    { label: "Minutos", valor: tiempo?.minutos ?? 0 },
    { label: "Segundos", valor: tiempo?.segundos ?? 0 },
  ];

  return (
    <section
      id="contador"
      className="
        relative isolate
        flex min-h-[580px]
        w-full items-center
        justify-center
        overflow-hidden
        bg-[#F7F5ED]
        px-4 py-24
        text-[#252A20]
        sm:min-h-[650px]
        sm:px-8
        sm:py-28
        lg:min-h-[750px]
      "
    >
      {/* ======================================
          TEXTURA SUAVE DE FONDO
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.35]
        "
        style={{
          backgroundImage:
            "radial-gradient(#B5B9A9 0.5px, transparent 0.5px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* ======================================
          DECORACIÓN BOTÁNICA
      ====================================== */}

 

      <RamaOlivo
        invertida
        className="
          pointer-events-none
          absolute -right-12 -top-12
          w-[160px]
          rotate-180
          opacity-45
          sm:-right-10
          sm:w-[240px]
          lg:w-[310px]
          lg:opacity-65
        "
      />

      {/* ======================================
          CONTENIDO
      ====================================== */}

      <div
        className="
          relative z-10
          mx-auto w-full
          max-w-5xl
          text-center
        "
      >
        {/* TÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            font-playfair
            text-[16px]
            uppercase
            tracking-[0.3em]
            text-[#252A20]
            sm:text-[20px]
            sm:tracking-[0.4em]
            lg:text-[24px]
          "
        >
          {titulo}
        </motion.p>

        {/* SUBTÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            mt-3
            font-cormorant
            text-[31px]
            font-normal italic
            leading-tight
            text-[#414B32]
            sm:text-[42px]
            lg:text-[49px]
          "
        >
          {subtitulo}
        </motion.h2>

        {/* ======================================
            CONTADOR HORIZONTAL
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="
            mx-auto mt-14
            grid w-full max-w-[760px]
            grid-cols-4
            sm:mt-20
          "
        >
          {unidades.map((unidad, index) => (
            <div
              key={unidad.label}
              className={`
                relative flex min-w-0
                flex-col items-center
                justify-center
                px-1
                sm:px-4
                ${
                  index !== 0
                    ? "border-l border-[#8C947C]/50"
                    : ""
                }
              `}
            >
              {/* NÚMERO */}
              <span
                className="
                  font-cormorant
                  text-[clamp(2rem,8vw,4.5rem)]
                  font-light
                  leading-none
                  tabular-nums
                  tracking-[-0.04em]
                  text-[#252A20]
                "
              >
                {String(unidad.valor).padStart(2, "0")}
              </span>

              {/* UNIDAD */}
              <span
                className="
                  mt-3
                  font-playfair
                  text-[9px]
                  tracking-[0.01em]
                  text-[#414B32]
                  min-[380px]:text-[11px]
                  sm:mt-4
                  sm:text-sm
                "
              >
                {unidad.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ======================================
            ORNAMENTO CENTRAL
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mx-auto mt-16
            flex items-center
            justify-center gap-4
            sm:mt-20
          "
        >
          <span className="h-px w-14 bg-[#8C947C]/70 sm:w-20" />

          <svg
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 10H30M16 10C10 6 10 3 14 3C18 3 16 8 16 10ZM16 10C22 6 22 3 18 3C14 3 16 8 16 10Z"
              stroke="#657052"
              strokeWidth="1.2"
            />
            <path
              d="M10 10L6 6M22 10L26 6M10 10L6 14M22 10L26 14"
              stroke="#657052"
              strokeWidth="1.2"
            />
          </svg>

          <span className="h-px w-14 bg-[#8C947C]/70 sm:w-20" />
        </motion.div>

        {/* ======================================
            FRASE ROMÁNTICA
        ====================================== */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.6,
          }}
          className="
            mx-auto mt-10
            max-w-[280px]
            font-playfair
            text-[12px]
            uppercase
            leading-[2]
            tracking-[0.14em]
            text-[#414B32]
            sm:max-w-[470px]
            sm:text-[15px]
            sm:tracking-[0.2em]
          "
        >
          {texto}
        </motion.p>
      </div>
    </section>
  );
}
