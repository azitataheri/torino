import { useState } from "react";
import SendOtpForm from "@/components/modules/auth/SendOtpForm";
import CheckOtpForm from "@/components/modules/auth/CheckOtpForm";

function AuthModal({ onClose, isOpen, setIsOpen }) {
  const [step, setStep] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);

{/* Send mobile successfully and set step to otp */}
  const handleMobileSuccess = () => {
    setStep("otp");
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-4"
        onClick={() => setIsOpen(false)}
      >
        {otpSent && (
          <div
            className="bg-pink-800 rounded-b-md text-white px-10 py-5 z-51 absolute top-0"
            onClick={(e) => e.stopPropagation()}
          >
            کد تایید شما: {code}
          </div>
        )}
        {step === "mobile" ? (
          <SendOtpForm
            onSuccess={handleMobileSuccess}
            mobile={mobile}
            setCode={setCode}
            setOtpSent={setOtpSent}
            setMobile={setMobile}
            onClose={onClose}
          />
        ) : (
          <CheckOtpForm
            mobile={mobile}
            code={code}
            setCode={setCode}
            onClose={onClose}
          />
        )}
      </div>
    </>
  );
}

export default AuthModal;
