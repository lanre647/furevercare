export default function Feedback() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">Feedback</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border rounded-lg p-2" />
        <input type="email" placeholder="Your Email" className="border rounded-lg p-2" />
        <textarea placeholder="Your Feedback" className="border rounded-lg p-2 h-28" />
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow"
        >
          Submit (UI Only)
        </button>
      </form>
    </div>
  );
}
