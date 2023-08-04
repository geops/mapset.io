import Image from "next/image";
import H4 from "./ui/H4";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

function GuideH4({ icon, text }: { icon: string; text: string }) {
  if (!text) {
    return null;
  }
  const src = `https://editor.mapset.${domain}/static/icons/${icon}.svg`;
  return (
    <H4 className="flex gap-2 items-center !pb-6">
      {icon && <Image alt={icon} width={24} height={24} src={src}></Image>}
      <span
        className="flex items-center pt-[3px]"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></span>
    </H4>
  );
}

export default GuideH4;
