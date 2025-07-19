"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed h-screen inset-0 z-100 p-5 flex items-center justify-end bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="bg-white w-full md:w-1/2 h-full p-6 md:rounded-2xl shadow-xl flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-3xl font-light text-gray-500 hover:text-black cursor-pointer"
              >
                x
              </button>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-semibold mb-1">Join MyHealthPrac</h2>
            <p className="text-gray-600 mb-6">
              It&apos;s time to take control of your health.
            </p>
            <hr className="mb-6 border-dashed border-gray-400" />

            {/* Form */}
            <form className="flex flex-col gap-6 flex-grow justify-between">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1"
                  />
                </div>
              </div>

              {/* Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-full py-3 font-semibold hover:opacity-90 transition"
                >
                  Join Waitlist
                </button>
                <p className="text-xs text-center text-gray-500 mt-2">
                  By signing up, you&apos;re agreeing to our terms.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
