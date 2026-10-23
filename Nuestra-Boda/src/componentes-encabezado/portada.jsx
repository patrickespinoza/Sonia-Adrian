
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const NOMBRE_NOVIA = "Sonia";
const NOMBRE_NOVIO = "Adrián";

const FECHA = "14 DE NOVIEMBRE DE 2026";
const IMAGEN_PORTADA = "/portada.jpg";

// ==========================================
// COMPONENTE PORTADA
// ==========================================

export default function Portada() {
  return (
    <section
      id="portada"
      className="
        relative isolate
        min-h-[100svh] w-full
        overflow-hidden
        bg-[#171C17]
      "
    >
      {/* ======================================
          FOTOGRAFÍA
      ====================================== */}

      <img
        src={IMAGEN_PORTADA}
        alt="Sonia y Adrián frente a la Torre Eiffel"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-[55%_center]
          sm:object-[center_55%]
          lg:object-[center_55%]
        "
      />

      {/* ======================================
          DEGRADADOS SUAVES
      ====================================== */}

      {/* Oscurecimiento general ligero */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-black/10
        "
      />

      {/* Oscurecimiento localizado a la izquierda */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-r
          from-black/75
          via-black/30
          to-transparent
          sm:from-black/70
          sm:via-black/20
        "
      />

      {/* Degradado superior */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-[45%]
          bg-gradient-to-b
          from-black/55
          via-black/15
          to-transparent
        "
      />

      {/* ======================================
          CONTENIDO SUPERIOR
      ====================================== */}

      <div
        className="
          relative z-10
          flex min-h-[100svh]
          flex-col
          items-start
          px-6
          pt-[max(4rem,env(safe-area-inset-top))]
          pb-20
          sm:px-12
          sm:pt-20
          md:px-20
          lg:px-28
        "
      >
        {/* BLOQUE DE TEXTO */}
        <div
          className="
            flex w-full
            max-w-[330px]
            flex-col
            items-start
            text-left
            sm:max-w-[480px]
            lg:max-w-[600px]
          "
        >

          {/* ORNAMENTO */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              mb-6
              h-px w-16
              origin-left
              bg-white/70
              sm:w-24
            "
          />

          {/* NOMBRES */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="
              font-cormorant
              text-[clamp(3.2rem,11vw,5.5rem)]
              font-light
              leading-[0.95]
              tracking-[-0.035em]
              text-white
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.4)]
              lg:text-[6.5rem]
            "
          >
            <span className="block">
              {NOMBRE_NOVIA}
            </span>

            <span
              className="
                my-1 block
                font-cormorant
                text-[0.6em]
                italic
                text-[#E8E4D5]
              "
            >
              &amp;
            </span>

            <span className="block">
              {NOMBRE_NOVIO}
            </span>
          </motion.h1>

          {/* SEPARADOR */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
            className="
              mt-6 mb-5
              h-px w-20
              origin-left
              bg-white/65
            "
          />

          {/* FECHA */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 1.2,
            }}
            className="
              font-playfair
              text-[11px]
              font-normal
              uppercase
              tracking-[0.2em]
              text-white
              sm:text-sm
              sm:tracking-[0.3em]
            "
          >
            {FECHA}
          </motion.p>
        </div>

        {/* ESPACIADOR */}
        <div className="flex-1" />

        {/* ======================================
            INDICADOR PARA DESLIZAR
        ====================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.6,
          }}
          className="
            absolute
            bottom-[max(2rem,env(safe-area-inset-bottom))]
            left-1/2
            flex -translate-x-1/2
            flex-col items-center
            gap-2
            text-white/85
          "
        >
          <span
            className="
              whitespace-nowrap
              font-playfair
              text-[9px]
              uppercase
              tracking-[0.25em]
              sm:text-[10px]
            "
          >
            Desliza para descubrir
          </span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown
              size={21}
              strokeWidth={1}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
