import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

const CursorBlinker = () => {
  return (
    <motion.span
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-8 w-[1px] translate-y-1 bg-[#592DD1]"
    />
  )
}

export default CursorBlinker