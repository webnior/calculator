import Image from "next/image"

export default function BlogImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="m-auto">
      <Image src={src} alt={alt} width={1000} height={600} />
    </div>
  )
}
