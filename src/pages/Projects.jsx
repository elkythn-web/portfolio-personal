import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

const Projects = () => {
  const projects = projectsData;

  return (
    <>
      <h1 className=" text-[#592DD1] text-2xl sm:text-4xl text-center font-bold pt-10 ">
        Proyectos
      </h1>
      <div className=" border-2 border-[#592DD1] rounded-lg my-4 mx:8 md:mx-16 lg:mx-24 flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              image={project.image}
              altName={project.altName}
              description={project.description}
              tecnologiasUsadas={project.tecnologiasUsadas}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
