import { motion } from "framer-motion";

function MasterPlan() {
  return (
    <section id="plans" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          className="text-yellow-400 uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Floor Plan
        </motion.p>
        <motion.h2
          className="text-5xl font-black mb-10"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Master & Unit Layout
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-sm uppercase tracking-[0.35em] text-white">Master Plan Layout</p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-300 mb-6">Request the master layout to explore the township and amenity zoning.</p>
              <motion.button
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Request Master Layout Plan
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-sm uppercase tracking-[0.35em] text-white">Unit Plan Layout</p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-300 mb-6">Review the unit layouts for 2, 3, and 4 BHK residences.</p>
              <motion.button
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Request Unit Layout Plans
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MasterPlan;
