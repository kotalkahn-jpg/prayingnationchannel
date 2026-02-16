"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function ImageStoryModal({
  isOpen,
  onClose,
  title,
  description,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-50 inset-0 flex items-center justify-center px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold mb-4 text-[#0B1E3D]">
                {title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
