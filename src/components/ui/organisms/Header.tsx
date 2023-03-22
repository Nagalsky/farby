import { useScrollLock } from "@mantine/hooks";
import { FC, useState } from "react";
import HeaderCategories from "../molecules/HeaderCategories";
import HeaderLogo from "../molecules/HeaderLogo";
import HeaderNav from "../molecules/HeaderNav";
import HeaderSearch from "../molecules/HeaderSearch";
import HeaderSettings from "../molecules/HeaderSettings";

const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useScrollLock(isMenuOpened);

  const toggleMobileMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <>
      <header className="z-100 sticky top-0">
        <div className="bg-gray-50 py-3 dark:bg-dark-900 lg:relative lg:z-50">
          <div className="container flex items-center justify-between gap-4 lg:relative lg:z-50 lg:justify-start lg:gap-6 xl:gap-10">
            <HeaderLogo />

            <HeaderNav />

            <HeaderSearch />

            <HeaderSettings toggleMobileMenu={toggleMobileMenu} />
          </div>
        </div>

        <HeaderCategories
          isMenuOpened={isMenuOpened}
          closeMobileMenu={closeMobileMenu}
        />
      </header>
    </>
  );
};

export default Header;
