import React, { FC } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import clsxm from "@/lib/clsxm";

interface RichTextProps {
  content: {
    json: any;
  };
  className?: string;
}

export const RichText: FC<RichTextProps> = ({ content, className }) => {
  return (
    <div className={clsxm(className, "richText hyphens-auto")}>
      {documentToReactComponents(content.json)}
    </div>
  );
};
