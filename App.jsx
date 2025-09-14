import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-5 bg-gray-800 shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-pink-500">Vishal Kushwah</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-pink-400">Home</a></li>
          <li><a href="#about" className="hover:text-pink-400">About</a></li>
          <li><a href="#freelancer" className="hover:text-pink-400">Freelancer</a></li>
          <li><a href="#experience" className="hover:text-pink-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
          <li><a href="#education" className="hover:text-pink-400">Education</a></li>
          <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center flex-1 text-center py-20">
        <motion.h2
          className="text-5xl font-extrabold mb-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-pink-500">Vishal</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Enthusiastic and detail-oriented Backend Developer specializing in Python Django,
          with a proven track record of building dynamic, data-driven applications. 
          I also have strong frontend knowledge in React, Next.js, TailwindCSS, and JavaScript.
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-6 px-6 py-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-4xl text-center">
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h3>
        <p className="text-gray-300 leading-relaxed">
          I’m Vishal Kushwah, a passionate Full-Stack Developer with expertise in 
          Python Django, MERN Stack, and modern frontend tools like React and TailwindCSS.  
          Along with my technical knowledge, I bring strong problem-solving, team collaboration,
          and communication skills that I’ve developed while working in cross-functional environments.
        </p>
      </section>

      {/* Freelancer & Google Ads Section */}
<section id="freelancer" className="py-16 max-w-6xl text-center">
  <h3 className="text-3xl font-bold mb-10">Freelancing & Google Ads</h3>
  <div className="grid md:grid-cols-2 gap-8 text-gray-300">
    
    {/* Freelancer Card */}
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05, backgroundColor: "#ec4899", color: "#fff" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="text-xl font-semibold mb-3">Freelancing Services</h4>
      <p>
        I offer professional web development services as a freelancer. 
        I have built responsive websites, portfolio sites, and e-commerce 
        platforms for clients using <span className="text-pink-400">React, Next.js, TailwindCSS, 
        and Django</span>. 
      </p>
      <ul className="list-disc text-left ml-6 mt-3">
        <li>Portfolio Website Development</li>
        <li>E-commerce Solutions</li>
        <li>Custom Web Applications</li>
        <li>Full-Stack Development (MERN / Django)</li>
      </ul>
    </motion.div>

    {/* Google Ads Card */}
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05, backgroundColor: "#ec4899", color: "#fff" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="text-xl font-semibold mb-3">Google Ads Expertise</h4>
      <p>
        Experienced in running and optimizing <span className="text-pink-400 ">Google Ads 
        campaigns</span> to help businesses grow their online presence 
        and increase sales. Skilled in targeting the right audience 
        and maximizing ROI.
      </p>
      <ul className="list-disc text-left ml-6 mt-3">
        <li>Search & Display Campaigns</li>
        <li>Keyword Research & Optimization</li>
        <li>Ad Copywriting & A/B Testing</li>
        <li>Conversion Tracking & Analytics</li>
      </ul>
    </motion.div>
  </div>
</section>


      {/* Experience Section */}
      <section id="experience" className="py-16 max-w-4xl text-center">
        <h3 className="text-3xl font-bold mb-6">Experience</h3>
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-xl font-semibold mb-2">Hospital Office Assistant & Accountant</h4>
          <p className="text-pink-400 mb-2">Divyanshi Hospital — Etawah (2023-2025)</p>
          <ul className="list-disc text-left ml-6 text-gray-300">
            <li>Handled Ayushman Bharat Cashless Scheme documentation & approvals</li>
            <li>Managed billing, accounting, and patient financial records</li>
            <li>Coordinated with insurance companies & government portals</li>
            <li>Assisted doctors in patient record keeping (OPD/IPD)</li>
          </ul>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 max-w-6xl text-center">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div className="p-6 bg-gray-800 rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-xl font-semibold mb-2">E-Commerce Platform</h4>
            <p className="text-gray-400">
              Developed multi-vendor online retail system with real-time inventory management.  
              <span className="block mt-2 text-pink-400">Tech Stack: Django, Python, HTML5, CSS3, JavaScript, MySQL</span>
            </p>
          </motion.div>
          <motion.div className="p-6 bg-gray-800 rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
            <p className="text-gray-400">
              Modern portfolio site showcasing my skills and projects.  
              <span className="block mt-2 text-pink-400">Tech Stack: Django, TailwindCSS, JavaScript</span>
            </p>
          </motion.div>
          <motion.div className="p-6 bg-gray-800 rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-xl font-semibold mb-2">Dynamic Task Management Tool</h4>
            <p className="text-gray-400">
              Responsive single-page application for managing tasks & to-do lists.  
              <span className="block mt-2 text-pink-400">Tech Stack: JavaScript, Node.js, MongoDB, Bootstrap</span>
            </p>
          </motion.div>
        </div>
      </section>

    {/* Skills Section */}
<section id="skills" className="py-16 max-w-4xl text-center">
  <h3 className="text-3xl font-bold mb-6">Skills</h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
    {[
      "Python (Django)",
      "JavaScript (React, Next.js, Node.js)",
      "SQL, MongoDB, MySQL",
      "HTML5, CSS3, TailwindCSS, Bootstrap",
      "Problem-Solving",
      "Communication & Team Collaboration",
    ].map((skill, i) => (
      <motion.span
        key={i}
        className="bg-gray-800 p-3 rounded-lg cursor-pointer shadow-md"
        whileHover={{ scale: 1.1, backgroundColor: "#ec4899", color: "#fff" }} // pink hover
        transition={{ type: "spring", stiffness: 300 }}
      >
        {skill}
      </motion.span>
    ))}
  </div>
</section>


   {/* Education Section */}
<section id="education" className="py-16 max-w-4xl text-center">
  <h3 className="text-3xl font-bold mb-6">Education</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
    {[
      "B.Sc (CSJM University, 2025)",
      "Diploma in Electronic Engineering (JS University, 2024)",
      "Intermediate (U.P. Board, 2022)",
      "High School (CBSE, 2020)",
      "ADCA (SRD Education Center, 2022)",
      "O level (NILITE, 2025)",
    ].map((edu, i) => (
      <motion.div
        key={i}
        className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
        whileHover={{ scale: 1.08, backgroundColor: "#ec4899", color: "#fff" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {edu}
      </motion.div>
    ))}
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="py-16 max-w-4xl text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
        <p className="text-gray-300 mb-6">Let's work together on your next project.</p>
        <a
          href="mailto:vishalkushawahetw@gmail.com"
          className="px-6 py-3 bg-pink-500 rounded-full hover:bg-pink-600"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-800 text-center text-gray-400">
        © 2025 Vishal Kushwah. All rights reserved.
      </footer>
    </div>
  );
}
