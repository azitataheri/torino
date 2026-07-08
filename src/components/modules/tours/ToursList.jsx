import TourCard from "./TourCard";
function ToursList({ tours }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  );
}

export default ToursList;
