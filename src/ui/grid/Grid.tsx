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
  const gridMap = new Map<number, string>([
    [1, "col-span-1"],
    [2, "col-span-2"],
    [3, "col-span-3"],
    [4, "col-span-4"],
    [5, "col-span-5"],
    [6, "col-span-6"],
    [7, "col-span-7"],
    [8, "col-span-8"],
    [9, "col-span-9"],
    [10, "col-span-10"],
    [11, "col-span-11"],
    [12, "col-span-12"],
  ]);

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
            <div key={col.sys.id} className={gridMap.get(cols[index])}>
              <GridCol {...col} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
