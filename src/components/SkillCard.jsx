import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SkillCard = (props) => {
  const { name, porcentaje, altName, imgSrc, color } = props;

  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm my-8 bg-white shadow-xl rounded-lg text-gray-900"
    >
      <div className="rounded-t-lg h-24 overflow-hidden">
        <div className={`${color} w-full h-32`}></div>
      </div>
      <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-white">
        <img
          className="object-cover object-center h-28" 
          src={imgSrc}
          alt={altName} 
        />
      </div>
      <div className="text-center my-2">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-gray-500">Porcentaje</p>
      </div>
      <div className=" bg-gray-200 rounded-full mx-4 mb-4 ">
        <div
          className={`${color} text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${porcentaje}` }}
        >
          {" "}
          {porcentaje}
        </div>
      </div>
    </motion.div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  porcentaje: PropTypes.number.isRequired,
  altName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SkillCard;
