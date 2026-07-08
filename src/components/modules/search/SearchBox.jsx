import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import OriginDropDown from "./OriginDropDown";
import DestinationDropDown from "./DestinationDropDown";
import DateBox from "./DateBox";
import Button from "@/components/common/Button";

function SearchBox({ tours }) {
  const router = useRouter()
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      origin: null,
      destination: null,
      from: null,
      to: null,
    },
  });

  const searchHandler = (data) => {
    console.log('from is:', data.from);
    console.log('to is:', data.to);
    
    router.push({
      pathname: '/',
      query: {
        origin: data.origin?.id,
        destination: data.destination?.id,
        startDate: data.from?.toISOString(),
        endDate: data.to?.toISOString()
      }
    })
  };

  return (
    <form
      className="flex justify-between border border-gray-300 w-240 p-2 mx-auto leading-10 rounded-xl mt-5"
      onSubmit={handleSubmit(searchHandler)}
    >
      <div className="flex w-1/2">
        <OriginDropDown
          tours={tours}
          setValue={setValue}
          value={watch("origin")}
        />
        <DestinationDropDown
          tours={tours}
          setValue={setValue}
          value={watch("destination")}
        />
      </div>
      <div className="flex w-1/2">
        <DateBox  setValue={setValue}/>
        <Button className="w-58 rounded-[14] leading-10" type="submit">جستجو</Button>
      </div>
    </form>
  );
}

export default SearchBox;
