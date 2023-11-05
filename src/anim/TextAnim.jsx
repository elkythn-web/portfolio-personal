import PropTypes from "prop-types";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./CursorBlinker";


const TextAnim = (props) => {
  const baseText = props.saludo;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </>
  );
}

TextAnim.propTypes = {
  saludo: PropTypes.string.isRequired
}
export default TextAnim