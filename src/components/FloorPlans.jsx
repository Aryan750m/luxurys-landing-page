import { motion } from "framer-motion";

const pricing = [
  { type: "2 BHK", area: "620 - 760 Sq.ft", price: "INR 1.20 - 1.61 Cr" },
  { type: "3 BHK", area: "1234 Sq.ft", price: "INR 2.41 Cr+" },
  { type: "3.5 BHK", area: "1598 Sq.ft", price: "INR 2.89 Cr+" },
  { type: "4 BHK", area: "1858 Sq.ft", price: "INR 3.34 Cr+" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function FloorPlans() {
  return (
    <section id="pricing" className="bg-[#090909] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-yellow-400 uppercase tracking-[0.3em] mb-4"
          >
            Area & Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-black"
          >
            Sai World City Panvel - Area & Pricing
          </motion.h2>
        </div>

        <motion.div
          className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <table className="min-w-full text-left text-sm text-gray-300">
            <thead className="border-b border-white/10 bg-white/5 text-gray-400">
              <tr>
                <th className="px-6 py-5">Type</th>
                <th className="px-6 py-5">Area</th>
                <th className="px-6 py-5">Price (Onwards)</th>
                <th className="px-6 py-5">Action</th>
              </tr>
            </thead>
            <motion.tbody variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {pricing.map((item, index) => (
                <motion.tr key={index} variants={itemVariants} className="border-b border-white/10 hover:bg-white/5">
                  <td className="px-6 py-5 font-semibold">{item.type}</td>
                  <td className="px-6 py-5">{item.area}</td>
                  <td className="px-6 py-5">{item.price}</td>
                  <td className="px-6 py-5">
                    <motion.button
                      className="rounded-full border border-white/20 bg-yellow-400 px-5 py-3 text-black font-semibold hover:bg-white hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Complete Costing Details
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

export default FloorPlans;
