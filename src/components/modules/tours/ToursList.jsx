function ToursList({tours}) {

  return (
    <div>
      {tours.map((tour) => (<p key="tour.id">
        {tour.origin.name}
      </p>))}
    </div>
  )
}

export default ToursList