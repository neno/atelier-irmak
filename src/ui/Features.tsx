import clsxm from "@/lib/clsxm";
import { BackgroundTypes, IFeature, IText } from "@/schema/types";
import { FC } from "react";
import { Container } from "./Container";
import { RichText } from "@/ui/rich-text/RichText";
import { isFeature } from "@/schema/guards";
import { Feature } from "./Feature";

interface FeaturesProps {
  items: IText[] | IFeature[];
  background?: BackgroundTypes;
  columns?: number;
}
export const Features: FC<FeaturesProps> = ({
  items,
  background = "none",
  columns,
}) => (
  <div
    className={clsxm("features", {
      "w-full xl:mt-24": background !== "none",
      "bg-gray": background === "light",
      "bg-primary": background === "dark",
    })}
  >
    <Container className={clsxm("py-8 sm:py-16")}>
      <div
        className={clsxm(
          "grid mx-auto md:max-w-4xl lg:max-w-full gap-4 lg:gap-8 xl:gap-12 2xl:gap-16 xl:grid-cols-3",
          `xl:grid-cols-${columns ?? 3}`
        )}
      >
        {items.map((item) => (
          <section className="relative" key={item.sys.id}>
            {isFeature(item) ? (
              <Feature
                media={item.media}
                title={item.title}
                text={item.text}
                page={item.page}
              />
            ) : (
              <RichText content={item.richText} />
            )}
          </section>
        ))}
      </div>
    </Container>
  </div>
);
