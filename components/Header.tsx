import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full mt-5 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="AI Paragraph Rewriter"
          src="/writingIcon.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        />
      </Link>
    </header>
  );
}
