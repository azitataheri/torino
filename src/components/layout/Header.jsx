import Link from "next/link"
import { useState } from "react"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const modalHandler = () => {
    setIsOpen(true)
  }
  return (
    <div>
      <Link href="/auth/login">
      <button onClick={modalHandler}>ورود و ثبت نام</button>
    <div>
      مودال
    </div>
      </Link>
    </div>
  )
}

export default Header