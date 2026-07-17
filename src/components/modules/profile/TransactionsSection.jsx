import { useUserTransactions } from "@/hooks/queries";
import {
  formatCompleteDate,
  formatPrice,
  formatTransactionDate,
} from "@/utils/format";

function TransactionsSection() {
  const { data: usertransactions } = useUserTransactions();
  console.log("usertransactions is", usertransactions);

  return (
    <div className="border border-gray-300 p-5 rounded-xl mt-7 md:mt-0">
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-right">
          <thead className="bg-[#F3F3F3]">
            <tr>
              <th className="px-6 py-5 text-xs md:text-lg font-medium">
                {" "}
                تاریخ و ساعت
              </th>
              <th className="px-6 py-5 text-xs md:text-lg font-medium">
                مبلغ(تومان)
              </th>
              <th className="hidden md:block px-6 py-5 text-xs md:text-lg font-medium">
                نوع تراکنش
              </th>
              <th className="px-6 py-5 text-xs md:text-lg font-medium">
                شماره سفارش
              </th>
            </tr>
          </thead>

          <tbody>
            {usertransactions?.data?.map((item) => (
              <tr
                className="border-b border-gray-100 last:border-b-0"
                key={item.id}
              >
                <td className="px-6 py-4 text-[7px] md:text-base" dir="ltr">
                  {formatTransactionDate(item.createdAt)}
                </td>
                <td className="px-6 py-4 text-sm md:text-base">
                  {formatPrice(item.amount)}
                </td>
                <td className="hidden md:block px-6 py-4 text-sm md:text-base">
                  {item.type === "Purchase" ? "ثبت نام در تور گردشگری " : ""}
                </td>
                <td className="px-6 py-4 text-sm md:text-base">
                  <div className="flex items-center">
                    <span className="hidden md:block pl-2">سفارش</span>
                    <span>102095404</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsSection;
