import { IconDark, IconLight, IconMagnifyingGlass } from "@/components/icons";
import clsxm from "@/utils/clsxm";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { IconXMark } from "../../icons/index";

const headerCategoriesLink = [
  {
    title: "Farby",
    path: "/farby",
  },
  {
    title: "Lepidlá, tmely, peny",
    path: "/lepidla-tmely-peny",
  },
  {
    title: "Drogéria",
    path: "/drogeria",
  },
  {
    title: "Auto-moto",
    path: "/auto-moto",
  },
  {
    title: "Železiarstvo",
    path: "/zeleziarstvo",
  },
  {
    title: "Náradie",
    path: "/naradie",
  },
  {
    title: "Vida, elektrika, kúrenie",
    path: "/voda-elektrika-kurenie",
  },
  {
    title: "Bývanie",
    path: "/byvanie",
  },
  {
    title: "Záhrada",
    path: "/zahrada",
  },
  {
    title: "Stavebniny",
    path: "/stavebniny",
  },
];

interface IHeaderCategories {
  closeMobileMenu: () => void;
  isMenuOpened: boolean;
}

const HeaderCategories: FC<IHeaderCategories> = ({
  isMenuOpened,
  closeMobileMenu,
}) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={clsxm(
        "border-b border-b-gray-50 bg-white dark:border-b-dark-900 dark:bg-dark-500 lg:static lg:block lg:p-0",
        isMenuOpened
          ? "fixed left-0 top-0 z-40 block h-full w-full overflow-auto py-3 pb-6"
          : "hidden"
      )}
    >
      <div className="container">
        <div className="flex items-center gap-4 lg:hidden">
          <div className="flex grow cursor-pointer items-center gap-1 rounded-full bg-gray-50 dark:bg-dark-700">
            <span className="flex items-center self-stretch px-4 text-neutral-700 hover:text-neutral-900 dark:text-white dark:hover:text-purple-500">
              <IconMagnifyingGlass className="h-5 w-5" />
            </span>
            <div className="flex h-[38px] w-full grow items-center border-0 bg-transparent px-0 focus:shadow-none focus:outline-none focus:ring-0 dark:text-white">
              Hľadať
            </div>
          </div>

          <button
            role="button"
            className="hover:text-purple-500 active:text-purple-500 dark:text-white dark:hover:text-purple-300 dark:active:text-purple-300"
            onClick={() => closeMobileMenu()}
          >
            <IconXMark className="h-6 w-6" />
          </button>
        </div>

        <div className="my-4 h-px bg-gray-200 dark:bg-dark-900 lg:hidden"></div>

        <nav className="flex flex-col lg:flex-row lg:gap-6 lg:text-sm xl:gap-8 xxl:gap-10">
          {headerCategoriesLink.map((link, index) => (
            <Link key={index} href={link.path} className="py-2.5 lg:py-5">
              {link.title}
            </Link>
          ))}
          <Link
            href="/akcia"
            className="py-2.5 font-bold text-red-600 dark:text-red-400 lg:py-5"
          >
            Akcie
          </Link>
        </nav>

        <div className="my-4 h-px bg-gray-200 dark:bg-dark-900 lg:hidden"></div>

        <div className="flex items-center justify-between gap-4 lg:hidden">
          <p>Switch theme</p>
          <button
            role="button"
            className="hover:text-purple-500 active:text-purple-500 dark:text-white dark:hover:text-purple-300 dark:active:text-purple-300 lg:hidden"
            onClick={() =>
              currentTheme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {currentTheme === "dark" ? (
              <IconLight className="h-6 w-6 lg:h-5 lg:w-5" />
            ) : (
              <IconDark className="h-6 w-6 lg:h-5 lg:w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategories;
