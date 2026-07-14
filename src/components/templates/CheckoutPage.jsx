import PassengerForm from "../modules/ckeckout/PassengerForm";
import BasketItem from "../modules/ckeckout/BasketItem";
function CheckoutPage({ data }) {
  console.log("checoutPageData is:", data);
  if (!data) return null;
  return (
    <div className="md:bg-[#F8F8F8] overflow-hidden md:py-20">
      <div className="md:w-400 mx-auto rounded-xl md:px-5 py-7">
        <div className="grid gird-1 md:grid-cols-4 gap-8 md:gap-0">
          <div className="md:col-span-3 bg-white border border-gray-400  rounded-lg z-20 p-5 relative">
            <PassengerForm />
          </div>
          <div className="md:col-span-1 bg-white border border-gray-300 md:border-none   rounded-lg z-9 ">
            <BasketItem data={data.data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
