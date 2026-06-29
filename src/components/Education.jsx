function Education() {
  const educationList = [
    {
      institution: "Indian Institute of Technology (ISM) Dhanbad",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      grade: "GPA: 6.58/10",
      duration: "Aug 2024 - May 2028",
      location: "Dhanbad, Jharkhand",
    },
    {
      institution: "Bhashyam Junior College",
      degree: "AP Board of Intermediate Education",
      grade: "974/1000",
      duration: "May 2022 - May 2024",
      location: "Guntur, Andhra Pradesh",
    },
    {
      institution: "Bhashyam Public School",
      degree: "SSC Board of Secondary Education",
      grade: "580/600",
      duration: "May 2021 - May 2022",
      location: "Guntur, Andhra Pradesh",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
      <div className="space-y-4">
        {educationList.map((edu) => (
          <div key={edu.institution} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
            <p className="text-gray-600 text-sm">{edu.degree}</p>
            <p className="text-gray-500 text-sm">{edu.grade}</p>
            <p className="text-gray-400 text-xs">{edu.duration} • {edu.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;