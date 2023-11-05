import PropTypes from 'prop-types'


const ProjectsImage = (props) => {
  const { tecnologiasUsadas } = props;

  return (
    <div className=' flex gap-2 '>
      {tecnologiasUsadas.map((ruta, index) => (
        <img
          key={index}
          className="h-10 w-10 rounded-full border-2 border-white"
          src={ruta}
        />
      
      ))}
    </div>
  )
}

ProjectsImage.propTypes = {
  tecnologiasUsadas: PropTypes.array.isRequired,
}

export default ProjectsImage