import Image from "next/image";

function MacRightToLeft({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { className: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden w-[250px] lg:w-[500px] xl:w-[750px]">
        <Image
          src={"/img/mac-book-pro-16-right.png"}
          width="679"
          height="557"
          alt={"mac"}
          className="min-w-[679px] min-h-[557px]"
        ></Image>
      </div>

      <div className="absolute top-[0px] left-[74px] w-[605px] h-[530px] overflow-hidden flex   p-4 pr-0">
        {props.src && ( // @ts-ignore
          <Image src={props.src} alt={"mac"} {...props}></Image>
        )}
      </div>
    </div>
  );
}

export default MacRightToLeft;
