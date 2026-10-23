
import React from "react";
import { motion } from "framer-motion";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const imagenFinal = "/final.png";



// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const FinalBoda = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-[#4A141D]
      "
    >
      {/* FOTOGRAFÍA DE FONDO */}
      <img
        src={imagenFinal}
        alt="Fotografía final de los novios"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-[center_15%]
        "
      />

      
    </section>
  );
};

export default FinalBoda;
