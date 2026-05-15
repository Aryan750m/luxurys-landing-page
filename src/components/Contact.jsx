import { motion } from "framer-motion";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your pre-registration request has been received. Our team will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1fr_0.95fr] items-center">
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/5 p-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Schedule a Site Visit</p>
          <h2 className="text-5xl font-black mb-10">Pre-Register Here for Best Offers</h2>
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Your Name</label>
              <input type="text" placeholder="Enter Your Name here..." className="w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none transition" />
            </div>
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Phone Number</label>
              <input type="tel" placeholder="+91 Phone Number" className="w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none transition" />
            </div>
            <motion.button
              type="submit"
              className="w-full rounded-3xl bg-yellow-400 px-8 py-4 font-semibold text-black hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Pre-Register Now
            </motion.button>
          </form>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 text-center text-xs text-gray-400">
            <div className="rounded-3xl bg-white/5 p-4">Instant Call Back</div>
            <div className="rounded-3xl bg-white/5 p-4">Free Site Visit</div>
            <div className="rounded-3xl bg-white/5 p-4">Best Price</div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden border border-white/10 bg-white/5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop" alt="Sai World City building" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
