"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Navbar Placeholder */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <h1 className="text-2xl font-bold tracking-tighter">VARPEC</h1>
        <ul className="hidden md:flex gap-6 uppercase text-sm font-medium tracking-wide">
          <li>Home</li>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
        <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold">Chat With Us</button>
      </nav>

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center px-10 relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl">
          <p className="text-gray-400 uppercase tracking-widest mb-4">Design st '25 / we do</p>
          <h1 className="text-[10vw] font-black leading-none tracking-tighter uppercase text-white">
            VARPEC
          </h1>
          <div className="flex gap-4 mt-6 text-xl text-gray-300 uppercase">
            <span>Branding</span> • <span>Art Direction</span> • <span>Motion</span>
          </div>
          <h2 className="text-6xl font-bold mt-12">Let's BEGIN</h2>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <div className="flex flex-col md:flex-row gap-10">
          <h3 className="text-2xl text-gray-500 w-1/4">About <span className="text-white ml-2">01</span></h3>
          <p className="text-4xl md:text-5xl font-medium w-full md:w-3/4 leading-tight">
            As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <div className="flex flex-col md:flex-row gap-10">
          <h3 className="text-2xl text-gray-500 w-1/4">Services <span className="text-white ml-2">02</span></h3>
          <ul className="text-5xl md:text-7xl font-bold w-full md:w-3/4 flex flex-col gap-6 uppercase">
            <li className="hover:text-gray-400 transition-colors cursor-pointer">01 Motion</li>
            <li className="hover:text-gray-400 transition-colors cursor-pointer">02 Branding</li>
            <li className="hover:text-gray-400 transition-colors cursor-pointer">03 Graphic</li>
          </ul>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <h3 className="text-2xl text-gray-500 mb-16">Projects <span className="text-white ml-2">03</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="w-full h-[60vh] bg-gray-900 rounded-xl overflow-hidden mb-6 relative">
               <img src="https://images.unsplash.com/photo-1481481600465-36e1af1fed66?auto=format&fit=crop&q=80" alt="Levi Colwill" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold">LEVI COLWILL</h4>
                <p className="text-gray-400">Modelling 3D Graphic</p>
              </div>
              <p className="text-sm border border-gray-600 rounded-full px-3 py-1">July 2025</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer">
            <div className="w-full h-[60vh] bg-gray-900 rounded-xl overflow-hidden mb-6 relative">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" alt="The News" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold">THE NEWS</h4>
                <p className="text-gray-400">Mobile App UI</p>
              </div>
              <p className="text-sm border border-gray-600 rounded-full px-3 py-1">Aug 2025</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Member Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <h3 className="text-2xl text-gray-500 mb-16">Team Member <span className="text-white ml-2">07</span></h3>
        <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 bg-gray-800 rounded-full mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="Avery James" className="w-full h-full object-cover grayscale" />
            </div>
            <h4 className="text-4xl font-bold">Avery James</h4>
            <p className="text-gray-400 mt-2">Co-Founder / Product Lead</p>
        </div>
      </motion.section>

      {/* Playground Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800 overflow-hidden">
        <h3 className="text-2xl text-gray-500 mb-16">Playground <span className="text-white ml-2">08</span></h3>
        <h4 className="text-5xl md:text-7xl font-black uppercase mb-12">VARPEC'S PLAYGROUND</h4>
        <div className="flex w-full overflow-hidden mb-12 relative h-40 items-center bg-gray-900 rounded-xl">
            <motion.div 
               animate={{ x: [0, -1000] }} 
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
               className="flex whitespace-nowrap gap-10 text-4xl font-bold uppercase text-gray-600"
            >
                <span>Bespoke Dynamic Brand Experience</span>
                <span>•</span>
                <span>Creative Studio</span>
                <span>•</span>
                <span>Bespoke Dynamic Brand Experience</span>
                <span>•</span>
                <span>Creative Studio</span>
            </motion.div>
        </div>
        <p className="text-2xl md:text-4xl text-gray-400 max-w-4xl text-center mx-auto leading-relaxed">
          / Our works showreel showcases all beautiful works we’ve done /
        </p>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800 text-center flex flex-col items-center">
        <h3 className="text-2xl text-gray-500 mb-16 w-full text-left">Testimonials <span className="text-white ml-2">09</span></h3>
        <div className="w-24 h-24 bg-gray-800 rounded-full mb-8 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Adam Levine" className="w-full h-full object-cover grayscale" />
        </div>
        <h4 className="text-3xl md:text-5xl font-medium leading-tight max-w-5xl mb-12">
          “ VARPEC is a creative studio build branding and web design for visionary brands clarity. Visualize The Best Products “
        </h4>
        <p className="text-xl font-bold uppercase">Adam Levine</p>
        <p className="text-gray-500">CEO of Movit</p>
      </motion.section>

      {/* Pricing / Contact Placeholder */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full py-32 px-10 bg-white text-black text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase mb-10">Let's Get Started</h2>
        <p className="text-xl mb-10 text-gray-600">We bring you our Greatest Work. Drop us a line, we'll respond in 24 hours.</p>
        <button className="bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-800 transition-colors">Contact Us</button>
      </motion.section>
    </main>
  );
}
