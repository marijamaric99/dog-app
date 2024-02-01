import Link from "next/link";
import logoImg from "@/assets/dog.png";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className={`bg-opacity-0 text-white p-2 flex justify-between items-center shadow-sm`}
    >
      <Link legacyBehavior href="/">
        <a className="flex items-center">
          <Image
            src={logoImg}
            alt="A few dogs"
            className={`ml-2 text-xl`}
            width={400}
            height={400}
          />
          <span className="ml-6 text-2xl text-black text-center font-bold">
            CEO's Dogs API
          </span>
        </a>
      </Link>
      
    </header>
  );
}
