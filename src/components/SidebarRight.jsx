function SidebarRight() {
  const highlights = [
    { label: "CGPA", value: "6.58 / 10" },
    { label: "JEE Advanced AIR", value: "9239" },
    { label: "Hackathons", value: "Top 20 - HackFest 2025" },
    { label: "Contributions", value: "GSSoC Contributor" },
  ];

  return (
    <div className="p-6 bg-gray-50 h-full">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h2>
      <div className="space-y-3">
        {highlights.map((item) => (
          <div key={item.label}>
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="font-semibold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarRight;