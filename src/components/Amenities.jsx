const amenities = [
  {
    title: "Infinity Pool",
    description: "A glass-edge pool with panoramic skyline views.",
  },
  {
    title: "Sky Lounge",
    description: "A rooftop social club designed for elegant evenings.",
  },
  {
    title: "Wellness Studio",
    description: "Yoga decks, spa rooms, and a premium fitness studio.",
  },
  {
    title: "Green Courtyard",
    description: "Lush gardens and walking trails within a peaceful enclave.",
  },
  {
    title: "Family Pavilion",
    description: "Play areas and lounge zones for all ages.",
  },
  {
    title: "Private Dining",
    description: "Chef-curated event spaces for intimate celebrations.",
  },
];

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Amenities() {
  return (
    <section id="amenities" className="py-24 px-6 bg-[#040404] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-yellow-400 uppercase tracking-[0.3em] mb-4"
        >
          Amenities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-black mb-16"
        >
          Everything for the life you deserve
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-yellow-400 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Amenities;
