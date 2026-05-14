import { motion } from "framer-motion";

function Highlights() {
  const items = [
    "2 to 4 BHK Luxury High-Rise Residences",
    "38 Acre Integrated Global Lifestyle Township",
    "Smart Investment Hub With High ROI Potential",
    "Multi-Level Parking With Podium Lifestyle Spaces",
    "75,000 Sq.ft Club Vegas Clubhouse",
    "50+ Lifestyle, Leisure & Wellness Amenities",
    "Prime Panvel Location With Excellent Connectivity",
    "Developed By Paradise Group",
  ];

  return (
    <section id="highlights" className="py-24 px-6 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Sai World City Panvel - Highlights</p>
            <h2 className="text-4xl md:text-5xl font-black">The perfect harmony of luxury, convenience, and lifestyle</h2>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 text-sm text-gray-300 max-w-md">
            <p className="font-semibold text-white mb-2">Luxury 2, 2.5, 3 & 4 BHK Starts at</p>
            <p className="text-3xl font-black text-yellow-400">INR 89 Lakhs* Onwards</p>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-4 rounded-3xl bg-white/5 border border-white/10 p-6 transition-colors duration-300 hover:border-yellow-400/70"
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -5 }}
            >
              <div className="w-3 h-3 mt-2 rounded-full bg-yellow-400"></div>
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Highlights;
