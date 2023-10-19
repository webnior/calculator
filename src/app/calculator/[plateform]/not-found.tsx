import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container text-red font-extrabold ">
      <h2>Calculator Not Supported</h2>
      <p>Could not find requested resource</p>
      <Link href="/calculator">Return Calculators page</Link>
    </div>
  )
}
