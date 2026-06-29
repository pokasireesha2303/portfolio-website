function Projects() {
  const projects = [
    {
      title: "Cryptocurrency Wallet Web Application",
      tech: "HTML, CSS, Firebase Auth, Firestore, JavaScript",
      description:
        "Designed and built a secure cryptocurrency wallet interface enabling users to view balances, perform transactions, and track transaction history. Implemented secure user authentication and authorization with Firebase, including sign-up, login, and profile management. Built a real-time dashboard displaying total wallet balance and individual holdings.",
      github: "https://github.com/pokasireesha2303/cryptocurrencywallet",
    },
    {
      title: "Maths Wizard",
      tech: "HTML, CSS, Vanilla JavaScript, Firebase Auth, Firestore",
      description:
        "Developed a scalable real-time competitive mental math platform with interactive gameplay mechanics. Designed a DFS-based expression generation and validation algorithm to evaluate operator combinations on a six-digit sequence. Built competitive gameplay logic including timers, scoring, hints, AI opponent behavior, and real-time matchmaking. Ranked among the top 20 teams in HackFest 2025.",
      github: "",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-semibold text-lg text-gray-800">{project.title}</h3>
            <p className="text-sm text-gray-500 italic mb-2">{project.tech}</p>
            <p className="text-gray-600 text-sm">{project.description}</p>
            {project.github && (
              
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mt-2 inline-block hover:underline"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;