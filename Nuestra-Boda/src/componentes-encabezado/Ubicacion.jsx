
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  MapPin,
  Clock3,
  Trees,
  Heart,
  ArrowUpRight,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const FECHA = {
  dia: "14",
  mes: "NOVIEMBRE",
  anio: "2026",
};

const LUGARES = [
  {
    id: "ceremonia",
    tipo: "Ceremonia religiosa",
    nombre: "Santuario Diocesano de Nuestra Señora de la Soledad",
    hora: "1:00 P. M.",
    direccion: "Centro, Irapuato, Guanajuato",
    ubicacion: "https://maps.app.goo.gl/xySV7BDx7mhrFeQi7",
    Icono: Church,
  },
  {
    id: "recepcion",
    tipo: "Recepción",
    nombre: 'Jardines Castillo Santa Rosa "Montecristo"',
    hora: "4:00 P. M.",
    direccion: "Carretera San Roque Km 5, Irapuato, Guanajuato",
    ubicacion: "https://maps.app.goo.gl/iEUTXZcGDxTNmJ4z6",
    Icono: Trees,
  },
];

// ==========================================
// ORNAMENTO CLÁSICO
// ==========================================

const Ornamento = () => (
  <div
    aria-hidden="true"
    className="flex items-center justify-center gap-3"
  >
    <span className="h-px w-12 bg-[#899478]/55" />

    <svg width="30" height="18" viewBox="0 0 30 18" fill="none">
      <path
        d="M1 9H29M15 9C10 5 10 2 13 2C16 2 15 7 15 9ZM15 9C20 5 20 2 17 2C14 2 15 7 15 9Z"
        stroke="#657052"
        strokeWidth="1.2"
      />
      <path
        d="M9 9L5 5M21 9L25 5M9 9L5 13M21 9L25 13"
        stroke="#657052"
        strokeWidth="1"
      />
    </svg>

    <span className="h-px w-12 bg-[#899478]/55" />
  </div>
);

// ==========================================
// RAMAS DECORATIVAS
// ==========================================

const RamaOlivo = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 200 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <path
      d="M12 242C40 180 70 120 180 8"
      stroke="#657052"
      strokeWidth="1.7"
      strokeLinecap="round"
    />

    <g stroke="#657052" strokeWidth="1.1">
      <path d="M43 183Q14 158 18 128" />
      <path d="M65 151Q108 166 133 129" />
      <path d="M89 118Q58 91 62 61" />
      <path d="M120 79Q156 91 183 59" />
    </g>

    <g fill="#89977A" opacity="0.85">
      <ellipse cx="22" cy="145" rx="8" ry="21" transform="rotate(-22 22 145)" />
      <ellipse cx="42" cy="178" rx="7" ry="19" transform="rotate(-50 42 178)" />
      <ellipse cx="109" cy="145" rx="8" ry="22" transform="rotate(50 109 145)" />
      <ellipse cx="132" cy="128" rx="7" ry="19" transform="rotate(43 132 128)" />
      <ellipse cx="65" cy="78" rx="8" ry="22" transform="rotate(-15 65 78)" />
      <ellipse cx="84" cy="109" rx="7" ry="18" transform="rotate(-45 84 109)" />
      <ellipse cx="157" cy="77" rx="8" ry="20" transform="rotate(50 157 77)" />
      <ellipse cx="181" cy="60" rx="7" ry="18" transform="rotate(45 181 60)" />
    </g>

    <g transform="translate(52 187)">
      <ellipse cy="-10" rx="6" ry="12" fill="#FFFDF7" />
      <ellipse cx="10" cy="-2" rx="6" ry="12" transform="rotate(72 10 -2)" fill="#FFFDF7" />
      <ellipse cx="6" cy="10" rx="6" ry="12" transform="rotate(144 6 10)" fill="#FFFDF7" />
      <ellipse cx="-7" cy="9" rx="6" ry="12" transform="rotate(216 -7 9)" fill="#FFFDF7" />
      <ellipse cx="-11" cy="-3" rx="6" ry="12" transform="rotate(288 -11 -3)" fill="#FFFDF7" />
      <circle r="4" fill="#D5C69C" />
    </g>
  </svg>
);

// ==========================================
// TARJETA DE UBICACIÓN
// ==========================================

const TarjetaLugar = ({ lugar, index }) => {
  const Icono = lugar.Icono;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative flex h-full min-w-0
        flex-col items-center
        overflow-hidden
        border border-[#A6AE99]/55
        bg-[#FDFBF5]
        px-5 py-10
        text-center
        shadow-[0_15px_45px_rgba(49,59,38,0.07)]
        sm:px-9 sm:py-12
      "
    >
      {/* MARCO INTERIOR */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-[7px]
          border border-[#A6AE99]/25
        "
      />

      {/* ILUSTRACIÓN SUPERIOR */}
      <div
        className="
          relative mb-7
          flex h-[100px] w-[100px]
          items-center justify-center
          rounded-full
          border border-[#A6AE99]/40
          bg-[#E9EBDD]/55
          sm:h-[115px] sm:w-[115px]
        "
      >
        <div
          className="
            absolute inset-[7px]
            rounded-full
            border border-[#A6AE99]/35
          "
        />
        <Icono
          size={47}
          strokeWidth={1}
          className="text-[#414B32]"
        />
      </div>

      {/* TIPO DE EVENTO */}
      <p
        className="
          mb-3 font-playfair
          text-[11px]
          uppercase tracking-[0.22em]
          text-[#657052]
          sm:text-xs
        "
      >
        {lugar.tipo}
      </p>

      {/* NOMBRE DEL LUGAR */}
      <h3
        className="
          max-w-[360px]
          font-cormorant
          text-[clamp(1.9rem,6vw,2.65rem)]
          font-medium
          leading-[1.1]
          text-[#30392A]
        "
      >
        {lugar.nombre}
      </h3>

      {/* SEPARADOR */}
      <div className="my-6">
        <Ornamento />
      </div>

      {/* HORA */}
      <div className="flex items-center justify-center gap-2">
        <Clock3
          size={16}
          strokeWidth={1.4}
          className="text-[#657052]"
        />
        <span
          className="
            font-cormorant
            text-[29px]
            font-medium
            text-[#414B32]
          "
        >
          {lugar.hora}
        </span>
      </div>

      {/* DIRECCIÓN */}
      <p
        className="
          mx-auto mt-5
          max-w-[320px]
          font-playfair
          text-[12px]
          leading-[1.9]
          text-[#626B59]
          sm:text-[13px]
        "
      >
        {lugar.direccion}
      </p>

      {/* ESPACIO FLEXIBLE */}
      <div className="flex-1" />

      {/* BOTÓN DE UBICACIÓN */}
      <a
        href={lugar.ubicacion}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver ubicación de ${lugar.nombre} en Google Maps`}
        className="
          relative z-10
          mt-9 inline-flex
          min-h-12 w-full
          max-w-[260px]
          items-center justify-center
          gap-2 rounded-full
          bg-[#414B32]
          px-6 py-3
          font-playfair
          text-[11px]
          uppercase tracking-[0.14em]
          text-white
          transition-all duration-300
          hover:-translate-y-0.5
          hover:bg-[#566344]
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#414B32]
          sm:text-xs
        "
      >
        <MapPin size={15} strokeWidth={1.5} />
        Ver ubicación
        <ArrowUpRight size={14} strokeWidth={1.5} />
      </a>
    </motion.article>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Celebracion() {
  return (
    <section
      id="celebracion"
      className="
        relative isolate
        w-full overflow-hidden
        bg-[#F7F5ED]
        px-4 py-20
        sm:px-8 sm:py-28
        lg:py-32
      "
    >
      {/* TEXTURA SUAVE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.2]
        "
        style={{
          backgroundImage:
            "radial-gradient(#A9B49A 0.5px, transparent 0.5px)",
          backgroundSize: "9px 9px",
        }}
      />

      {/* DECORACIONES BOTÁNICAS */}
      <RamaOlivo
        className="
          pointer-events-none
          absolute -left-16 -top-16
          w-[175px] opacity-45
          sm:w-[260px]
          lg:w-[340px]
        "
        style={{ transform: "rotate(155deg)" }}
      />

      <RamaOlivo
        className="
          pointer-events-none
          absolute -bottom-20 -right-14
          w-[190px] opacity-50
          sm:w-[280px]
          lg:w-[360px]
        "
        style={{ transform: "scaleX(-1)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p
            className="
              font-playfair
              text-[10px]
              uppercase tracking-[0.3em]
              text-[#657052]
              sm:text-xs
            "
          >
            Sonia &amp; Adrián
          </p>

          <h2
            className="
              mt-5 font-cormorant
              text-[clamp(2.9rem,9vw,5rem)]
              font-normal
              uppercase
              leading-none
              tracking-[0.04em]
              text-[#30392A]
            "
          >
            ¡Nos casamos!
          </h2>

          <p
            className="
              mx-auto mt-6
              max-w-[450px]
              font-cormorant
              text-[22px] italic
              leading-snug
              text-[#657052]
              sm:text-[27px]
            "
          >
            Y queremos compartir este día tan especial contigo.
          </p>

          <div className="my-8">
            <Ornamento />
          </div>

          {/* FECHA CENTRAL */}
          <div
            className="
              mx-auto flex max-w-[340px]
              items-center justify-center
              gap-6 sm:gap-9
            "
          >
            <div className="flex flex-col items-center">
              <span
                className="
                  font-cormorant
                  text-[70px]
                  leading-none
                  text-[#30392A]
                  sm:text-[90px]
                "
              >
                {FECHA.dia}
              </span>
              <span
                className="
                  font-playfair
                  text-[11px]
                  uppercase tracking-[0.2em]
                  text-[#657052]
                "
              >
                {FECHA.mes}
              </span>
              <span
                className="
                  mt-1 font-playfair
                  text-[12px]
                  text-[#657052]
                "
              >
                {FECHA.anio}
              </span>
            </div>

            <div className="h-24 w-px bg-[#9AA58C]/60" />

            <div className="text-left">
              <p
                className="
                  font-cormorant
                  text-[29px]
                  italic
                  text-[#414B32]
                  sm:text-[34px]
                "
              >
                Nuestro gran día
              </p>
              <p
                className="
                  mt-2 font-playfair
                  text-[11px]
                  uppercase tracking-[0.13em]
                  leading-relaxed
                  text-[#657052]
                "
              >
                Ceremonia y recepción
              </p>
            </div>
          </div>
        </motion.div>

        {/* UBICACIONES */}
        <div
          className="
            mx-auto mt-14
            grid max-w-5xl
            grid-cols-1
            items-stretch
            gap-7
            md:mt-20
            md:grid-cols-2
            md:gap-8
          "
        >
          {LUGARES.map((lugar, index) => (
            <TarjetaLugar
              key={lugar.id}
              lugar={lugar}
              index={index}
            />
          ))}
        </div>

        {/* FRASE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Heart
            size={17}
            strokeWidth={1.2}
            className="mx-auto mb-4 text-[#657052]"
          />

          <p
            className="
              mx-auto max-w-[460px]
              font-cormorant
              text-[24px]
              italic leading-relaxed
              text-[#414B32]
              sm:text-[29px]
            "
          >
            El mejor lugar será aquel donde estemos juntos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
