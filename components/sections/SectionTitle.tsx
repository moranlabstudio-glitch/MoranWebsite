import { ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  desc?: string;
  subtitleEn?: string;
  /** 置中（預設，參考卡未子）；left 用於左右排列區塊 */
  align?: "center" | "left";
  right?: ReactNode;
};

export default function SectionTitleBlock({
  title,
  desc,
  subtitleEn,
  align = "center",
  right,
}: SectionTitleProps) {
  return (
    <div className={`block-title ${align === "center" ? "block-title--center" : ""}`}>
      <div>
        {subtitleEn ? <p className="block-title__en">{subtitleEn}</p> : null}
        <h2>{title}</h2>
        {desc ? <p className="block-title__desc">{desc}</p> : null}
      </div>
      {right ? <div>{right}</div> : null}
    </div>
  );
}
