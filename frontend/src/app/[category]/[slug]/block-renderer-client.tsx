"use client";

import Image from "next/image";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  console.dir(content,{depth:null})
  if (content.length)
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText ?? ""}
            />
          );
        },
      }}
    />
  );
  else return null;
}