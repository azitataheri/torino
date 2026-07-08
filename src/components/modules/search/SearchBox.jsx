import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import OriginDropDown from "./OriginDropDown";
import DestinationDropDown from "./DestinationDropDown";
import DateBox from "./DateBox";
import Button from "@/components/common/Button";

function SearchBox({ tours }) {
  const router = useRouter();
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      origin: null,
      destination: null,
      from: null,
      to: null,
    },
  });

  const searchHandler = (data) => {
    router.push({
      pathname: "/",
      query: {
        origin: data.origin?.id,
        destination: data.destination?.id,
        startDate: data.from?.toISOString(),
        endDate: data.to?.toISOString(),
      },
    });
  };

  return (
    <form
      className="flex-wrap md:flex justify-between items-center md:border md:border-gray-300 md:w-240 py-2 mx-auto leading-13 rounded-2xl mt-5"
      onSubmit={handleSubmit(searchHandler)}
    >
      <div className="flex gap-3 md:gap-0 w-full md:w-1/2">
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
      <div className="flex-wrap md:flex w-full md:w-1/2 mt-5 md:mt-0">
        <DateBox setValue={setValue} />
        <Button
          className="w-full md:w-58 rounded-[16] leading-12 md:leading-11 text-xl mt-5 md:mt-0"
          type="submit"
        >
          جستجو
        </Button>
      </div>
    </form>
  );
}

export default SearchBox;
