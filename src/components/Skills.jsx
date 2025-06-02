import React from 'react';

const Skills = () => {
  const skillsList = [
    { name: 'React', level: 'Expert', icon: '/assets/ic/react.svg', animate: true },
    { name: 'TypeScript', level: 'Intermediate', icon: '/assets/ic/ts.svg' },
    { name: 'Node.js', level: 'Advanced', icon: '/assets/ic/node.svg' },
    { name: 'JavaScript', level: 'Expert', icon: '/assets/ic/js.svg' },
    { name: 'Python', level: 'Advanced', icon: '/assets/ic/py.svg', animate: true },
    { name: 'MySQL', level: 'Intermediate', icon: '/assets/ic/mysql.svg' },
    { name: 'Cloud Computing', level: 'Beginner', icon: '/assets/ic/cloud.svg' },
    { name: 'Tailwind CSS', level: 'Advanced', icon: '/assets/ic/tailwind.svg', animate: true },
    { name: 'Docker', level: 'Intermediate', icon: '/assets/ic/docker.svg' },
    { name: 'Java', level: 'Beginner', icon: '/assets/ic/java.svg' }
  ];

  return (
    <div className="skill-box max-w-[1920px] my-0 mb-[50px] bg-black px-8 pb-8">
      <h2 className="text-white text-3xl font-semibold text-center leading-[3]">My Skills</h2>
      <div className="skills-grid grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2.5">
        {skillsList.map((skill, index) => (
          <div key={index} className="skills flex items-center justify-center flex-col min-w-[200px] h-[200px] gap-5 rounded-2xl border-[1.5px] border-[#a1b1ca] transition-all duration-300 hover:bg-link hover:cursor-pointer">
            <img 
              className={skill.animate ? 'w-12 animate-[spin_infinite_1s_alternate-reverse]' : 'w-12'} 
              src={skill.icon} 
              alt={skill.name}
            />
            <p className="text-white m-0 font-semibold">{skill.name}</p>
            <span className="text-green">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;