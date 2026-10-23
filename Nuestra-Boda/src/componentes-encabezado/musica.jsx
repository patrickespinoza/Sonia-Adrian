
"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  ChevronDown,
  Music2,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const MUSICA_URL = "/musica.mp3";
const VOLUMEN_INICIAL = 0.45;

const TITULO_CANCION = "Nuestra canción";
const ARTISTA = "Una historia de amor";

const IMAGEN_VINILO = "/portada.jpg";

// ==========================================
// UTILIDADES
// ==========================================

const formatearTiempo = (segundos) => {
  if (!Number.isFinite(segundos)) return "0:00";

  const minutos = Math.floor(segundos / 60);
  const resto = Math.floor(segundos % 60);

  return `${minutos}:${String(resto).padStart(2, "0")}`;
};

// ==========================================
// REPRODUCTOR CLÁSICO
// ==========================================

function Reproductor({
  reproduciendo,
  cargando,
  silenciado,
  duracion,
  tiempoActual,
  errorAudio,
  onPlay,
  onSilencio,
  onProgreso,
}) {
  const progreso =
    duracion > 0
      ? Math.min(100, (tiempoActual / duracion) * 100)
      : 0;

  return (
    <div
      className="
        relative w-full max-w-[380px]
        overflow-hidden
        rounded-[8px]
        border border-[#B8B8A4]
        bg-[#F8F6EF]
        px-5 py-6
        text-center
        shadow-[0_20px_55px_rgba(20,30,15,0.2)]
        sm:px-8 sm:py-8
      "
    >
      {/* MARCO INTERIOR */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-[7px]
          border border-[#8C947C]/25
        "
      />

      {/* ENCABEZADO */}
      <p
        className="
          relative z-10 mb-2
          font-serif text-[10px]
          uppercase tracking-[0.28em]
          text-[#697455]
        "
      >
        Una melodía especial
      </p>

      <h2
        className="
          relative z-10
          font-serif text-[25px]
          font-normal italic
          text-[#414B32]
          sm:text-[29px]
        "
      >
        Nuestra canción
      </h2>

      <div
        className="
          mx-auto mb-5 mt-3
          flex items-center justify-center gap-2
        "
      >
        <span className="h-px w-10 bg-[#A2AA92]" />
        <span className="text-[13px] text-[#697455]">✦</span>
        <span className="h-px w-10 bg-[#A2AA92]" />
      </div>

      {/* ======================================
          DISCO DE VINILO GIRATORIO
      ====================================== */}

      <div
        className="
          relative mx-auto mb-6
          h-[170px] w-[170px]
          min-[380px]:h-[195px]
          min-[380px]:w-[195px]
          sm:h-[215px] sm:w-[215px]
        "
      >
        <div
          className="
            wedly-vinilo
            relative h-full w-full
            rounded-full
            bg-[#283222]
            shadow-[0_12px_25px_rgba(0,0,0,0.22)]
          "
          style={{
            animationPlayState: reproduciendo
              ? "running"
              : "paused",
          }}
        >
          {/* SURCOS DEL VINILO */}
          <div className="absolute inset-[9px] rounded-full border border-white/10" />
          <div className="absolute inset-[18px] rounded-full border border-white/10" />
          <div className="absolute inset-[28px] rounded-full border border-white/10" />
          <div className="absolute inset-[39px] rounded-full border border-white/10" />

          {/* REFLEJO SUTIL */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              rounded-full
            "
            style={{
              background:
                "conic-gradient(from 30deg, transparent 0deg, rgba(255,255,255,0.09) 45deg, transparent 85deg, transparent 180deg, rgba(255,255,255,0.05) 230deg, transparent 270deg)",
            }}
          />

          {/* FOTOGRAFÍA CENTRAL */}
          <div
            className="
              absolute left-1/2 top-1/2
              flex h-[88px] w-[88px]
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center
              overflow-hidden rounded-full
              border-[5px] border-[#D9D9C6]
              bg-[#879273]
              min-[380px]:h-[100px]
              min-[380px]:w-[100px]
              sm:h-[110px] sm:w-[110px]
            "
          >
            <img
              src={IMAGEN_VINILO}
              alt="Fotografía de nuestra historia"
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* CENTRO DEL DISCO */}
          <span
            className="
              absolute left-1/2 top-1/2
              z-10 h-[7px] w-[7px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-[#F8F6EF]
              shadow-sm
            "
          />
        </div>
      </div>

      {/* INFORMACIÓN DE LA CANCIÓN */}
      <h3
        className="
          font-serif text-[17px]
          text-[#30392A]
          sm:text-[19px]
        "
      >
        {TITULO_CANCION}
      </h3>

      <p
        className="
          mt-1 font-serif
          text-[12px] italic
          text-[#778069]
        "
      >
        {ARTISTA}
      </p>

      {/* BARRA DE PROGRESO */}
      <div className="mt-6">
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progreso}
          onChange={onProgreso}
          disabled={duracion <= 0}
          aria-label="Progreso de la canción"
          className="
            h-[4px] w-full
            cursor-pointer
            accent-[#414B32]
            disabled:cursor-default
          "
          style={{
            background: `linear-gradient(
              to right,
              #414B32 ${progreso}%,
              #D7D9CC ${progreso}%
            )`,
            appearance: "none",
            borderRadius: "999px",
          }}
        />

        <div
          className="
            mt-2 flex justify-between
            font-serif text-[10px]
            text-[#778069]
          "
        >
          <span>{formatearTiempo(tiempoActual)}</span>
          <span>{formatearTiempo(duracion)}</span>
        </div>
      </div>

      {/* CONTROLES */}
      <div
        className="
          mt-3 flex items-center
          justify-center gap-7
        "
      >
        {/* VOLUMEN */}
        <button
          type="button"
          onClick={onSilencio}
          aria-label={
            silenciado ? "Activar sonido" : "Silenciar música"
          }
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-full
            text-[#414B32]
            transition hover:bg-[#E5E8DB]
          "
        >
          {silenciado ? (
            <VolumeX size={20} strokeWidth={1.5} />
          ) : (
            <Volume2 size={20} strokeWidth={1.5} />
          )}
        </button>

        {/* PLAY: REPRODUCE Y ABRE LA INVITACIÓN */}
        <button
          type="button"
          onClick={onPlay}
          disabled={cargando}
          aria-label="Reproducir música y abrir invitación"
          className="
            flex h-[58px] w-[58px]
            items-center justify-center
            rounded-full
            bg-[#414B32]
            text-white
            shadow-md
            transition hover:scale-105
            disabled:opacity-60
          "
        >
          {cargando ? (
            <span
              className="
                h-5 w-5 animate-spin
                rounded-full
                border-2 border-white/30
                border-t-white
              "
            />
          ) : (
            <Play size={22} fill="currentColor" />
          )}
        </button>

        <div
          aria-hidden="true"
          className="
            flex h-11 w-11
            items-center justify-center
            text-[#414B32]
          "
        >
          <Music2 size={19} strokeWidth={1.4} />
        </div>
      </div>

      {errorAudio && (
        <p
          role="alert"
          className="mt-3 text-xs text-[#93483D]"
        >
          No se pudo reproducir la canción.
          Puedes continuar sin música.
        </p>
      )}
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Musica() {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [silenciado, setSilenciado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [duracion, setDuracion] = useState(0);
  const [tiempoActual, setTiempoActual] = useState(0);
  const [errorAudio, setErrorAudio] = useState(false);

  // ==========================================
  // CONFIGURACIÓN DEL AUDIO
  // ==========================================

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = VOLUMEN_INICIAL;

    const actualizarTiempo = () => {
      setTiempoActual(audio.currentTime);
    };

    const actualizarDuracion = () => {
      setDuracion(
        Number.isFinite(audio.duration)
          ? audio.duration
          : 0
      );
    };

    const alReproducir = () => {
      setReproduciendo(true);
      setCargando(false);
      setErrorAudio(false);
    };

    const alPausar = () => {
      setReproduciendo(false);
      setCargando(false);
    };

    const alEsperar = () => {
      setCargando(true);
    };

    const alError = () => {
      setErrorAudio(true);
      setCargando(false);
      setReproduciendo(false);
    };

    const alVolumen = () => {
      setSilenciado(audio.muted);
    };

    audio.addEventListener("timeupdate", actualizarTiempo);
    audio.addEventListener("loadedmetadata", actualizarDuracion);
    audio.addEventListener("durationchange", actualizarDuracion);
    audio.addEventListener("playing", alReproducir);
    audio.addEventListener("pause", alPausar);
    audio.addEventListener("waiting", alEsperar);
    audio.addEventListener("error", alError);
    audio.addEventListener("volumechange", alVolumen);

    return () => {
      audio.removeEventListener("timeupdate", actualizarTiempo);
      audio.removeEventListener("loadedmetadata", actualizarDuracion);
      audio.removeEventListener("durationchange", actualizarDuracion);
      audio.removeEventListener("playing", alReproducir);
      audio.removeEventListener("pause", alPausar);
      audio.removeEventListener("waiting", alEsperar);
      audio.removeEventListener("error", alError);
      audio.removeEventListener("volumechange", alVolumen);
    };
  }, []);

  // ==========================================
  // ENTRAR CON MÚSICA
  // ==========================================

  const iniciarMusica = async () => {
    const audio = audioRef.current;

    if (!audio || cargando) return;

    try {
      setCargando(true);
      setErrorAudio(false);

      audio.muted = false;

      await audio.play();

      // Cualquier Play del modal abre la invitación.
      setMostrarModal(false);
    } catch (error) {
      console.error("Error al reproducir música:", error);
      setErrorAudio(true);
    } finally {
      setCargando(false);
    }
  };

  // ==========================================
  // CONTINUAR SIN MÚSICA
  // ==========================================

  const continuarSinMusica = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setCargando(false);
    setMostrarModal(false);
  };

  // ==========================================
  // CONTROLES FLOTANTES
  // ==========================================

  const alternarReproduccion = async () => {
    const audio = audioRef.current;

    if (!audio || cargando) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      setCargando(true);
      setErrorAudio(false);

      await audio.play();
    } catch (error) {
      console.error("Error al reproducir música:", error);
      setErrorAudio(true);
    } finally {
      setCargando(false);
    }
  };

  // ==========================================
  // SILENCIAR / ACTIVAR
  // ==========================================

  const alternarSilencio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
  };

  // ==========================================
  // CAMBIAR PROGRESO
  // ==========================================

  const cambiarProgreso = (event) => {
    const audio = audioRef.current;

    if (!audio || duracion <= 0) return;

    const porcentaje = Number(event.target.value);

    audio.currentTime =
      (porcentaje / 100) * duracion;

    setTiempoActual(audio.currentTime);
  };

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src={MUSICA_URL}
        loop
        preload="metadata"
      />

      {/* ======================================
          ANIMACIÓN DEL VINILO
      ====================================== */}

      <style jsx global>{`
        @keyframes wedlyGirarVinilo {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .wedly-vinilo {
          animation: wedlyGirarVinilo 9s linear infinite;
          transform-origin: center center;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .wedly-vinilo {
            animation-duration: 30s;
          }
        }
      `}</style>

      {/* ======================================
          MODAL DE BIENVENIDA
      ====================================== */}

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Bienvenida musical"
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              overflow-y-auto
              bg-[#25301F]/95
              px-4 py-5
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* FONDO DECORATIVO */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-0
                overflow-hidden
              "
            >
              <div
                className="
                  absolute -left-24 -top-20
                  h-[300px] w-[300px]
                  rounded-full
                  bg-[#8A9873]/20
                  blur-[90px]
                "
              />

              <div
                className="
                  absolute -bottom-24 -right-20
                  h-[350px] w-[350px]
                  rounded-full
                  bg-[#AAB59B]/20
                  blur-[100px]
                "
              />
            </div>

            <motion.div
              className="
                relative z-10 my-auto
                flex w-full max-w-[420px]
                flex-col items-center
              "
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{ duration: 0.55 }}
            >
              {/* CERRAR */}
              <button
                type="button"
                onClick={continuarSinMusica}
                aria-label="Cerrar y continuar sin música"
                className="
                  mb-3 ml-auto
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-white/35
                  bg-white/10
                  text-white
                  transition hover:bg-white/20
                "
              >
                <X size={19} />
              </button>

              {/* REPRODUCTOR */}
              <Reproductor
                reproduciendo={reproduciendo}
                cargando={cargando}
                silenciado={silenciado}
                duracion={duracion}
                tiempoActual={tiempoActual}
                errorAudio={errorAudio}
                onPlay={iniciarMusica}
                onSilencio={alternarSilencio}
                onProgreso={cambiarProgreso}
              />

              {/* BOTONES DE ENTRADA */}
              <div
                className="
                  mt-5 flex w-full
                  max-w-[380px]
                  flex-col gap-3
                "
              >
                <button
                  type="button"
                  onClick={iniciarMusica}
                  disabled={cargando}
                  className="
                    flex min-h-12 w-full
                    items-center justify-center gap-2
                    rounded-full
                    bg-[#F8F6EF]
                    px-5 py-3
                    text-xs font-medium
                    uppercase tracking-[0.13em]
                    text-[#414B32]
                    transition hover:bg-white
                    disabled:opacity-60
                  "
                >
                  <Play size={15} fill="currentColor" />
                  Entrar con música
                </button>

                <button
                  type="button"
                  onClick={continuarSinMusica}
                  className="
                    min-h-11 w-full
                    rounded-full
                    border border-white/45
                    px-5 py-3
                    text-xs uppercase
                    tracking-[0.13em]
                    text-white
                    transition hover:bg-white/10
                  "
                >
                  Continuar sin música
                </button>
              </div>

              <p
                className="
                  mt-5 text-center
                  font-serif text-[12px]
                  italic text-white/80
                "
              >
                Que esta historia siempre suene así...
              </p>

              <ChevronDown
                size={19}
                className="mt-3 text-white/75"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================
          CONTROLES FLOTANTES
      ====================================== */}

      {!mostrarModal && (
        <motion.div
          className="
            fixed bottom-4 right-4
            z-[9998]
            flex items-center gap-1
            rounded-full
            border border-[#AAB19B]/50
            bg-[#F8F6EF]/95
            p-1.5
            shadow-[0_10px_30px_rgba(0,0,0,0.2)]
            backdrop-blur-md
            sm:bottom-6 sm:right-6
          "
          style={{
            bottom:
              "max(1rem, env(safe-area-inset-bottom))",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* PLAY / PAUSA */}
          <button
            type="button"
            onClick={alternarReproduccion}
            disabled={cargando}
            aria-label={
              reproduciendo
                ? "Pausar música"
                : "Reproducir música"
            }
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              bg-[#414B32]
              text-white
              transition hover:scale-105
              disabled:opacity-60
            "
          >
            {cargando ? (
              <span
                className="
                  h-4 w-4 animate-spin
                  rounded-full
                  border-2 border-white/30
                  border-t-white
                "
              />
            ) : reproduciendo ? (
              <Pause size={17} fill="currentColor" />
            ) : (
              <Play size={17} fill="currentColor" />
            )}
          </button>

          {/* VOLUMEN */}
          <button
            type="button"
            onClick={alternarSilencio}
            aria-label={
              silenciado
                ? "Activar sonido"
                : "Silenciar música"
            }
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              text-[#414B32]
              transition hover:bg-[#E6E9DE]
            "
          >
            {silenciado ? (
              <VolumeX size={19} />
            ) : (
              <Volume2 size={19} />
            )}
          </button>
        </motion.div>
      )}
    </>
  );
}
