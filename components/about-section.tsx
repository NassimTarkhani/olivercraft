"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const counterRef = useRef<HTMLDivElement>(null);
  const counters = [
    { id: 1, value: 15, label: "Years of Experience" },
    { id: 2, value: 120, label: "Team Members" },
    { id: 3, value: 250, label: "Projects Delivered" },
    { id: 4, value: 40, label: "Global Clients" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll("[data-counter]");

            counters.forEach((counter) => {
              const target = parseInt(
                counter.getAttribute("data-value") || "0"
              );
              let count = 0;
              const duration = 2000;
              const increment = Math.ceil(target / (duration / 16));

              const updateCount = () => {
                if (count < target) {
                  count = Math.min(count + increment, target);
                  counter.textContent = count.toString();
                  requestAnimationFrame(updateCount);
                }
              };

              updateCount();
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const clientLogos = [
    "/canal.png",
    "/cartier.png",
    "/fred.png",
    "/hermes.png",
    "/issey.png",
    "/porsche.png",
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-didot">
              About OLIVER CRAFT
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in XXXX, OLIVER CRAFT is a digital agency specializing in
              creating exceptional digital experiences for luxury and premium
              brands. Our team combines strategic thinking, creative excellence,
              and technical expertise to deliver solutions that elevate brands
              in the digital landscape.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With offices in Paris, New York, and Shanghai, we work with global
              clients across fashion, beauty, hospitality, and automotive
              industries. Our approach is collaborative, innovative, and focused
              on delivering measurable results.
            </p>
            <button className="inline-flex items-center text-lg font-medium border-b-2 border-black pb-1 hover:pb-2 transition-all">
              Learn more about us <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="OLIVER CRAFT team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Experience and Clients Section */}
        <div
          ref={counterRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center"
        >
          {counters.map((counter) => (
            <div key={counter.id} className="p-6">
              <div
                data-counter
                data-value={counter.value}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                0
              </div>
              <p className="text-gray-600">{counter.label}</p>
            </div>
          ))}
        </div>

        {/* Our Clients Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Our Clients</h3>

          <div className="relative overflow-hidden w-full">
            <div className="flex items-center justify-center space-x-12 animate-marquee">
              {clientLogos.map((logo, index) => (
                <div key={index} className="w-40 h-20 flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
              {/* Duplicate logos for a seamless loop */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="w-40 h-20 flex-shrink-0"
                >
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    width={150}
                    height={120}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
