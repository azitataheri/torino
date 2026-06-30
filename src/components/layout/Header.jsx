import { useState } from "react"
import AuthModal from "../modal/AuthModal"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <div>
      <button onClick={toggleModal}>ورود و ثبت نام</button>

      {/*Render modal of mobile and otp */}
      {isOpen && <AuthModal onClose={() => setIsOpen(false)} />}
    </div> 
  )
}

export default Header