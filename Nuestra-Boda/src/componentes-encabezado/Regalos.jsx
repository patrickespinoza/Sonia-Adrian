
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Heart,
  ArrowUpRight,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const textos = {
  subtitulo: "CON MUCHO CARIÑO",
  titulo: "Mesa de regalos",
  descripcion:
    "Tu presencia es nuestro mejor regalo. Si deseas obsequiarnos algo más, hemos preparado estas opciones con mucho cariño.",
  fraseFinal:
    "Gracias por ser parte de nuestra historia.",
};

// ==========================================
// MESAS DE REGALOS
// ==========================================

const mesasRegalos = [
  {
    id: "amazon",
    nombre: "Amazon",
    subtitulo: "Mesa de regalos",
    descripcion:
      "Encuentra nuestra lista de regalos en Amazon.",
    enlace:
      "https://www.amazon.com.mx/wedding/guest-view/1QC3F9RZKCSJ1",
  },
  {
    id: "liverpool",
    nombre: "Liverpool",
    subtitulo: "Mesa de regalos",
    descripcion:
      "Consulta nuestra mesa de regalos en Liverpool.",
    enlace:
      "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60064757",
  },
];

// ==========================================
// ANIMACIONES
// ==========================================

const aparecer = {
  oculto: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// ORNAMENTO CLÁSICO
// ==========================================

const Ornamento = () => (
  <div
    aria-hidden="true"
    className="flex items-center justify-center gap-4"
  >
    <span className="h-px w-12 bg-[#A4AD97] sm:w-20" />

    <svg
      width="38"
      height="22"
      viewBox="0 0 38 22"
      fill="none"
    >
      <path
        d="M2 11H36M19 11C12 6 12 3 16 3C20 3 19 8 19 11ZM19 11C26 6 26 3 22 3C18 3 19 8 19 11Z"
        stroke="#657052"
        strokeWidth="1.1"
      />
      <path
        d="M12 11L8 7M26 11L30 7M12 11L8 15M26 11L30 15"
        stroke="#657052"
        strokeWidth="1.1"
      />
    </svg>

    <span className="h-px w-12 bg-[#A4AD97] sm:w-20" />
  </div>
);

// ==========================================
// RAMA BOTÁNICA
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
    {/* TALLO */}
    <path
      d="M15 242C40 190 80 120 182 12"
      stroke="#7A886B"
      strokeWidth="1.6"
      strokeLinecap="round"
    />

    {/* RAMAS */}
    <g stroke="#7A886B" strokeWidth="1.1">
      <path d="M45 185Q14 160 19 132" />
      <path d="M69 150Q111 164 135 129" />
      <path d="M94 116Q64 89 67 62" />
      <path d="M125 78Q163 92 185 58" />
    </g>

    {/* HOJAS */}
    <g fill="#849276" opacity="0.8">
      <ellipse
        cx="23" cy="146" rx="8" ry="21"
        transform="rotate(-22 23 146)"
      />
      <ellipse
        cx="43" cy="178" rx="7" ry="19"
        transform="rotate(-50 43 178)"
      />
      <ellipse
        cx="110" cy="145" rx="8" ry="21"
        transform="rotate(50 110 145)"
      />
      <ellipse
        cx="133" cy="129" rx="7" ry="19"
        transform="rotate(43 133 129)"
      />
      <ellipse
        cx="69" cy="79" rx="8" ry="21"
        transform="rotate(-15 69 79)"
      />
      <ellipse
        cx="89" cy="108" rx="7" ry="18"
        transform="rotate(-45 89 108)"
      />
      <ellipse
        cx="158" cy="77" rx="8" ry="20"
        transform="rotate(50 158 77)"
      />
      <ellipse
        cx="182" cy="60" rx="7" ry="18"
        transform="rotate(45 182 60)"
      />
    </g>

    {/* FLOR */}
    <g transform="translate(55 188)">
      <ellipse
        cy="-10" rx="6" ry="12"
        fill="#FFFFFF"
      />
      <ellipse
        cx="10" cy="-2" rx="6" ry="12"
        transform="rotate(72 10 -2)"
        fill="#FFFFFF"
      />
      <ellipse
        cx="6" cy="10" rx="6" ry="12"
        transform="rotate(144 6 10)"
        fill="#FFFFFF"
      />
      <ellipse
        cx="-7" cy="9" rx="6" ry="12"
        transform="rotate(216 -7 9)"
        fill="#FFFFFF"
      />
      <ellipse
        cx="-11" cy="-3" rx="6" ry="12"
        transform="rotate(288 -11 -3)"
        fill="#FFFFFF"
      />
      <circle r="4" fill="#D4C49A" />
    </g>
  </svg>
);

// ==========================================
// TARJETA DE MESA DE REGALOS
// ==========================================

const TarjetaRegalo = ({
  nombre,
  subtitulo,
  descripcion,
  enlace,
  index,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.85,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group relative
        flex h-full min-w-0
        flex-col items-center
        overflow-hidden
        border border-[#A6AE99]/55
        bg-[#FDFBF6]
        px-5 py-10
        text-center
        shadow-[0_15px_45px_rgba(49,59,38,0.06)]
        transition-shadow duration-300
        hover:shadow-[0_20px_50px_rgba(49,59,38,0.12)]
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

      {/* ÍCONO */}
      <div
        className="
          relative mb-7
          flex h-[90px] w-[90px]
          items-center justify-center
          rounded-full
          border border-[#A6AE99]/45
          bg-[#E9EBDD]/65
          sm:h-[105px] sm:w-[105px]
        "
      >
        <div
          className="
            absolute inset-[7px]
            rounded-full
            border border-[#A6AE99]/35
          "
        />

        <Gift
          size={43}
          strokeWidth={1}
          className="
            text-[#414B32]
            transition-transform duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* SUBTÍTULO */}
      <p
        className="
          font-playfair
          text-[10px]
          uppercase
          tracking-[0.22em]
          text-[#657052]
          sm:text-xs
        "
      >
        {subtitulo}
      </p>

      {/* NOMBRE DE TIENDA */}
      <h3
        className="
          mt-3
          font-cormorant
          text-[clamp(2.4rem,7vw,3.5rem)]
          font-medium
          leading-none
          text-[#30392A]
        "
      >
        {nombre}
      </h3>

      {/* SEPARADOR */}
      <div className="my-6">
        <Ornamento />
      </div>

      {/* DESCRIPCIÓN */}
      <p
        className="
          mx-auto max-w-[300px]
          font-playfair
          text-[12px]
          leading-[1.9]
          text-[#626B59]
          sm:text-[14px]
        "
      >
        {descripcion}
      </p>

      {/* ESPACIO FLEXIBLE */}
      <div className="flex-1" />

      {/* BOTÓN */}
      <a
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver mesa de regalos de ${nombre}`}
        className="
          relative z-10
          mt-9
          inline-flex min-h-12
          w-full max-w-[260px]
          items-center justify-center
          gap-2 rounded-full
          bg-[#414B32]
          px-5 py-3
          font-playfair
          text-[11px]
          uppercase
          tracking-[0.12em]
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
        Ver mesa de regalos
        <ArrowUpRight size={16} strokeWidth={1.5} />
      </a>
    </motion.article>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Regalos() {
  return (
    <section
      id="regalos"
      className="
        relative isolate
        w-full overflow-hidden
        bg-[#F7F5ED]
        px-4 py-20
        sm:px-8 sm:py-28
        lg:py-32
      "
    >
      {/* ======================================
          TEXTURA DE FONDO
      ====================================== */}

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

      {/* ======================================
          RAMAS DECORATIVAS
      ====================================== */}

      <RamaOlivo
        className="
          pointer-events-none
          absolute -left-16 -top-20
          w-[175px] opacity-45
          sm:w-[260px]
          lg:w-[340px]
        "
        style={{
          transform: "rotate(155deg)",
        }}
      />

      <RamaOlivo
        className="
          pointer-events-none
          absolute -bottom-20 -right-14
          w-[190px] opacity-45
          sm:w-[280px]
          lg:w-[360px]
        "
        style={{
          transform: "scaleX(-1)",
        }}
      />

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <div
        className="
          relative z-10
          mx-auto w-full
          max-w-5xl
        "
      >
        {/* ENCABEZADO */}
        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={aparecer}
          className="mx-auto max-w-2xl text-center"
        >
          {/* ÍCONO SUPERIOR */}
          <div
            className="
              mx-auto mb-6
              flex h-12 w-12
              items-center justify-center
              rounded-full
              border border-[#A6AE99]/50
            "
          >
            <Gift
              size={22}
              strokeWidth={1.2}
              className="text-[#657052]"
            />
          </div>

          {/* SUBTÍTULO */}
          <p
            className="
              font-playfair
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#657052]
              sm:text-xs
            "
          >
            {textos.subtitulo}
          </p>

          {/* TÍTULO */}
          <h2
            className="
              mt-5
              font-cormorant
              text-[clamp(3rem,9vw,5.2rem)]
              font-normal
              leading-none
              text-[#30392A]
            "
          >
            {textos.titulo}
          </h2>

          {/* ORNAMENTO */}
          <div className="my-8">
            <Ornamento />
          </div>

          {/* MENSAJE */}
          <p
            className="
              mx-auto max-w-[540px]
              font-cormorant
              text-[23px]
              italic
              leading-[1.45]
              text-[#414B32]
              sm:text-[29px]
            "
          >
            {textos.descripcion}
          </p>
        </motion.div>

        {/* ======================================
            MESAS DE REGALOS
        ====================================== */}

        <div
          className="
            mx-auto mt-14
            grid max-w-4xl
            grid-cols-1
            items-stretch
            gap-7
            sm:mt-16
            md:grid-cols-2
            md:gap-8
          "
        >
          {mesasRegalos.map((mesa, index) => (
            <TarjetaRegalo
              key={mesa.id}
              {...mesa}
              index={index}
            />
          ))}
        </div>

        {/* ======================================
            FRASE FINAL
        ====================================== */}

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
            className="mx-auto mb-5 text-[#657052]"
          />

          <p
            className="
              mx-auto max-w-[460px]
              font-cormorant
              text-[25px]
              italic
              leading-relaxed
              text-[#414B32]
              sm:text-[31px]
            "
          >
            {textos.fraseFinal}
          </p>

          <p
            className="
              mt-4
              font-playfair
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[#657052]
              sm:text-xs
            "
          >
            Sonia &amp; Adrián
          </p>
        </motion.div>
      </div>
    </section>
  );
}
