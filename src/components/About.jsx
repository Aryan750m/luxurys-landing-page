import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-[#070707] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">About Sai World City</p>
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            A new horizon for elevated living in Panvel
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Inspired by waterfront luxury and modern urban comforts, this residence blends serene landscapes with premium amenities for families and professionals seeking calm without compromise.
          </p>
          <div className="grid gap-4 text-gray-300 md:grid-cols-2">
            <motion.div className="rounded-3xl bg-white/5 p-6 border border-white/10" whileHover={{ y: -5 }}>
              <p className="text-xl font-semibold text-white">Smart homes</p>
              <p className="text-sm mt-2">Intelligent living spaces with energy-efficient design.</p>
            </motion.div>
            <motion.div className="rounded-3xl bg-white/5 p-6 border border-white/10" whileHover={{ y: -5 }}>
              <p className="text-xl font-semibold text-white">Resort-style living</p>
              <p className="text-sm mt-2">Lagoon pool, landscaped gardens, and lounge terraces.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop"
          className="rounded-3xl shadow-2xl"
          alt="About Sai World City"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}

export default About;
