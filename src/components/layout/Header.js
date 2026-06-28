import Link from "next/link"

function Header() {
  return (
    <div>
      <Link href="/auth/login">
      <button >ورود و ثبت نام</button>
      </Link>
    </div>
  )
}

export default Header