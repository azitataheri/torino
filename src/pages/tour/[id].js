import TourDetailsPage from "@/components/templates/TourDetailsPage";
import { getTourById } from "@/services/tours"


function TourDetails({tour}) {
    
    return (
   <TourDetailsPage tour={tour}/>
  )
}

export default TourDetails


export async function getServerSideProps({params}) {
    console.log('params is:', params);
    
    const {data} = await getTourById(params.id)
    console.log('data is', data);
    

    return{
     props:{
        tour: data
     }
    }
    
}