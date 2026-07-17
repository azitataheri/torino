import { useUserTours } from "@/hooks/queries"
import UserToursList from "./UserToursList";

function ToursSection() {
  console.log('toursection is render');
  
  const {data: usertours, isLoading} = useUserTours()
  if(isLoading){ return <p>Loading.........</p>}
  console.log(usertours);
  
  return (
    <div className="border border-gray-300 p-5 rounded-xl mt-7 md:mt-0">
      <UserToursList usertours={usertours}/>
    </div>
  )
}

export default ToursSection