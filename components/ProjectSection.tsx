import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "GYM",
    description: "GYM is a landing page for a gym.",
    image: "/gym.png",
    github: "https://github.com/wassim-stack/GYM-TypeScript",
    link: "https://64c12385a88d290d220ca7e6--harmonious-pie-1d7c01.netlify.app/",
  },
  {
    name: "Makhmekh",
    description:
      "Makhmekh is a restaurant website using Tailwind CSS & ReactJS.",
    image: "/restau.png",
    github: "https://github.com/wassim-stack/restaurant",
    link: "https://makhmekh.netlify.app/",
  },
  {
    name: "Cars Hub",
    description: "Cars Hub is a website dedicated to showcasing cars.",
    image: "/Car-Hub.png",
    github: "https://github.com/wassim-stack/cars_showcase",
    link: "https://cars-showcase-gray.vercel.app/",
  },
];
const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center text-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className=" flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2 mt-8">
                    <Link href={project.link} target="_blank">
                      <Image
                        alt=""
                        src={project.image}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2 mt-12">
                    <h1 className="text-4xl font-bold md-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
