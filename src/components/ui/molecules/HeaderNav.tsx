import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import clsxm from "../../../utils/clsxm";

const headerNavLinks = [
  {
    title: "Nakupovať",
    path: "/nakupovať",
  },
  {
    title: "Návody",
    path: "/návody",
  },
  {
    title: "Predajňa",
    path: "/predajňa",
  },
  {
    title: "Služby",
    path: "/služby",
  },
];

const HeaderNav: FC = () => {
  const router = useRouter();

  return (
    <nav className="hidden lg:flex lg:gap-8 xxl:gap-10">
      {headerNavLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={clsxm(
            "text-sm font-bold",
            router.pathname === link.path && "text-primary-500"
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNav;
