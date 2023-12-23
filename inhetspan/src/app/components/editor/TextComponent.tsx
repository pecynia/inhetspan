"use client"

import EditorWrapper from "@/app/components/editor/EditorWrapper";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const TextComponent = ({ documentId } : { documentId: string }) => {
  return (
    <motion.div
      layout
      transition={{ duration: 0.7, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
      className={twMerge(
        "bg-secondary flex px-4 pt-4 pb-10 rounded-xl w-[1000px]"
      )}
    >
      <EditorWrapper documentId={documentId} />
    </motion.div>
  );
};

export default TextComponent;
