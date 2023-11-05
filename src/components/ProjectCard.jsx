import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ProjectsImage from "./ProjectsImage";

const ProjectCard = (props) => {
  const { name, image, description, url } = props;
  const tecnologiasUsadas = props.tecnologiasUsadas;


  return (
    <motion.div whileHover={{ scale: 1.1 }} className="w-80 bg-white shadow rounded">
      <div
        className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-t"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-gray-800 text-center mt-1">{name}</h1>
        <p className="text-gray-400 font-light text-xs text-center">
          {description}
        </p>
        <p className="text-black font-light text-xs text-center">
          Tecnologias
        </p>
        <div className="text-center mt-1"
        >
            <ProjectsImage tecnologiasUsadas={tecnologiasUsadas} />
        </div>
        <Link
          to={url}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
        >
          Ver proyecto
        </Link>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tecnologiasUsadas: PropTypes.array.isRequired,
};

export default ProjectCard;
