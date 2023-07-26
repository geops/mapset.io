import Image from "next/image";

function MacFull({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { className: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center `}>
      <Image
        src={"/img/mac-book-pro-16.png"}
        width="375"
        height="239"
        alt={"mac"}
        className="min-w-[375px]"
      ></Image>
      <div className="absolute top-[31px] w-[328px] h-[214px] overflow-hidden flex items-center justify-center">
        {props.src && ( // @ts-ignore
          <Image src={props.src} alt={"mac"} {...props}></Image>
        )}
      </div>
    </div>
  );
}

export default MacFull;
