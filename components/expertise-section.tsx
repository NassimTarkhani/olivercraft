"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react"; // Import ArrowRight icon
import { cn } from "@/lib/utils";

const expertiseAreas = [
  {
    id: 1,
    title: "Digital Strategy",
    description:
      "We develop comprehensive digital strategies that align with your business objectives and target audience needs. Our approach combines data-driven insights with creative thinking to deliver measurable results.",
    items: [
      "Market Research",
      "Competitive Analysis",
      "User Journey Mapping",
      "KPI Definition",
      "Digital Roadmap",
    ],
    backgroundImage:
      "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Brand Experience",
    description:
      "We create cohesive brand experiences across all digital touchpoints, ensuring consistency and emotional connection with your audience. Our focus is on translating luxury brand values into meaningful digital interactions.",
    items: [
      "Brand Identity",
      "Digital Guidelines",
      "Content Strategy",
      "Tone of Voice",
      "Visual Language",
    ],
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1695575593603-1f42ca27bb6d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Web & Mobile Development",
    description:
      "We design and develop premium websites and mobile applications that combine stunning aesthetics with seamless functionality. Our solutions are built with scalability, performance, and security in mind.",
    items: [
      "UX/UI Design",
      "E-commerce Platforms",
      "Custom Web Applications",
      "Mobile Apps",
      "Performance Optimization",
    ],
    backgroundImage:
      "https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "We implement sophisticated digital marketing strategies that elevate your brand presence and drive engagement with your target audience. Our approach is tailored to the unique requirements of luxury and premium brands.",
    items: [
      "Social Media Strategy",
      "Content Creation",
      "Influencer Partnerships",
      "Paid Media",
      "Performance Analytics",
    ],
    backgroundImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function ExpertiseSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>(
    expertiseAreas[0].backgroundImage
  );

  const toggleItem = (id: number) => {
    if (expandedItem === id) {
      // If the same item is clicked again, close it and reset the background image
      setExpandedItem(null);
      setBackgroundImage(expertiseAreas[0].backgroundImage); // Reset to default image
    } else {
      // Open the clicked item and update the background image
      setExpandedItem(id);
      const selectedArea = expertiseAreas.find((area) => area.id === id);
      if (selectedArea) {
        setBackgroundImage(selectedArea.backgroundImage);
      }
    }
  };

  return (
    <section id="expertise" className="relative py-20 md:py-32 bg-gray-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 bg-white/30 backdrop-blur-md py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center font-didot">
            Our Expertise
          </h2>

          <div className="max-w-4xl mx-auto">
            {expertiseAreas.map((area) => (
              <div key={area.id} className="mb-4">
                <button
                  onClick={() => toggleItem(area.id)}
                  className="w-full flex justify-between items-center py-6 px-4 text-left border-b border-gray-200 focus:outline-none"
                >
                  <h3 className="text-xl md:text-2xl font-medium">
                    {area.title}
                  </h3>
                  <span
                    className={cn(
                      "transition-transform duration-300",
                      expandedItem === area.id ? "rotate-90" : "rotate-0"
                    )}
                  >
                    <ArrowRight size={24} /> {/* Use ArrowRight icon */}
                  </span>
                </button>
                <div
                  className={cn(
                    expandedItem === area.id ? "block" : "hidden" // Remove animation
                  )}
                >
                  <div className="p-6 bg-white/90">
                    <p className="text-gray-700 mb-6">{area.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {area.items.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
