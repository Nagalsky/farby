import { FC, useState } from "react";
import { lock, unlock } from "tua-body-scroll-lock";
import HeaderCategories from "../molecules/HeaderCategories";
import HeaderLogo from "../molecules/HeaderLogo";
import HeaderNav from "../molecules/HeaderNav";
import HeaderSearch from "../molecules/HeaderSearch";
import HeaderSettings from "../molecules/HeaderSettings";

const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);

  const openMobileMenu = () => {
    setIsMenuOpened(true);
    lock();
  };

  const closeMobileMenu = () => {
    setIsMenuOpened(false);
    unlock();
  };

  const openSearchBar = () => {
    setIsSearchBarOpened(true);
    lock();
  };

  const closeSearchBar = () => {
    setIsSearchBarOpened(false);
    unlock();
  };

  return (
    <>
      <header className="z-100 sticky top-0">
        <div className="bg-gray-50 py-3 dark:bg-dark-900">
          <div className="container flex items-center justify-between gap-4 lg:justify-start lg:gap-6 xl:gap-10">
            <HeaderLogo />

            <HeaderNav />

            <HeaderSearch
              closeSearchBar={closeSearchBar}
              isSearchBarOpened={isSearchBarOpened}
            />

            <HeaderSettings
              openMobileMenu={openMobileMenu}
              openSearchBar={openSearchBar}
            />
          </div>
        </div>

        <HeaderCategories
          isMenuOpened={isMenuOpened}
          closeMobileMenu={closeMobileMenu}
          openSearchBar={openSearchBar}
        />
      </header>
    </>
  );
};

export default Header;
