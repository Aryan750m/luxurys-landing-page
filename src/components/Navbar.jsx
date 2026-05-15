import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { scrollToContact } from "../utils/contactActions";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 rounded-full bg-yellow-400 grid place-items-center text-black font-black">P</div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-300">Paradise</p>
            <h1 className="text-lg font-black text-white">Sai World City</h1>
          </div>
        </motion.div>

        <div className="hidden lg:flex gap-8 text-white text-sm font-medium">
          <motion.a href="#home" className="transition hover:text-yellow-400" whileHover={{ y: -2 }}>Home</motion.a>
          <motion.a href="#highlights" className="transition hover:text-yellow-400" whileHover={{ y: -2 }}>Highlights</motion.a>
          <motion.a href="#pricing" className="transition hover:text-yellow-400" whileHover={{ y: -2 }}>Pricing</motion.a>
          <motion.a href="#plans" className="transition hover:text-yellow-400" whileHover={{ y: -2 }}>Floor Plan</motion.a>
          <motion.a href="#amenities" className="transition hover:text-yellow-400" whileHover={{ y: -2 }}>Amenities</motion.a>
          <motion.a href="#gallery" className="transition hover:text-yellow-400" whileHover={{ y: -2 }}>Gallery</motion.a>
          <motion.a href="#location" className="transition hover:text-yellow-400" whileHover={{ y: -2 }}>Location</motion.a>
        </div>

        <motion.button
          type="button"
          onClick={scrollToContact}
          className="bg-yellow-400 text-black px-5 py-3 rounded-full flex items-center gap-2 font-semibold text-sm"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhoneAlt /> Enquire
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
