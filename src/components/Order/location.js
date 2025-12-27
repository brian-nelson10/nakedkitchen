export default function OpenInMapsLink() {
  const address = "2336 N Liberty St Jacksonville FL 32206";

  const mapsLink = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <a
      href={mapsLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-xl mx-auto text-center border rounded-xl p-4 hover:bg-gray-50 transition"
    >
      <p className="mt-2 font-roboto uppercase text-md font-medium text-blue-600">
        Tap to open in Maps
      </p>
    </a>
  );
}
