export default function BlogSubheading({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h2 className="text-xl font-semibold text-left my-4 mt-6">{children}</h2>
  )
}
