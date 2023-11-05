import SkillCard from "../components/SkillCard";
import skillData from "../data/skillData";

const Skill = () => {
  const skills = skillData;

  return (
    <>
      <h1 className=" text-[#592DD1] text-2xl sm:text-4xl text-center font-bold pt-10 ">
        Tecnologias
      </h1>
      <div className=" border-2 border-[#592DD1] rounded-lg my-4 mx:8 md:mx-16 lg:mx-24 ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              porcentaje={skill.porcentaje}
              altName={skill.altName}
              imgSrc={skill.imgSrc}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
