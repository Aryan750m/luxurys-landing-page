import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 scale-105 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-85 blur-[1px]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
          <div className="text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="uppercase tracking-[0.4em] text-yellow-400 mb-4 text-sm"
            >
              Sai World City Panvel
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-black leading-tight mb-8 drop-shadow-[0_8px_28px_rgba(0,0,0,0.75)]"
            >
              Premium residences curated for modern luxury living
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-gray-200 max-w-2xl text-lg leading-relaxed mb-10"
            >
              A signature residential destination on 38 acres in Panvel, offering 2 to 4 BHK homes with resort-style amenities, lush landscapes, and excellent connectivity.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:shadow-[0_0_28px_rgba(250,204,21,0.42)] transition-all duration-300"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Pre-Register Now
            </motion.a>
          </div>

          <motion.div
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -6 }}
          >
            <div className="mb-8 rounded-3xl bg-gradient-to-br from-yellow-400 to-purple-700 p-6 text-black">
              <p className="text-sm uppercase tracking-[0.3em] font-semibold">Booking Open</p>
              <h2 className="mt-4 text-3xl font-black">SAI WORLD CITY</h2>
              <p className="mt-2 text-sm text-black/80">By Paradise Group</p>
              <p className="mt-1 text-sm text-black/70">At Panvel, Navi Mumbai</p>

              <div className="mt-6 rounded-3xl bg-black/10 p-5 text-left text-xs text-black/80">
                <p className="font-semibold">Mega Township Spread Across 38 Acres</p>
                <p className="mt-2">World Class Themed Amenities & Clubhouse</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="rounded-3xl bg-white/5 p-5 border border-white/10 text-left">
                <p className="text-yellow-400 font-semibold">Luxury 2, 2.5, 3 & 4 BHK Starts</p>
                <p className="text-3xl font-black mt-2">INR 89 Lakhs* Onwards</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs text-gray-400">
                <div className="rounded-3xl bg-white/5 p-4">Instant Call Back</div>
                <div className="rounded-3xl bg-white/5 p-4">Free Site Visit</div>
                <div className="rounded-3xl bg-white/5 p-4">Best Price</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
