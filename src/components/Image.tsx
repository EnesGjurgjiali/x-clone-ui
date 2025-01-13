"use client";

import { IKImage } from "imagekitio-next";

type ImageType = {
  path?: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, w, h, alt, className }: ImageType) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      width={w}
      alt={alt}
      height={h}
      className={className}
    />
  );
};

export default Image;
