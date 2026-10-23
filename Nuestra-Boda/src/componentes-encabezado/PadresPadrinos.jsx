
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

// PADRES DE LA NOVIA
const padresNovia = {
  titulo: "PADRES DE LA NOVIA",
  madre: "Alicia Ramírez",
  padre: "Erasmo Valencia",
};

// PADRES DEL NOVIO
const padresNovio = {
  titulo: "PADRES DEL NOVIO",
  madre: "Ana Soto",
  padre: "Antonio Mendoza",
};

// TEXTOS
const textos = {
  titulo: "NUESTROS PADRES",
  descripcion:
    "CON LA BENDICIÓN DE DIOS Y EL AMOR DE NUESTRAS FAMILIAS",
  fraseFinal:
    "Nos acompañan en este nuevo capítulo de nuestra historia.",
};

// ==========================================
// ANIMACIONES
// ==========================================

const aparecer = {
  oculto: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// RAMA BOTÁNICA DECORATIVA
// ==========================================

const RamaOlivo = ({
  className = "",
  style = {},
}) => (
  <svg
    viewBox="0 0 240 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
    style={style}
  >
    {/* TALLO PRINCIPAL */}
    <path
      d="M15 290 C55 220 75 160 130 100 C165 60 190 35 225 8"
      stroke="#A9B49A"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* RAMAS */}
    <g stroke="#A9B49A" strokeWidth="1.3">
      <path d="M48 235 Q15 210 18 175" />
      <path d="M70 195 Q115 208 145 170" />
      <path d="M95 155 Q65 122 72 95" />
      <path d="M128 105 Q175 120 205 85" />
      <path d="M170 58 Q150 32 165 10" />
    </g>

    {/* HOJAS */}
    <g fill="#9EAD8A" opacity="0.85">
      <ellipse cx="22" cy="190" rx="9" ry="24" transform="rotate(-20 22 190)" />
      <ellipse cx="43" cy="225" rx="8" ry="22" transform="rotate(-50 43 225)" />
      <ellipse cx="115" cy="187" rx="9" ry="24" transform="rotate(48 115 187)" />
      <ellipse cx="142" cy="170" rx="8" ry="21" transform="rotate(48 142 170)" />
      <ellipse cx="75" cy="110" rx="9" ry="24" transform="rotate(-18 75 110)" />
      <ellipse cx="93" cy="145" rx="8" ry="20" transform="rotate(-50 93 145)" />
      <ellipse cx="178" cy="105" rx="9" ry="23" transform="rotate(50 178 105)" />
      <ellipse cx="203" cy="86" rx="8" ry="20" transform="rotate(45 203 86)" />
      <ellipse cx="164" cy="25" rx="8" ry="21" transform="rotate(-10 164 25)" />
      <ellipse cx="205" cy="27" rx="8" ry="21" transform="rotate(40 205 27)" />
    </g>

    {/* FLORES BLANCAS */}
    <g transform="translate(65 218)">
      <ellipse cx="0" cy="-14" rx="9" ry="17" fill="#F8F6EF" />
      <ellipse cx="13" cy="-5" rx="9" ry="17" transform="rotate(72 13 -5)" fill="#F8F6EF" />
      <ellipse cx="9" cy="12" rx="9" ry="17" transform="rotate(144 9 12)" fill="#F8F6EF" />
      <ellipse cx="-9" cy="12" rx="9" ry="17" transform="rotate(216 -9 12)" fill="#F8F6EF" />
      <ellipse cx="-13" cy="-5" rx="9" ry="17" transform="rotate(288 -13 -5)" fill="#F8F6EF" />
      <circle cx="0" cy="0" r="6" fill="#D9C99E" />
    </g>

    <g transform="translate(155 112) scale(0.65)">
      <ellipse cx="0" cy="-14" rx="9" ry="17" fill="#F8F6EF" />
      <ellipse cx="13" cy="-5" rx="9" ry="17" transform="rotate(72 13 -5)" fill="#F8F6EF" />
      <ellipse cx="9" cy="12" rx="9" ry="17" transform="rotate(144 9 12)" fill="#F8F6EF" />
      <ellipse cx="-9" cy="12" rx="9" ry="17" transform="rotate(216 -9 12)" fill="#F8F6EF" />
      <ellipse cx="-13" cy="-5" rx="9" ry="17" transform="rotate(288 -13 -5)" fill="#F8F6EF" />
      <circle cx="0" cy="0" r="6" fill="#D9C99E" />
    </g>
  </svg>
);

// ==========================================
// ORNAMENTO CLÁSICO
// ==========================================

const Ornamento = () => (
  <div
    aria-hidden="true"
    className="
      flex items-center
      justify-center gap-3
    "
  >
    <span className="h-px w-12 bg-[#D7DDCA]/45" />

    <svg
      width="35"
      height="18"
      viewBox="0 0 35 18"
      fill="none"
    >
      <path
        d="M1 9H34M17.5 9C11 5 11 2 15 2C19 2 17.5 7 17.5 9ZM17.5 9C24 5 24 2 20 2C16 2 17.5 7 17.5 9Z"
        stroke="#E7E8D9"
        strokeWidth="1"
      />
      <path
        d="M11 9L7 5M24 9L28 5M11 9L7 13M24 9L28 13"
        stroke="#E7E8D9"
        strokeWidth="1"
      />
    </svg>

    <span className="h-px w-12 bg-[#D7DDCA]/45" />
  </div>
);

// ==========================================
// BLOQUE DE PADRES
// ==========================================

const BloquePadres = ({ titulo, madre, padre }) => (
  <motion.div
    variants={aparecer}
    className="
      flex w-full
      flex-col items-center
      text-center
    "
  >
    {/* CATEGORÍA */}
    <h3
      className="
        mb-5
        font-playfair
        text-[11px]
        uppercase
        tracking-[0.25em]
        text-[#E8E9DB]
        sm:text-[12px]
      "
    >
      {titulo}
    </h3>

    {/* NOMBRES */}
    <div
      className="
        flex flex-col
        items-center gap-1
      "
    >
      <p
        className="
          font-cormorant
          text-[30px]
          font-normal italic
          leading-[1.15]
          text-[#F8F6EF]
          sm:text-[39px]
          md:text-[43px]
        "
      >
        {madre}
      </p>

      <span
        className="
          font-cormorant
          text-[27px]
          italic
          leading-none
          text-[#CBD3BC]
          sm:text-[32px]
        "
      >
        &amp;
      </span>

      <p
        className="
          font-cormorant
          text-[30px]
          font-normal italic
          leading-[1.15]
          text-[#F8F6EF]
          sm:text-[39px]
          md:text-[43px]
        "
      >
        {padre}
      </p>
    </div>
  </motion.div>
);

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Padres() {
  return (
    <section
      id="padres"
      className="
        relative isolate
        flex min-h-[780px]
        w-full items-center
        justify-center
        overflow-hidden
        bg-[#414B32]
        px-5 py-24
        sm:min-h-[900px]
        sm:px-8 sm:py-28
        lg:min-h-[950px]
      "
    >
      {/* ======================================
          FONDO CON TEXTURA SUTIL
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.12]
        "
        style={{
          backgroundImage:
            "radial-gradient(#E6E8D9 0.5px, transparent 0.5px)",
          backgroundSize: "9px 9px",
        }}
      />

      {/* DEGRADADO CENTRAL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(22,31,18,0.35)_100%)]
        "
      />

      {/* ======================================
          RAMAS Y FLORES DECORATIVAS
      ====================================== */}

      {/* ESQUINA SUPERIOR IZQUIERDA */}
      <RamaOlivo
        className="
          pointer-events-none
          absolute -left-16 -top-20
          w-[190px]
          opacity-60
          sm:-left-14 sm:-top-16
          sm:w-[270px]
          lg:w-[340px]
        "
        style={{
          transform: "rotate(160deg)",
        }}
      />

      {/* ESQUINA SUPERIOR DERECHA */}
      <RamaOlivo
        className="
          pointer-events-none
          absolute -right-16 -top-16
          w-[180px]
          opacity-55
          sm:-right-12
          sm:w-[260px]
          lg:w-[330px]
        "
        style={{
          transform: "rotate(205deg) scaleX(-1)",
        }}
      />

      {/* ESQUINA INFERIOR IZQUIERDA */}
      <RamaOlivo
        className="
          pointer-events-none
          absolute -bottom-20 -left-16
          w-[190px]
          opacity-60
          sm:w-[280px]
          lg:w-[350px]
        "
      />

      {/* ESQUINA INFERIOR DERECHA */}
      <RamaOlivo
        className="
          pointer-events-none
          absolute -bottom-20 -right-16
          w-[190px]
          opacity-60
          sm:w-[280px]
          lg:w-[350px]
        "
        style={{
          transform: "scaleX(-1)",
        }}
      />

      {/* ======================================
          CONTENIDO
      ====================================== */}

      <div
        className="
          relative z-10
          mx-auto w-full
          max-w-[760px]
          text-center
        "
      >
        {/* ENCABEZADO */}
        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={aparecer}
        >
          <h2
            className="
              mx-auto max-w-[480px]
              font-cormorant
              text-[43px]
              font-normal
              uppercase
              leading-[1.05]
              tracking-[0.12em]
              text-[#F8F6EF]
              sm:text-[60px]
              md:text-[72px]
            "
          >
            {textos.titulo}
          </h2>

          <p
            className="
              mx-auto mt-7
              max-w-[360px]
              font-playfair
              text-[10px]
              uppercase
              leading-[2.2]
              tracking-[0.18em]
              text-[#E2E5D8]
              sm:max-w-[460px]
              sm:text-[12px]
            "
          >
            {textos.descripcion}
          </p>
        </motion.div>

        {/* ======================================
            PADRES DE LA NOVIA
        ====================================== */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="mt-14 sm:mt-20"
        >
          <BloquePadres {...padresNovia} />
        </motion.div>

        {/* SEPARADOR */}
        <div className="my-12 sm:my-16">
          <Ornamento />
        </div>

        {/* ======================================
            PADRES DEL NOVIO
        ====================================== */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <BloquePadres {...padresNovio} />
        </motion.div>

        {/* ======================================
            FRASE FINAL
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-16 sm:mt-20"
        >
          <Heart
            size={15}
            fill="#D7DDCA"
            strokeWidth={1}
            className="
              mx-auto mb-5
              text-[#D7DDCA]
            "
          />

          <p
            className="
              mx-auto max-w-[330px]
              font-playfair
              text-[11px]
              uppercase
              leading-[2]
              tracking-[0.15em]
              text-[#E2E5D8]
              sm:max-w-[430px]
              sm:text-[12px]
            "
          >
            {textos.fraseFinal}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
