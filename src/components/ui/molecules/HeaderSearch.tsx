import { IconMagnifyingGlass } from "@/components/icons";
import { FC } from "react";

const HeaderSearch: FC = () => {
  return (
    <div className="hidden lg:block lg:flex-grow">
      <form className="flex items-center gap-1 rounded-full bg-white dark:bg-dark-500">
        <button className="self-stretch px-4 text-neutral-700 hover:text-neutral-900 dark:text-white dark:hover:text-purple-500">
          <IconMagnifyingGlass className="h-5 w-5" />
        </button>
        <input
          type="text"
          placeholder="Hľadať"
          className="input h-[38px] w-full grow border-0 bg-transparent px-0 focus:shadow-none focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-white"
        />
      </form>
    </div>
  );
};

export default HeaderSearch;
