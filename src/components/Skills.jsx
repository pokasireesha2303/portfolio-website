function Skills() {
  const skillCategories = [
    { title: "Languages", skills: ["C", "C++", "Python", "Java"] },
    { title: "Web Technologies", skills: ["HTML", "CSS", "JavaScript", "Firebase Auth"] },
    { title: "Concepts", skills: ["DSA", "OOPs", "Probability & Statistics", "DBMS", "Operating Systems"] },
    { title: "Tools", skills: ["Git", "GitHub", "Linux", "LaTeX"] },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="font-semibold text-gray-700">{category.title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;