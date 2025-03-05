import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function OurWhy() {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image on the left */}
          <div className="order-1 md:order-1">
            <Image
              src="/boss.png"
              alt="Our Why"
              width={650} // Adjust width as needed
              height={300} // Adjust height as needed
              className="rounded-full object-cover pt-4 "
            />
          </div>

          {/* Text on the right */}
          <div className="order-2 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold font-didot mt-4 text-cyan-600">
              NOTRE
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-9xl font-bold pl-12 mb-8 font-didot italic text-cyan-600">
              WHY
            </h2>
            <ul className="text-xl text-gray-700 space-y-4 list-disc pl-6">
              <li>
                Transmettre l’authenticité par l’image, et l’accompagner nos
                clients avec un storytelling clair, authentique et personnalisé.
              </li>
              <li>
                Créer des émotions: la surprise, la gratitude l’émerveillement,
                la joie ou la fierté… et la filigraner dans le contenu.
              </li>
              <li>
                Faire le choix de la Beauté par l’image pour créer une connexion
                universelle, un message inclusif grâce à une histoire qui
                rassemble les communautés.
              </li>
              <li>
                Respecter l’œuvre d’un artiste et rassembler une équipe de
                professionnels au service d’un message ou d’un temps fort.
              </li>
              <li>
                Permettre à votre institution ou votre marque que vos valeurs,
                votre mission soient comprises et retenues.
              </li>
              <li>
                Imaginer avec vous de belles histoires pour changer le monde et
                faire de l’Art un vecteur de transformation de notre Société…
              </li>
            </ul>

            <button className="inline-flex items-center text-lg font-medium border-b-2 border-black pb-1 hover:pb-2 transition-all mt-8">
              Learn more about us <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
