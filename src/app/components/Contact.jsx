"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Contact() {

  return (

    <section
      className="relative text-center text-white bg-fixed bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: "url('img/contact.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-3xl mx-auto px-6 z-10">

        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Vous avez un projet en tête ?
        </motion.h2>

        <motion.p
          className="mt-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          N'hesitez pas à nous contactez !!
        </motion.p>

        <motion.div
          className="mt-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <Link
            href="/contact"
            className="bg-yellow-500 inline-block text-white px-6 py-3 hover:bg-yellow-600 transition font-semibold rounded"
          >
            Contactez-moi
          </Link>
        </motion.div>

      </div>
    </section>

  );
}
