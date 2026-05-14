import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

function Footer() {
  const quickLinks = ["Home", "Highlights", "Pricing", "Amenities", "Gallery", "Location"];
  const linkTargets = ["#home", "#highlights", "#pricing", "#amenities", "#gallery", "#location"];
  const socialIcons = [FaInstagram, FaLinkedin, FaTwitter];

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <footer className="bg-[#030303] border-t border-white/10 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">About Paradise Group</p>
          <h2 className="text-4xl font-black mb-6">Building tomorrow's signature residences</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Established in 1990 by Mr. Madh Bhatia, Paradise Group is one of Navi Mumbai's leading real estate developers. Known for landmark residential and commercial projects, the group has delivered premium spaces with a focus on architecture, luxury, and customer trust.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Agent Reg. No. A00120301991 | RERA No. P52000052218 | P52000052218
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl bg-white/5 border border-white/10 p-8 text-gray-300"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "#faca15" }}
        >
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Project Details</p>
          <ul className="space-y-3 text-sm">
            <li>38 Acre Integrated Global Lifestyle Township</li>
            <li>2, 2.5, 3 & 4 BHK Luxury Residences</li>
            <li>75,000 Sq.ft Club Vegas Clubhouse</li>
            <li>World Class Themed Amenities</li>
            <li>Prime Panvel Location with Excellent Connectivity</li>
          </ul>
        </motion.div>

        <motion.div
          className="rounded-3xl bg-white/5 border border-white/10 p-8 text-gray-300"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "#faca15" }}
        >
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Connect</p>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-yellow-400" /> +91 98765 43210</p>
            <p className="flex items-center gap-3"><FaEnvelope className="text-yellow-400" /> sales@saiworldcity.com</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-yellow-400" /> Panvel, Navi Mumbai</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {quickLinks.map((link, index) => (
              <a key={link} href={linkTargets[index]} className="transition hover:text-yellow-400">
                {link}
              </a>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            {socialIcons.map((Icon, index) => (
              <motion.a
                key={index}
                href="#home"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/40 text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                custom={index}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.05 }}
                aria-label="Social profile"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-14 border-t border-white/10 pt-8 text-center text-gray-500 text-sm"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Copyright 2026 Sai World City. All Rights Reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;
