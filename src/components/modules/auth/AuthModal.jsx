import { useState } from "react";
import SendOtpForm from "@/components/modules/auth/SendOtpForm";
import CheckOtpForm from "@/components/modules/auth/CheckOtpForm";

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
