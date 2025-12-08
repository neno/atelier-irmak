import clsxm from "@/lib/clsxm";
import { IGrid } from "@/schema/types";
import { FC } from "react";
import { Container } from "../Container";
import { GridCol } from "./GridCol";

export const Grid: FC<IGrid> = ({
  background,
  columnsCollection: { items },
  layout,
}) => {
  const cols = layout.split("-").map(Number);

  return (
    <div
      className={clsxm("py-8 md:py-16", {
        "xl:mt-24": background !== "none",
        "bg-gray": background === "light",
        "bg-primary": background === "dark",
      })}
    >
      <Container>
        <div className={`lg:grid grid-cols-12 gap-8`}>
          {items.map((col, index) => (
            <div key={col.sys.id} className={`col-span-${cols[index]}`}>
              <GridCol {...col} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
