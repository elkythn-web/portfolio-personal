import { motion } from "framer-motion";

const ImageAnim = () => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <img
        src="../dev-icon.png"
        alt="Dev Icon"
        className=" w-auto sm:h-[350px] h-[250px] "
      />
    </motion.div>
  );
};

export default ImageAnim;
