import { ReactNode } from "react";

/** 全站共用區塊標題，預設置中（參考卡未子／昕力） */
export default function SectionTitle(props: {
  title: string;
  desc?: string;
  subtitleEn?: string;
  align?: "center" | "left";
  right?: ReactNode;
}) {
  const { title, desc, subtitleEn, align = "center", right } = props;
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
