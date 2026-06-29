function Experience() {
  const experiences = [
    {
      role: "Volunteer Educator — Karthavya Club",
      description:
        "Conducted weekly teaching sessions at the Karthavya center for 15-20 underprivileged students, delivering basic academics and educational activities.",
    },
    {
      role: "Social Service Member — Fast Forward India",
      description:
        "Assisted in organizing blood donation camps and supported awareness drives by coordinating student participation and on-ground activities.",
    },
    {
      role: "Event Organizer — Srijan'25",
      description:
        "Coordinated logistics and on-ground operations for 5+ events during the annual technical and cultural fest, assisting with scheduling, registrations, and event execution.",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Engagements & Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.role} className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;