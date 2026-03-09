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
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
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
          <h1 className="text-[10vw] font-black leading-none tracking-tighter uppercase text-white">VARPEC</h1>
          <div className="flex gap-4 mt-6 text-xl text-gray-300 uppercase">
            <span>Branding</span> • <span>Art Direction</span> • <span>Motion</span>
          </div>
          <h2 className="text-6xl font-bold mt-12">Let's BEGIN</h2>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <div className="flex flex-col md:flex-row gap-10">
          <h3 className="text-2xl text-gray-500 w-1/4">About <span className="text-white ml-2">01</span></h3>
          <p className="text-4xl md:text-5xl font-medium w-full md:w-3/4 leading-tight">
            As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
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
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <h3 className="text-2xl text-gray-500 mb-16">Projects <span className="text-white ml-2">03</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

      {/* Founder Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <div className="flex flex-col md:flex-row gap-10">
          <h3 className="text-2xl text-gray-500 w-1/4">Founder <span className="text-white ml-2">04</span></h3>
          <div className="w-full md:w-3/4">
            <h4 className="text-4xl md:text-5xl font-medium leading-tight mb-8">
              Founded VARPEC 2023. He works with passion and creativity. Over 15+ years experience. Willing to make more exceptional.
            </h4>
            <div className="w-full h-[50vh] bg-gray-900 rounded-xl overflow-hidden relative flex items-center justify-center">
              <span className="text-gray-500">[ Video Placeholder ]</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Awards Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <h3 className="text-2xl text-gray-500 mb-16">Awards <span className="text-white ml-2">05</span></h3>
        <p className="text-3xl mb-12">/ We focus on quality products that drive result /</p>
        <div className="flex flex-col gap-10">
          { [
            { title: "SOTD FOR E-commerce Website", num: "01", desc: "Every decision ties to KPIs (conversion, leads, ARPU, SEO)." },
            { title: "Design That Drives Business", num: "02", desc: "Our decisions are KPI-led (conversion, leads, and SEO)." },
            { title: "Business Website Of the Month", num: "03", desc: "Data-driven decisions focusing on (sales, growth, and Results)." }
          ].map((award, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between border-b border-gray-800 pb-10">
              <h4 className="text-4xl font-bold uppercase w-1/2">{award.title}</h4>
              <div className="w-1/2 flex flex-col items-end text-right gap-4">
                <span className="text-gray-500">[{award.num}]</span>
                <p className="text-gray-400 max-w-sm">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Statistic Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <h3 className="text-2xl text-gray-500 mb-16">Statistic <span className="text-white ml-2">06</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h4 className="text-8xl font-black mb-4">98%</h4>
            <p className="text-xl text-gray-400">Project Completed in timeline. With a various number of project types.</p>
          </div>
          <div>
            <h4 className="text-8xl font-black mb-4">28M</h4>
            <p className="text-xl text-gray-400">Fund Raised till now. We have become one of the most successful agencies.</p>
          </div>
        </div>
      </motion.section>

      {/* Team Member Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800">
        <h3 className="text-2xl text-gray-500 mb-16">Team Member <span className="text-white ml-2">07</span></h3>
        <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 bg-gray-800 rounded-full mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="Avery James" className="w-full h-full object-cover grayscale" />
            </div>
            <h4 className="text-4xl font-bold">Avery James</h4>
            <p className="text-gray-400 mt-2">Co-Founder / Product Lead</p>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full py-32 px-10 border-t border-gray-800 bg-white text-black">
        <h3 className="text-2xl text-gray-500 mb-16">Pricing <span className="text-black ml-2">10</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { [
                { name: "STANDARD PLAN", price: "$399", desc: "Best for Personal. Have design ready to build with small budget?" },
                { name: "PREMIUM PLAN", price: "$1200", desc: "Popular Plan. Have design ready to build with average budget." },
                { name: "CUSTOM PLAN", price: "CONTACT", desc: "Specialized Plan. Got a design ready? We’ll tailor it to your plan." }
            ].map((plan, i) => (
                <div key={i} className="border border-gray-300 p-10 rounded-2xl flex flex-col hover:bg-gray-50 transition-colors">
                    <p className="text-gray-500 uppercase mb-4">/0{i+1}</p>
                    <h4 className="text-3xl font-black mb-4">{plan.name}</h4>
                    <p className="text-gray-600 mb-8">{plan.desc}</p>
                    <h5 className="text-5xl font-bold mb-8">{plan.price}</h5>
                    <button className="bg-black text-white w-full py-4 rounded-full font-bold hover:bg-gray-800 transition-colors mt-auto">Get This Plan</button>
                </div>
            ))}
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full py-32 px-10 bg-black text-white border-t border-gray-800">
        <div className="flex flex-col md:flex-row gap-20">
            <div className="w-full md:w-1/2">
                <h3 className="text-2xl text-gray-500 mb-8">Get in Touch <span className="text-white ml-2">12</span></h3>
                <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">Drop us a line, we'll respond in 24 hours.</h2>
                <div className="mt-12">
                    <p className="text-gray-400 mb-2">Location</p>
                    <p className="text-xl">909-1/2 E 49th St<br/>Los Angeles, California(CA), 90011<br/>(323) 238-0614</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <input type="email" placeholder="Your Email" className="bg-transparent border-b border-gray-600 py-4 px-2 text-xl outline-none focus:border-white transition-colors" />
                <input type="text" placeholder="Your Phone" className="bg-transparent border-b border-gray-600 py-4 px-2 text-xl outline-none focus:border-white transition-colors" />
                <textarea placeholder="Let us know about your project" rows={4} className="bg-transparent border-b border-gray-600 py-4 px-2 text-xl outline-none focus:border-white transition-colors resize-none"></textarea>
                <button className="bg-white text-black px-10 py-5 rounded-full text-xl font-bold mt-8 w-max hover:bg-gray-200 transition-colors">Submit Request</button>
            </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full py-10 px-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm bg-black">
        <p>© 2025 VARPEC. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
        </div>
      </footer>
    </main>
  );
}
