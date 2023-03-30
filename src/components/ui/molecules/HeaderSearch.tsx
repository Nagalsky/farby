import { IconMagnifyingGlass, IconXMark } from "@/components/icons";
import { FC, useEffect, useRef } from "react";
import clsxm from "../../../utils/clsxm";

interface IHeaderSearch {
  closeSearchBar: () => void;
  isSearchBarOpened: boolean;
}

const HeaderSearch: FC<IHeaderSearch> = ({
  closeSearchBar,
  isSearchBarOpened,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchBarOpened && inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [isSearchBarOpened]);

  return (
    <div
      className={clsxm(
        "bg-white dark:bg-dark-500 lg:static lg:block lg:flex-grow lg:bg-transparent lg:p-0 dark:lg:bg-transparent",
        isSearchBarOpened
          ? "fixed top-0 left-0 z-[80] block h-full w-full overflow-auto px-4 pt-3 pb-6"
          : "hidden"
      )}
    >
      <div className="flex items-center gap-4">
        <form className="flex grow items-center gap-1 rounded-full bg-gray-50 dark:bg-dark-900 lg:bg-white dark:lg:bg-dark-500">
          <button className="self-stretch px-4 text-neutral-700 hover:text-neutral-900 dark:text-white dark:hover:text-primary-500">
            <IconMagnifyingGlass className="h-5 w-5" />
          </button>
          <input
            ref={inputRef}
            type="text"
            placeholder="Hľadať"
            className="placeholder:neutral-900 input h-[38px] w-full grow border-0 bg-transparent px-0 focus:shadow-none focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-white"
          />
        </form>

        <button
          role="button"
          className="hover:text-primary-500 active:text-primary-500 dark:text-white dark:hover:text-primary-300 dark:active:text-primary-300 lg:hidden"
          onClick={() => closeSearchBar()}
        >
          <IconXMark className="h-6 w-6" />
        </button>
      </div>

      <div className="my-4 -mx-4 h-px bg-gray-200 dark:bg-dark-900 lg:hidden"></div>
    </div>
  );
};

export default HeaderSearch;
