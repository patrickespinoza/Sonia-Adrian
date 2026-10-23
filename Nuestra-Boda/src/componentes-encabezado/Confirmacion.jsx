
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Check,
  X,
  Users,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const NUMERO_WHATSAPP = "524721378395";

const NOVIOS = "Sonia y Adrián";

const textos = {
  subtitulo: "R S V P",
  titulo: "Confirma tu asistencia",
  descripcion:
    "Nos llenará de alegría compartir este día tan especial contigo. Por favor, confirma tu asistencia por WhatsApp.",
  fraseFinal:
    "Esperamos compartir contigo un día inolvidable.",
};

// ==========================================
// ANIMACIONES
// ==========================================

const animacionEntrada = {
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

const Ornamento = ({ claro = false }) => {
  const color = claro ? "#D5DDCA" : "#657052";

  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-4"
    >
      <span
        className={`h-px w-12 sm:w-20 ${
          claro ? "bg-[#D5DDCA]/55" : "bg-[#A4AD97]"
        }`}
      />

      <svg
        width="38"
        height="22"
        viewBox="0 0 38 22"
        fill="none"
      >
        <path
          d="M2 11H36M19 11C12 6 12 3 16 3C20 3 19 8 19 11ZM19 11C26 6 26 3 22 3C18 3 19 8 19 11Z"
          stroke={color}
          strokeWidth="1.1"
        />
        <path
          d="M12 11L8 7M26 11L30 7M12 11L8 15M26 11L30 15"
          stroke={color}
          strokeWidth="1.1"
        />
      </svg>

      <span
        className={`h-px w-12 sm:w-20 ${
          claro ? "bg-[#D5DDCA]/55" : "bg-[#A4AD97]"
        }`}
      />
    </div>
  );
};

// ==========================================
// RAMAS DE OLIVO DECORATIVAS
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
    <g fill="#A5B297" opacity="0.8">
      <ellipse
        cx="23"
        cy="146"
        rx="8"
        ry="21"
        transform="rotate(-22 23 146)"
      />
      <ellipse
        cx="43"
        cy="178"
        rx="7"
        ry="19"
        transform="rotate(-50 43 178)"
      />
      <ellipse
        cx="110"
        cy="145"
        rx="8"
        ry="21"
        transform="rotate(50 110 145)"
      />
      <ellipse
        cx="133"
        cy="129"
        rx="7"
        ry="19"
        transform="rotate(43 133 129)"
      />
      <ellipse
        cx="69"
        cy="79"
        rx="8"
        ry="21"
        transform="rotate(-15 69 79)"
      />
      <ellipse
        cx="89"
        cy="108"
        rx="7"
        ry="18"
        transform="rotate(-45 89 108)"
      />
      <ellipse
        cx="158"
        cy="77"
        rx="8"
        ry="20"
        transform="rotate(50 158 77)"
      />
      <ellipse
        cx="182"
        cy="60"
        rx="7"
        ry="18"
        transform="rotate(45 182 60)"
      />
    </g>

    {/* FLOR BLANCA */}
    <g transform="translate(55 188)">
      <ellipse
        cy="-10"
        rx="6"
        ry="12"
        fill="#F8F6EF"
      />
      <ellipse
        cx="10"
        cy="-2"
        rx="6"
        ry="12"
        transform="rotate(72 10 -2)"
        fill="#F8F6EF"
      />
      <ellipse
        cx="6"
        cy="10"
        rx="6"
        ry="12"
        transform="rotate(144 6 10)"
        fill="#F8F6EF"
      />
      <ellipse
        cx="-7"
        cy="9"
        rx="6"
        ry="12"
        transform="rotate(216 -7 9)"
        fill="#F8F6EF"
      />
      <ellipse
        cx="-11"
        cy="-3"
        rx="6"
        ry="12"
        transform="rotate(288 -11 -3)"
        fill="#F8F6EF"
      />
      <circle r="4" fill="#D4C49A" />
    </g>
  </svg>
);

// ==========================================
// ESTILOS REUTILIZABLES
// ==========================================

const estiloCampo = `
  w-full
  rounded-xl
  border border-[#A6AE99]/65
  bg-[#FDFBF6]
  px-4 py-3.5
  font-playfair
  text-[14px]
  text-[#30392A]
  placeholder:text-[#8C9484]
  outline-none
  transition-all duration-300
  focus:border-[#657052]
  focus:ring-2
  focus:ring-[#A6AE99]/30
  sm:px-5 sm:py-4
`;

const estiloEtiqueta = `
  mb-3 block
  font-playfair
  text-[13px]
  text-[#414B32]
  sm:text-[14px]
`;

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Confirmacion() {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");

  // ==========================================
  // ENVIAR CONFIRMACIÓN POR WHATSAPP
  // ==========================================

  const enviarConfirmacion = (e) => {
    e.preventDefault();

    // VALIDAR NOMBRE Y ASISTENCIA
    if (!nombreInvitado.trim() || !asistencia) {
      setError(
        "Por favor, escribe tu nombre y confirma si asistirás."
      );
      return;
    }

    // VALIDAR NÚMERO DE ASISTENTES
    if (asistencia === "Sí asistiré") {
      const cantidad = Number(invitados);

      if (!Number.isInteger(cantidad) || cantidad < 1) {
        setError(
          "Indica un número válido de asistentes."
        );
        return;
      }
    }

    setError("");

    // ======================================
    // CREAR MENSAJE PERSONALIZADO
    // ======================================

    const lineas = [
      "💍 *Confirmación de asistencia*",
      `*Boda de ${NOVIOS}*`,
      "",
      `👤 *Nombre:* ${nombreInvitado.trim()}`,
      `💌 *Asistencia:* ${asistencia}`,
    ];

    if (asistencia === "Sí asistiré") {
      lineas.push(
        `👥 *Número de asistentes:* ${invitados}`
      );
    }

    if (mensajeInvitado.trim()) {
      lineas.push(
        "",
        "💬 *Mensaje para los novios:*",
        mensajeInvitado.trim()
      );
    }

    lineas.push(
      "",
      "¡Gracias por la invitación! 🌿"
    );

    const mensaje = lineas.join("\n");

    // ======================================
    // ABRIR WHATSAPP
    // ======================================

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
      mensaje
    )}`;

    // El invitado debe pulsar "Enviar" en WhatsApp.
    window.location.href = url;
  };

  return (
    <section
      id="confirmacion"
      className="
        relative isolate
        w-full overflow-hidden
        bg-[#414B32]
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
          opacity-[0.10]
        "
        style={{
          backgroundImage:
            "radial-gradient(#F8F6EF 0.5px, transparent 0.5px)",
          backgroundSize: "9px 9px",
        }}
      />

      {/* DEGRADADO SUTIL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(22,31,18,0.25)_100%)]
        "
      />

      {/* ======================================
          RAMAS DECORATIVAS
      ====================================== */}

      <RamaOlivo
        className="
          pointer-events-none
          absolute -left-16 -top-20
          w-[180px] opacity-45
          sm:w-[270px]
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

      <div className="relative z-10 mx-auto max-w-[800px]">
        {/* ENCABEZADO SOBRE FONDO OLIVO */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animacionEntrada}
          className="mb-12 text-center sm:mb-16"
        >
          <div
            className="
              mx-auto mb-6
              flex h-12 w-12
              items-center justify-center
              rounded-full
              border border-[#D5DDCA]/55
            "
          >
            <Heart
              size={23}
              strokeWidth={1.2}
              className="text-[#F8F6EF]"
            />
          </div>

          <p
            className="
              font-playfair
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-[#D5DDCA]
            "
          >
            {textos.subtitulo}
          </p>

          <h2
            className="
              mx-auto mt-5
              max-w-[650px]
              font-cormorant
              text-[clamp(3rem,9vw,5.3rem)]
              font-normal
              leading-[1.05]
              text-[#F8F6EF]
            "
          >
            {textos.titulo}
          </h2>

          <div className="my-8">
            <Ornamento claro />
          </div>

          <p
            className="
              mx-auto max-w-[520px]
              font-cormorant
              text-[23px]
              italic
              leading-[1.45]
              text-[#E2E6D9]
              sm:text-[29px]
            "
          >
            {textos.descripcion}
          </p>
        </motion.div>

        {/* ======================================
            TARJETA CREMA DEL FORMULARIO
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            border border-[#D5DDCA]/65
            bg-[#FDFBF6]
            px-5 py-10
            shadow-[0_20px_65px_rgba(0,0,0,0.18)]
            sm:px-12 sm:py-14
            lg:px-16
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

          <div className="relative z-10">
            {/* TÍTULO DEL FORMULARIO */}

            <div className="mb-10 text-center">
              <p
                className="
                  font-cormorant
                  text-[31px]
                  italic
                  text-[#414B32]
                  sm:text-[38px]
                "
              >
                ¿Nos acompañarás?
              </p>

              <div className="mt-4">
                <Ornamento />
              </div>
            </div>

            {/* ======================================
                FORMULARIO
            ====================================== */}

            <form
              onSubmit={enviarConfirmacion}
              className="
                mx-auto max-w-[540px]
                space-y-7
              "
            >
              {/* NOMBRE */}

              <div>
                <label
                  htmlFor="nombreInvitado"
                  className={estiloEtiqueta}
                >
                  Nombre y apellido
                </label>

                <input
                  id="nombreInvitado"
                  type="text"
                  placeholder="Escribe tu nombre completo"
                  autoComplete="name"
                  value={nombreInvitado}
                  onChange={(e) =>
                    setNombreInvitado(e.target.value)
                  }
                  className={estiloCampo}
                  required
                />
              </div>

              {/* ======================================
                  ASISTENCIA
              ====================================== */}

              <div>
                <p className={estiloEtiqueta}>
                  Confirma tu asistencia
                </p>

                <div
                  className="
                    grid grid-cols-1
                    gap-3 sm:grid-cols-2
                  "
                >
                  {/* SÍ ASISTIRÉ */}

                  <button
                    type="button"
                    aria-pressed={
                      asistencia === "Sí asistiré"
                    }
                    onClick={() => {
                      setAsistencia("Sí asistiré");
                      setError("");
                    }}
                    className={`
                      flex min-h-[56px]
                      items-center justify-center
                      gap-2 rounded-xl
                      border px-4 py-3
                      font-playfair
                      text-[14px]
                      transition-all duration-300
                      ${
                        asistencia === "Sí asistiré"
                          ? "border-[#414B32] bg-[#414B32] text-white shadow-md"
                          : "border-[#A6AE99]/65 bg-[#FDFBF6] text-[#414B32] hover:bg-[#EDF0E6]"
                      }
                    `}
                  >
                    <Check
                      size={17}
                      strokeWidth={1.6}
                    />

                    Sí asistiré
                  </button>

                  {/* NO ASISTIRÉ */}

                  <button
                    type="button"
                    aria-pressed={
                      asistencia === "No podré asistir"
                    }
                    onClick={() => {
                      setAsistencia("No podré asistir");
                      setInvitados("");
                      setError("");
                    }}
                    className={`
                      flex min-h-[56px]
                      items-center justify-center
                      gap-2 rounded-xl
                      border px-4 py-3
                      font-playfair
                      text-[14px]
                      transition-all duration-300
                      ${
                        asistencia === "No podré asistir"
                          ? "border-[#414B32] bg-[#414B32] text-white shadow-md"
                          : "border-[#A6AE99]/65 bg-[#FDFBF6] text-[#414B32] hover:bg-[#EDF0E6]"
                      }
                    `}
                  >
                    <X
                      size={17}
                      strokeWidth={1.6}
                    />

                    No asistiré
                  </button>
                </div>
              </div>

              {/* ======================================
                  NÚMERO DE ASISTENTES
              ====================================== */}

              <AnimatePresence mode="wait">
                {asistencia === "Sí asistiré" && (
                  <motion.div
                    key="numero-asistentes"
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <label
                      htmlFor="numeroInvitados"
                      className={estiloEtiqueta}
                    >
                      Número de asistentes
                    </label>

                    <div className="relative">
                      <Users
                        size={19}
                        strokeWidth={1.4}
                        className="
                          pointer-events-none
                          absolute left-4 top-1/2
                          -translate-y-1/2
                          text-[#657052]
                        "
                      />

                      <input
                        id="numeroInvitados"
                        type="number"
                        min="1"
                        step="1"
                        inputMode="numeric"
                        placeholder="¿Cuántas personas asistirán?"
                        value={invitados}
                        onChange={(e) =>
                          setInvitados(e.target.value)
                        }
                        className={`${estiloCampo} pl-12`}
                        required
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ======================================
                  MENSAJE OPCIONAL
              ====================================== */}

              <div>
                <label
                  htmlFor="mensajeInvitado"
                  className={estiloEtiqueta}
                >
                  Mensaje para los novios

                  <span className="ml-2 text-[#8C9484]">
                    (Opcional)
                  </span>
                </label>

                <textarea
                  id="mensajeInvitado"
                  rows={4}
                  placeholder="Déjanos unas palabras bonitas..."
                  value={mensajeInvitado}
                  onChange={(e) =>
                    setMensajeInvitado(e.target.value)
                  }
                  className={`${estiloCampo} resize-none`}
                />
              </div>

              {/* ======================================
                  MENSAJE DE ERROR
              ====================================== */}

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="
                    border border-[#A6AE99]
                    bg-[#EDF0E6]
                    px-4 py-3
                    font-playfair
                    text-[13px]
                    text-[#414B32]
                  "
                >
                  {error}
                </motion.p>
              )}

              {/* ======================================
                  BOTÓN WHATSAPP
              ====================================== */}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  flex min-h-[58px]
                  w-full
                  items-center justify-center
                  gap-3 rounded-full
                  bg-[#414B32]
                  px-5 py-4
                  font-playfair
                  text-[13px]
                  uppercase
                  tracking-[0.08em]
                  text-white
                  shadow-[0_12px_30px_rgba(65,75,50,0.2)]
                  transition-colors duration-300
                  hover:bg-[#566344]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#414B32]
                  sm:text-[15px]
                "
              >
                <MessageCircle
                  size={21}
                  strokeWidth={1.5}
                />

                Confirmar por WhatsApp

                <Send
                  size={16}
                  strokeWidth={1.5}
                />
              </motion.button>

              <p
                className="
                  text-center
                  font-playfair
                  text-[11px]
                  leading-relaxed
                  text-[#78836F]
                  sm:text-xs
                "
              >
                Al continuar, se abrirá WhatsApp
                con tu confirmación lista para enviar.
              </p>
            </form>
          </div>
        </motion.div>

        {/* ======================================
            FRASE FINAL SOBRE FONDO OLIVO
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center sm:mt-16"
        >
          <Ornamento claro />

          <p
            className="
              mx-auto mt-7
              max-w-[470px]
              font-cormorant
              text-[27px]
              italic
              leading-relaxed
              text-[#F8F6EF]
              sm:text-[34px]
            "
          >
            {textos.fraseFinal}
          </p>

   
        </motion.div>
      </div>
    </section>
  );
}
