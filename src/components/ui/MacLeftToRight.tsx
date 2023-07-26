import Image from "next/image";

function MacLeftToRight({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { className: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden w-[250px] lg:w-[500px] xl:w-[750px] flex justify-end ">
        <Image
          src={"/img/mac-book-pro-16-left.png"}
          width="728"
          height="557"
          alt={"mac"}
          className="min-w-[728px] min-h-[557px]"
        ></Image>
      </div>
      <div className="absolute top-[0px] right-[69px] w-[660px] h-[530px] overflow-hidden p-4 pl-0">
        {props.src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={props.src} alt={"mac"} {...props}></img>
        )}
      </div>
    </div>
  );
}

export default MacLeftToRight;
