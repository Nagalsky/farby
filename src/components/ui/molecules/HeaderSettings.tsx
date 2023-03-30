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
import { FC, useEffect, useState } from "react";

interface IHeaderSettings {
  openMobileMenu: () => void;
  openSearchBar: () => void;
}

const HeaderSettings: FC<IHeaderSettings> = ({
  openMobileMenu,
  openSearchBar,
}) => {
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
    <div className="flex flex-shrink-0 items-center gap-4 md:gap-6 lg:gap-8">
      <button
        className="hover:text-primary-500 active:text-primary-500 dark:text-white dark:hover:text-primary-300 dark:active:text-primary-300 lg:hidden"
        onClick={() => openSearchBar()}
      >
        <IconMagnifyingGlass className="h-7 w-7 lg:h-5 lg:w-5" />
      </button>
      <div className="relative">
        <Link
          href="/cart"
          className="dark:text-white dark:hover:text-primary-300 dark:active:text-primary-300"
        >
          <IconShoppingCart className="h-6 w-6 lg:h-5 lg:w-5" />
        </Link>
      </div>
      <Link
        href="/auth/login"
        className="hover:text-primary-500 active:text-primary-500 dark:text-white dark:hover:text-primary-300 dark:active:text-primary-300"
      >
        <IconUser className="h-6 w-6 lg:h-5 lg:w-5" />
      </Link>
      <button
        role="button"
        className="hidden hover:text-primary-500 active:text-primary-500 dark:text-white dark:hover:text-primary-300 dark:active:text-primary-300 lg:block"
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
        className="hover:text-primary-500 active:text-primary-500 dark:text-white dark:hover:text-primary-300 dark:active:text-primary-300 lg:hidden"
        onClick={() => openMobileMenu()}
      >
        <IconBurger className="h-8 w-8" />
      </button>
    </div>
  );
};

export default HeaderSettings;
