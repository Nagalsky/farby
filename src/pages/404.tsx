import Meta from "@/components/seo/Meta";
import { NextPage } from "next";
import Image from "next/image";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Meta title="Not found" />

      <section className="py-8">
        <div className="container">
          <Image
            src="/404.svg"
            alt="404"
            width={500}
            height={400}
            className="mx-auto block h-full w-full"
            priority
          />
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
