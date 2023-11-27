import Image from 'next/image';

export default function LogoImage({ width }: { width: number }) {
  return (
    <Image
      className="relative"
      src="/logo.svg"
      alt="Conference Paper Review System Logo"
      width={width}
      height={width}
      priority
    />
  )
}