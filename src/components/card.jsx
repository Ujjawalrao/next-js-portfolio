"use client";

import React from "react";
import { motion } from "framer-motion";
import { Repeat } from "lucide-react";

const Card = ({ image, title, description, websiteLink, sourceLink }) => {
  console.log("Source Link:", sourceLink); // For debugging

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: .5, ease: "easeOut" }}
      className="max-w-[100%] bg-white text-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full min-h-56 object-top object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-gray-600 text-sm mb-6">{description}</p>

        <div className="flex space-x-4">
          <a
            href={websiteLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded transition-colors duration-300"
          >
            Visit Website
          </a>
          <a
            href={sourceLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 text-center py-2 rounded transition-colors duration-300"
          >
            View Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
