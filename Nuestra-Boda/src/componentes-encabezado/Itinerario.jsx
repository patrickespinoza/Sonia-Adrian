
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  Users,
  Music2,
  UtensilsCrossed,
  Heart,
  Disc3,
  MoonStar,
  PartyPopper,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const eventos = [
  {
    hora: "1:00 PM",
    titulo: "Ceremonia Religiosa",
    descripcion: "El inicio de nuestra unión",
    icono: Church,
  },
  {
    hora: "4:00 PM",
    titulo: "Recepción de invitados",
    descripcion: "Bienvenidos a nuestra celebración",
    icono: Users,
  },
  {
    hora: "4:20 PM",
    titulo: "Entrada de los novios",
    descripcion: "Acompañados de mariachi",
    icono: Music2,
  },
  {
    hora: "5:00 PM",
    titulo: "Banquete de tres tiempos",
    descripcion: "Acompañado de violinista",
    icono: UtensilsCrossed,
  },
  {
    hora: "6:30 PM",
    titulo: "Vals de los novios",
    descripcion: "Nuestro primer baile",
    icono: Heart,
  },
  {
    hora: "7:30 PM",
    titulo: "DJ",
    descripcion: "¡Que comience la fiesta!",
    icono: Disc3,
  },
  {
    hora: "9:00 PM",
    titulo: "Tacos",
    descripcion: "Un antojito para continuar celebrando",
    icono: UtensilsCrossed,
  },
  {
    hora: "12:00 AM",
    titulo: "Fin de la fiesta",
    descripcion: "Gracias por acompañarnos",
    icono: MoonStar,
  },
];

// ==========================================
// ANIMACIONES
// ==========================================

const animacionEntrada = {
  oculto: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
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
    <span className="h-px w-12 bg-[#D5DDCA]/50 sm:w-20" />

    <svg
      width="38"
      height="22"
      viewBox="0 0 38 22"
      fill="none"
    >
      <path
        d="M2 11H36M19 11C12 6 12 3 16 3C20 3 19 8 19 11ZM19 11C26 6 26 3 22 3C18 3 19 8 19 11Z"
        stroke="#D5DDCA"
        strokeWidth="1.1"
      />
      <path
        d="M12 11L8 7M26 11L30 7M12 11L8 15M26 11L30 15"
        stroke="#D5DDCA"
        strokeWidth="1.1"
      />
    </svg>

    <span className="h-px w-12 bg-[#D5DDCA]/50 sm:w-20" />
  </div>
);

// ==========================================
// RAMA DE OLIVO DECORATIVA
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
      stroke="#A5B297"
      strokeWidth="1.6"
      strokeLinecap="round"
    />

    {/* RAMAS */}
    <g stroke="#A5B297" strokeWidth="1.1">
      <path d="M45 185Q14 160 19 132" />
      <path d="M69 150Q111 164 135 129" />
      <path d="M94 116Q64 89 67 62" />
      <path d="M125 78Q163 92 185 58" />
    </g>

    {/* HOJAS */}
    <g fill="#A5B297" opacity="0.75">
      <ellipse cx="23" cy="146" rx="8" ry="21" transform="rotate(-22 23 146)" />
      <ellipse cx="43" cy="178" rx="7" ry="19" transform="rotate(-50 43 178)" />
      <ellipse cx="110" cy="145" rx="8" ry="21" transform="rotate(50 110 145)" />
      <ellipse cx="133" cy="129" rx="7" ry="19" transform="rotate(43 133 129)" />
      <ellipse cx="69" cy="79" rx="8" ry="21" transform="rotate(-15 69 79)" />
      <ellipse cx="89" cy="108" rx="7" ry="18" transform="rotate(-45 89 108)" />
      <ellipse cx="158" cy="77" rx="8" ry="20" transform="rotate(50 158 77)" />
      <ellipse cx="182" cy="60" rx="7" ry="18" transform="rotate(45 182 60)" />
    </g>

    {/* FLOR BLANCA */}
    <g transform="translate(55 188)">
      <ellipse cy="-10" rx="6" ry="12" fill="#F8F6EF" />
      <ellipse cx="10" cy="-2" rx="6" ry="12" transform="rotate(72 10 -2)" fill="#F8F6EF" />
      <ellipse cx="6" cy="10" rx="6" ry="12" transform="rotate(144 6 10)" fill="#F8F6EF" />
      <ellipse cx="-7" cy="9" rx="6" ry="12" transform="rotate(216 -7 9)" fill="#F8F6EF" />
      <ellipse cx="-11" cy="-3" rx="6" ry="12" transform="rotate(288 -11 -3)" fill="#F8F6EF" />
      <circle r="4" fill="#D4C49A" />
    </g>
  </svg>
);

// ==========================================
// EVENTO INDIVIDUAL
// ==========================================

const EventoItinerario = ({
  titulo,
  hora,
  descripcion,
  icono: Icono,
  ultimo,
}) => {
  return (
    <motion.div
      variants={animacionEntrada}
      className="
        relative flex
        items-start
        gap-4
        sm:gap-7
      "
    >
      {/* ======================================
          LÍNEA DE TIEMPO E ÍCONO
      ====================================== */}

      <div
        className="
          relative flex
          w-12 shrink-0
          justify-center
          sm:w-16
        "
      >
        {/* LÍNEA VERTICAL */}
        {!ultimo && (
          <div
            className="
              absolute left-1/2
              top-11 bottom-[-2.5rem]
              w-px
              -translate-x-1/2
              bg-[#C9D2BF]/45
              sm:top-14
              sm:bottom-[-3rem]
            "
          />
        )}

        {/* ÍCONO */}
        <div
          className="
            relative z-10
            flex h-12 w-12
            items-center justify-center
            rounded-full
            border border-[#C9D2BF]/55
            bg-[#414B32]
            sm:h-14 sm:w-14
          "
        >
          <Icono
            size={22}
            strokeWidth={1.25}
            className="text-[#F8F6EF]"
          />
        </div>
      </div>

      {/* ======================================
          INFORMACIÓN
      ====================================== */}

      <div
        className={`
          min-w-0 flex-1
          ${ultimo ? "pb-0" : "pb-10 sm:pb-12"}
        `}
      >
        {/* HORA */}
        <p
          className="
            mb-2
            font-playfair
            text-[11px]
            uppercase
            tracking-[0.2em]
            text-[#C9D2BF]
            sm:text-[13px]
          "
        >
          {hora}
        </p>

        {/* TÍTULO */}
        <h3
          className="
            font-cormorant
            text-[28px]
            font-medium
            leading-[1.1]
            text-[#F8F6EF]
            sm:text-[36px]
          "
        >
          {titulo}
        </h3>

        {/* DESCRIPCIÓN */}
        <p
          className="
            mt-2
            font-cormorant
            text-[19px]
            italic
            leading-snug
            text-[#D5DDCA]
            sm:text-[22px]
          "
        >
          {descripcion}
        </p>
      </div>
    </motion.div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Itinerario() {
  return (
    <section
      id="itinerario"
      className="
        relative isolate
        w-full overflow-hidden
        bg-[#414B32]
        px-5 py-20
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
          opacity-[0.10]
        "
        style={{
          backgroundImage:
            "radial-gradient(#F8F6EF 0.5px, transparent 0.5px)",
          backgroundSize: "9px 9px",
        }}
      />

      {/* DEGRADADO SUAVE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(22,31,18,0.3)_100%)]
        "
      />

      {/* ======================================
          DECORACIÓN BOTÁNICA
      ====================================== */}

      <RamaOlivo
        className="
          pointer-events-none
          absolute -left-16 -top-20
          w-[170px] opacity-40
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
          w-[180px] opacity-40
          sm:w-[270px]
          lg:w-[350px]
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
          max-w-[800px]
        "
      >
        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="text-center"
        >
          <p
            className="
              font-playfair
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#D5DDCA]
              sm:text-xs
            "
          >
            Cada momento cuenta
          </p>

          <h2
            className="
              mt-5
              font-cormorant
              text-[clamp(3.2rem,10vw,5.5rem)]
              font-normal
              leading-none
              text-[#F8F6EF]
            "
          >
            Itinerario
          </h2>

          <div className="my-8">
            <Ornamento />
          </div>

          <p
            className="
              mx-auto max-w-[470px]
              font-cormorant
              text-[23px]
              italic
              leading-relaxed
              text-[#E2E6D9]
              sm:text-[28px]
            "
          >
            Un día lleno de amor, música y momentos
            que guardaremos para siempre.
          </p>
        </motion.div>

        {/* ======================================
            LÍNEA DE TIEMPO
        ====================================== */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            staggerChildren: 0.12,
          }}
          className="
            mx-auto mt-16
            max-w-[580px]
            sm:mt-20
          "
        >
          {eventos.map((evento, index) => (
            <EventoItinerario
              key={`${evento.hora}-${evento.titulo}`}
              {...evento}
              ultimo={index === eventos.length - 1}
            />
          ))}
        </motion.div>

        {/* ======================================
            FRASE FINAL
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center sm:mt-20"
        >
          <Ornamento />

          <p
            className="
              mt-7
              font-cormorant
              text-[32px]
              italic
              text-[#F8F6EF]
              sm:text-[42px]
            "
          >
            ¡Te esperamos!
          </p>

          <p
            className="
              mt-3
              font-playfair
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#D5DDCA]
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
