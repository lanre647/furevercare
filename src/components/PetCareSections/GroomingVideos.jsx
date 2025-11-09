export default function GroomingVideos() {
  const videos = [
    { title: "Brushing Tips for Dogs", url: "https://www.youtube.com/embed/_YjlP6Bz7LU" },
    { title: "How to Bathe Your Cat Safely", url: "https://www.youtube.com/embed/PrLmTdgJ3cE" }
  ];

  return (
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-blue-700 mb-3">🧼 Grooming Videos</h3>
      <div className="grid md:grid-cols-2 gap-6 justify-center">
        {videos.map((vid, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md bg-white">
            <iframe
              src={vid.url}
              title={vid.title}
              allowFullScreen
              className="w-full h-60"
            ></iframe>
            <p className="p-3 text-gray-700 font-medium">{vid.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
