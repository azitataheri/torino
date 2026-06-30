import { useRouter } from "next/navigation";
import { useCheckOtpMutation } from "@/hooks/mutations";
function CheckOtpForm({ code, setCode, mobile }) {
  const router = useRouter();

  const { mutate } = useCheckOtpMutation();
  const otpHandler = (e) => {
    e.preventDefault();
    mutate(
      { mobile, code },
      { onSuccess: (data) => router.push("/dashboard") },
    );
  };
  return (
    <div>
      <form onSubmit={otpHandler}>
        <input
          className="border-2"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">ورود به تورینو</button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
