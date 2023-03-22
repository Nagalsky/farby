import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { IMeta } from "./meta.inteface";

const getTitle = (title: string) => `${title} | Farby`;

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  image,
  type,
}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
    </>
  );
};

export default Meta;
