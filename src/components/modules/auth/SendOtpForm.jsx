import {useSendOtpMutation} from '@/hooks/mutations'

function SendOtpForm({ mobile, setMobile, onSuccess }) {
  const { mutate } = useSendOtpMutation()
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(mobile);
    mutate(mobile, {
      onSuccess: (data) => onSuccess(data)
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
        <input
          className="border-2"
          type="tel"
          id="input"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">ارسال کد</button>
      </form>
    </div>
  );
}

export default SendOtpForm;
