"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Luxury Fashion Brand",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description:
      "Complete digital transformation for a luxury fashion house, including e-commerce platform and digital marketing strategy.",
  },
  {
    id: 2,
    title: "Premium Automotive",
    category: "Brand Experience",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Immersive digital experience for a premium automotive brand, showcasing their latest models and technologies.",
  },
  {
    id: 3,
    title: "Fine Jewelry",
    category: "Digital Campaign",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Award-winning digital campaign for a fine jewelry brand, resulting in significant brand awareness and sales growth.",
  },
  {
    id: 4,
    title: "Hospitality Group",
    category: "Website Redesign",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Complete website redesign for a luxury hospitality group, focusing on user experience and conversion optimization.",
  },
];

export function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-0">
            Selected Work
          </h2>
          <p className="text-lg md:text-3xl max-w-md text-gray-600 font-didot">
            WE CREATE DIGITAL EXPERIENCES THAT ELEVATE LUXURY AND PREMIUM BRANDS
            TO NEW HEIGHTS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  )}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
                <div
                  className={cn(
                    "transition-transform duration-300",
                    hoveredProject === project.id
                      ? "translate-x-0"
                      : "-translate-x-4 opacity-0"
                  )}
                >
                  <ArrowRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center text-lg font-medium border-b-2 border-black pb-1 hover:pb-2 transition-all">
            View all projects <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
