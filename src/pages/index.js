import { getTours } from "@/services/tours";
import HomePage from "@/components/templates/HomePage";

export default function Home({tours}) {
  return (
  <div>
    <HomePage tours={tours} />
  </div>
  );
}
 
export async function getServerSideProps(context) {
  const {origin, destination, startDate, endDate } = context.query
  const {data} = await getTours()
  let tours = data
  if(origin){
    tours = tours.filter((tour) => (tour.origin.id === origin))
  }

 if(destination){
    tours = tours.filter((tour) => (tour.destination.id === destination))
  }

  if(startDate && endDate){
    tours = tours.filter((tour) => {
      return (
        new Date(tour.startDate) >= new Date(startDate) &&
        new Date(tour.endDate) <= new Date(endDate)
      )
    })
  }
  return{
    props: {
      tours
    }
  }
  
}