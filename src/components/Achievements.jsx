function Achievements() {
  const achievements = [
    "Secured AIR 9239 (EWS 1172) in JEE Advanced 2024, AIR 5344 (99.67 percentile) in JEE Main 2024, and achieved Rank 379 in AP EAMCET and Rank 485 in TS EAPCET.",
    "Received distinction medals in International Maths Olympiad and Srinivasa Ramanujan Maths Olympiad.",
    "Project Maths Wizard ranked among the top 20 teams in HackFest 2025.",
    "Successfully completed the Google Student Upskilling Launchpad Program.",
    "Selected as Mentee at Codess.Cafe.",
    "Selected as GSSoC contributor.",
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h2>
      <ul className="space-y-2">
        {achievements.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="text-blue-500 mt-1">🏆</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;