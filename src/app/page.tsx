"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dark bg-gray-950 text-gray-100 min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-primary">Vishal Kushwah</h1>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {[
              "Home",
              "About",
              "Freelancer",
              "Experience",
              "Projects",
              "Skills",
              "Education",
              "Contact",
            ].map((item, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors text-gray-300"
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col items-center justify-center flex-1 text-center py-20"
      >
        <motion.h2
          className="text-5xl font-extrabold mb-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-primary">Vishal</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Enthusiastic and detail-oriented Backend Developer specializing in
          Python Django. Also skilled in React, Next.js, TailwindCSS, and
          JavaScript.
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button asChild className="mt-6">
            <a href="#projects">View My Work</a>
          </Button>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-16 max-w-4xl text-center">
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h3>
        <p className="text-gray-400 leading-relaxed">
          I’m Vishal Kushwah, a passionate Full-Stack Developer with expertise
          in Django, MERN Stack, React, and TailwindCSS. I bring problem-solving
          and collaboration skills to cross-functional environments.
        </p>
      </section>

      <Separator className="my-8 w-3/4 bg-gray-800" />

      {/* Freelancer & Google Ads */}
      <section id="freelancer" className="py-16 max-w-6xl text-center">
        <h3 className="text-3xl font-bold mb-10">Freelancing & Google Ads</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border border-gray-800 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle>Freelancing Services</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              <p>
                I build responsive websites, portfolio sites, and e-commerce
                platforms using{" "}
                <span className="text-primary">React, Next.js, TailwindCSS, Django</span>.
              </p>
              <ul className="list-disc ml-6 mt-3 text-left">
                <li>Portfolio Website Development</li>
                <li>E-commerce Solutions</li>
                <li>Custom Web Applications</li>
                <li>Full-Stack Development</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-gray-800 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle>Google Ads Expertise</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              <p>
                Experienced in running and optimizing{" "}
                <span className="text-primary">Google Ads campaigns</span> to
                grow businesses online.
              </p>
              <ul className="list-disc ml-6 mt-3 text-left">
                <li>Search & Display Campaigns</li>
                <li>Keyword Optimization</li>
                <li>Ad Copywriting & A/B Testing</li>
                <li>Conversion Tracking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      
      {/* Experience */}
<Separator className="my-8 w-3/4 bg-gray-800" />

<section id="experience" className="py-16 max-w-6xl text-center">
  <h3 className="text-3xl font-bold mb-10">Experience</h3>
  <div className="grid md:grid-cols-2 gap-8">
    <Card className="bg-gray-900 border border-gray-800 hover:shadow-lg transition-all">
      <CardHeader>
        <CardTitle>Backend Developer Intern</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-400">
        <p className="mb-3">
          Worked on scalable APIs and database optimization using{" "}
          <span className="text-primary">Django & MySQL</span>.
        </p>
        <ul className="list-disc ml-6 text-left">
          <li>Designed RESTful APIs for student management</li>
          <li>Improved query performance by 25%</li>
          <li>Integrated authentication & authorization</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-gray-900 border border-gray-800 hover:shadow-lg transition-all">
      <CardHeader>
        <CardTitle>Freelance Web Developer</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-400">
        <p className="mb-3">
          Developed responsive websites using{" "}
          <span className="text-primary">React, Next.js & TailwindCSS</span>.
        </p>
        <ul className="list-disc ml-6 text-left">
          <li>Built custom portfolio websites for clients</li>
          <li>Implemented SEO best practices</li>
          <li>Deployed apps on Vercel & DigitalOcean</li>
        </ul>
      </CardContent>
    </Card>
  </div>
</section>
<Separator className="my-8 w-3/4 bg-gray-800" />

      {/* Projects */}
      <section id="projects" className="py-16 max-w-6xl text-center">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "E-Commerce Platform",
              tech: "Django, Python, HTML, CSS, MySQL",
            },
            {
              title: "Portfolio Website",
              tech: "Django, TailwindCSS, JavaScript",
            },
            {
              title: "Task Management Tool",
              tech: "Node.js, MongoDB, Bootstrap",
            },
          ].map((project, i) => (
            <Card
              key={i}
              className="bg-gray-900 border border-gray-800 hover:shadow-lg transition-all"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Tech Stack:{" "}
                  <span className="text-primary">{project.tech}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8 w-3/4 bg-gray-800" />

      {/* Skills */}
      <section id="skills" className="py-16 max-w-4xl text-center">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Python (Django)",
            "React, Next.js, Node.js",
            "SQL, MongoDB, MySQL",
            "HTML, CSS, TailwindCSS",
            "Problem-Solving",
            "Collaboration",
          ].map((skill, i) => (
            <Card
              key={i}
              className="bg-gray-900 border border-gray-800 hover:bg-primary hover:text-gray-900 transition-all"
            >
              <CardContent className="p-4">{skill}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8 w-3/4 bg-gray-800" />

      {/* Education */}
      <section id="education" className="py-16 max-w-4xl text-center">
        <h3 className="text-3xl font-bold mb-6">Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "B.Sc (CSJM University, 2025)",
            "Diploma in Electronic Engineering (JS University, 2024)",
            "Intermediate (U.P. Board, 2022)",
            "High School (CBSE, 2020)",
            "ADCA (SRD Education Center, 2022)",
            "O Level (NILITE, 2025)",
          ].map((edu, i) => (
            <Card
              key={i}
              className="bg-gray-900 border border-gray-800 hover:bg-primary hover:text-gray-900 transition-all"
            >
              <CardContent className="p-4">{edu}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8 w-3/4 bg-gray-800" />

      {/* Contact */}
      <section id="contact" className="py-16 max-w-4xl text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
        <p className="text-gray-400 mb-6">
          Let's work together on your next project.
        </p>
        <Button asChild>
          <a href="mailto:vishalkushawahetw@gmail.com">Say Hello</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 border-t border-gray-800 text-center text-gray-500">
        © 2025 Vishal Kushwah. All rights reserved.
      </footer>
    </div>
  );
}
