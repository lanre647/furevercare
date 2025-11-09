export default function HealthTips() {
  return (
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-blue-700 mb-3">❤️ Health Tips</h3>
      <div className="space-y-4">
        <audio controls className="mx-auto">
          <source src="/audio/pet_health_tips.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-gray-600 max-w-xl mx-auto">
          Keep your pet’s oral hygiene in check — regular brushing and vet dental cleanings
          prevent gum diseases. Ensure annual vaccinations, balanced diet, and daily walks.
        </p>
      </div>
    </div>
  );
}
