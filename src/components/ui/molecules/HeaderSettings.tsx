import {
  IconBurger,
  IconDark,
  IconLight,
  IconMagnifyingGlass,
  IconShoppingCart,
  IconUser,
} from "@/components/icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface IHeaderSettings {
  toggleMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const HeaderSettings: FC<IHeaderSettings> = ({ toggleMobileMenu }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-shrink-0 items-center gap-4 sm:gap-6 lg:gap-8">
      <button className="hover:text-purple-500 active:text-purple-500 dark:text-white dark:hover:text-purple-300 dark:active:text-purple-300 lg:hidden">
        <IconMagnifyingGlass className="h-7 w-7 lg:h-5 lg:w-5" />
      </button>
      <div className="relative">
        <Link
          href="/cart"
          className="dark:text-white dark:hover:text-purple-300 dark:active:text-purple-300"
        >
          <IconShoppingCart className="h-6 w-6 lg:h-5 lg:w-5" />
        </Link>
      </div>
      <button className="hover:text-purple-500 active:text-purple-500 dark:text-white dark:hover:text-purple-300 dark:active:text-purple-300">
        <IconUser className="h-6 w-6 lg:h-5 lg:w-5" />
      </button>
      <button
        role="button"
        className="hidden hover:text-purple-500 active:text-purple-500 dark:text-white dark:hover:text-purple-300 dark:active:text-purple-300 lg:block"
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
      <button
        className="hover:text-purple-500 active:text-purple-500 dark:text-white dark:hover:text-purple-300 dark:active:text-purple-300 lg:hidden"
        onClick={() => toggleMobileMenu((prev) => !prev)}
      >
        <IconBurger className="h-8 w-8" />
      </button>
    </div>
  );
};

export default HeaderSettings;
