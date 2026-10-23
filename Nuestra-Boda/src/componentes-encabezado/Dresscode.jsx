
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shirt, Sparkles } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const textos = {
  subtitulo: "PARA NUESTRO GRAN DÍA",
  titulo: "Código de vestimenta",
  codigo: "Formal Elegante",
  descripcion:
    "Nos encantará contar con tu presencia para compartir juntos esta ocasión tan especial.",
  avisoTitulo: "Una petición especial",
  aviso:
    "Agradecemos reservar el color blanco para la novia y evitarlo en tu vestimenta.",
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
// DECORACIÓN DE RAMAS DE OLIVO
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
      <ellipse cx="23" cy="146" rx="8" ry="21" transform="rotate(-22 23 146)" />
      <ellipse cx="43" cy="178" rx="7" ry="19" transform="rotate(-50 43 178)" />
      <ellipse cx="110" cy="145" rx="8" ry="21" transform="rotate(50 110 145)" />
      <ellipse cx="133" cy="129" rx="7" ry="19" transform="rotate(43 133 129)" />
      <ellipse cx="69" cy="79" rx="8" ry="21" transform="rotate(-15 69 79)" />
      <ellipse cx="89" cy="108" rx="7" ry="18" transform="rotate(-45 89 108)" />
      <ellipse cx="158" cy="77" rx="8" ry="20" transform="rotate(50 158 77)" />
      <ellipse cx="182" cy="60" rx="7" ry="18" transform="rotate(45 182 60)" />
    </g>

    {/* FLOR */}
    <g transform="translate(55 188)">
      <ellipse cy="-10" rx="6" ry="12" fill="#FFFFFF" />
      <ellipse cx="10" cy="-2" rx="6" ry="12" transform="rotate(72 10 -2)" fill="#FFFFFF" />
      <ellipse cx="6" cy="10" rx="6" ry="12" transform="rotate(144 6 10)" fill="#FFFFFF" />
      <ellipse cx="-7" cy="9" rx="6" ry="12" transform="rotate(216 -7 9)" fill="#FFFFFF" />
      <ellipse cx="-11" cy="-3" rx="6" ry="12" transform="rotate(288 -11 -3)" fill="#FFFFFF" />
      <circle r="4" fill="#D4C49A" />
    </g>
  </svg>
);

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
      className="
        relative isolate
        flex w-full
        items-center justify-center
        overflow-hidden
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
          RAMAS EXTERIORES
      ====================================== */}

      <RamaOlivo
        className="
          pointer-events-none
          absolute -left-16 -top-20
          w-[180px] opacity-50
          sm:w-[270px]
          lg:w-[340px]
        "
        style={{ transform: "rotate(155deg)" }}
      />

      <RamaOlivo
        className="
          pointer-events-none
          absolute -bottom-20 -right-14
          w-[180px] opacity-50
          sm:w-[270px]
          lg:w-[340px]
        "
        style={{ transform: "scaleX(-1)" }}
      />

      {/* ======================================
          TARJETA CLÁSICA
      ====================================== */}

      <motion.div
        initial="oculto"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={aparecer}
        className="
          relative z-10
          mx-auto w-full
          max-w-[780px]
          border border-[#A6AE99]/60
          bg-[#FDFBF6]
          px-5 py-14
          text-center
          shadow-[0_18px_55px_rgba(49,59,38,0.07)]
          sm:px-12 sm:py-20
          lg:px-20
        "
      >
        {/* MARCO INTERIOR */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-[7px]
            border border-[#A6AE99]/30
            sm:inset-[10px]
          "
        />

        {/* ======================================
            ENCABEZADO
        ====================================== */}

        <motion.p
          variants={aparecer}
          className="
            relative z-10
            font-playfair
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-[#657052]
            sm:text-xs
          "
        >
          {textos.subtitulo}
        </motion.p>

        <motion.h2
          variants={aparecer}
          className="
            relative z-10
            mx-auto mt-5
            max-w-[600px]
            font-cormorant
            text-[clamp(2.7rem,8vw,4.8rem)]
            font-normal
            leading-[1.05]
            text-[#30392A]
          "
        >
          {textos.titulo}
        </motion.h2>

        {/* ORNAMENTO */}
        <motion.div
          variants={aparecer}
          className="relative z-10 my-8 sm:my-10"
        >
          <Ornamento />
        </motion.div>

        {/* ======================================
            ÍCONO DECORATIVO
        ====================================== */}

        <motion.div
          variants={aparecer}
          className="
            relative z-10
            mx-auto mb-7
            flex h-[92px] w-[92px]
            items-center justify-center
            rounded-full
            border border-[#9EAA91]/45
            bg-[#EDF0E6]
          "
        >
          <div
            className="
              absolute inset-[7px]
              rounded-full
              border border-[#9EAA91]/35
            "
          />

          <Shirt
            size={42}
            strokeWidth={1}
            className="text-[#414B32]"
          />
        </motion.div>

        {/* ======================================
            CÓDIGO DE VESTIMENTA
        ====================================== */}

        <motion.h3
          variants={aparecer}
          className="
            relative z-10
            font-cormorant
            text-[clamp(2.6rem,9vw,4.6rem)]
            font-medium italic
            leading-none
            text-[#414B32]
          "
        >
          {textos.codigo}
        </motion.h3>

        <motion.p
          variants={aparecer}
          className="
            relative z-10
            mx-auto mt-7
            max-w-[460px]
            font-playfair
            text-[13px]
            leading-[2]
            text-[#626B59]
            sm:text-[15px]
          "
        >
          {textos.descripcion}
        </motion.p>

        {/* ======================================
            AVISO SOBRE EL COLOR BLANCO
        ====================================== */}

        <motion.div
          variants={aparecer}
          className="
            relative z-10
            mx-auto mt-12
            max-w-[500px]
            border-t border-[#A6AE99]/50
            pt-10
          "
        >
          <div
            className="
              mx-auto mb-5
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-[#A6AE99]/50
              text-[#657052]
            "
          >
            <Sparkles size={18} strokeWidth={1.2} />
          </div>

          <h4
            className="
              font-cormorant
              text-[28px]
              font-medium italic
              text-[#414B32]
              sm:text-[33px]
            "
          >
            {textos.avisoTitulo}
          </h4>

          <p
            className="
              mx-auto mt-4
              max-w-[420px]
              font-playfair
              text-[12px]
              leading-[2]
              text-[#626B59]
              sm:text-[14px]
            "
          >
            {textos.aviso}
          </p>
        </motion.div>

        {/* ======================================
            DETALLE FINAL
        ====================================== */}

        <motion.div
          variants={aparecer}
          className="
            relative z-10
            mx-auto mt-11
            flex items-center justify-center gap-3
          "
        >
          <span className="h-px w-10 bg-[#A6AE99]/70" />
          <span
            className="
              font-cormorant
              text-[24px]
              italic
              text-[#657052]
            "
          >
            S &amp; A
          </span>
          <span className="h-px w-10 bg-[#A6AE99]/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
