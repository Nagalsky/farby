import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const HeaderLogo: FC = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <Image
        src="/header-logo.svg"
        width={160}
        height={100}
        alt="logo"
        className="h-full w-[40px] lg:w-[50px]"
        priority
      />
      <span className="hidden text-sm font-bold lg:inline-block">FARBY.SK</span>
    </Link>
  );
};

export default HeaderLogo;
