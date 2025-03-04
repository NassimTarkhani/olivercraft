"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const newsItems = [
  {
    id: 1,
    title: "OLIVER CRAFT Wins Digital Agency of the Year Award",
    excerpt:
      "OLIVER CRAFT has been recognized as Digital Agency of the Year at the prestigious Digital Excellence Awards 2025.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: new Date(2025, 2, 15),
  },
  {
    id: 2,
    title: "New Partnership with Leading Luxury Fashion House",
    excerpt:
      "OLIVER CRAFT announces a strategic partnership with one of the world's most iconic luxury fashion houses.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    date: new Date(2025, 1, 28),
  },
  {
    id: 3,
    title: "OLIVER CRAFT Expands with New Office in Tokyo",
    excerpt:
      "Continuing our global expansion, OLIVER CRAFT opens a new office in Tokyo to better serve clients in the Asian market.",
    image:
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    date: new Date(2025, 1, 10),
  },
];

export function NewsSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="news" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-0">
            Latest News
          </h2>
          <button className="inline-flex items-center text-lg font-medium border-b-2 border-black pb-1 hover:pb-2 transition-all">
            View all news <ArrowRight size={18} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden aspect-[3/2] mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    hoveredItem === item.id ? "scale-110" : "scale-100"
                  )}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">
                {format(item.date, "MMMM d, yyyy")}
              </p>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <div
                className={cn(
                  "inline-flex items-center font-medium transition-all duration-300",
                  hoveredItem === item.id ? "translate-x-2" : "translate-x-0"
                )}
              >
                Read more <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
