import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Sai World City has become our family's sanctuary: spacious homes, quiet gardens, and everything within reach.",
    author: "Aarav & Meera",
  },
  {
    quote:
      "The design feels modern, yet warm. Every detail feels premium, and the location is incredibly convenient.",
    author: "Nina Patel",
  },
];

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          className="text-yellow-400 uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.p>
        <motion.h2
          className="text-5xl font-black mb-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Words from our residents
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-12 rounded-3xl text-left transition-colors duration-300 hover:border-yellow-400/70"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">"{item.quote}"</p>
              <p className="text-yellow-400 font-semibold">- {item.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
