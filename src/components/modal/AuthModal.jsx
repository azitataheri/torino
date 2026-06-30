import { useState } from "react";
import SendOtpForm from "../modules/SendOtpForm";
import CheckOtpForm from "../modules/CheckOtpForm";

function AuthModal({ onClose }) {
  const [step, setStep] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("")

  const handleMobileSuccess = () => {
    setStep("otp");
  };

  return (
    <>
      {step === "mobile" ? (
        <SendOtpForm onSuccess={handleMobileSuccess} mobile={mobile} setMobile={setMobile}/>
      ) : (
        <CheckOtpForm mobile={mobile} code={code} setCode={setCode}/>
      )}
    </>
  );
}

export default AuthModal;
