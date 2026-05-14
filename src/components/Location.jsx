import { motion } from "framer-motion";

function Location() {
  const advantages = [
    "Mumbai-Pune Expressway - 5 Mins",
    "Panvel Railway Station - 10 Mins",
    "Panvel-Karjat Railway Corridor - 10 Mins",
    "NH-48 Highway Connectivity - 5 Mins",
    "Airoli SUTL - 20 Mins",
    "Navi Mumbai International Airport - 20 Mins",
    "CBD Belapur - 20 Mins",
    "Upcoming Metro Connectivity - Nearby",
  ];

  return (
    <section id="location" className="py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Location Advantage</p>
          <h2 className="text-5xl font-black">Sai World City Panvel Location Advantage</h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <motion.div
            className="rounded-3xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Sai World City Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.004430842445!2d73.04812987506762!3d18.944294987341407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cbf476568f73%3A0x78f7d4f2dd7e80ec!2sPanvel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="h-96 w-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div className="rounded-3xl bg-white/5 border border-white/10 p-6" whileHover={{ y: -5 }}>
              <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Connectivity</p>
              <ul className="space-y-3 text-gray-300">
                {advantages.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="rounded-3xl bg-white/5 border border-white/10 p-6" whileHover={{ y: -5 }}>
              <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Lifestyle & Infrastructure</p>
              <ul className="space-y-3 text-gray-300">
                {advantages.slice(4).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Location;
