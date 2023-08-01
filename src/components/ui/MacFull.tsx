import Image from "next/image";

function MacFull({
  containerClassName = "",
  children,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  children: React.ReactNode;
  containerClassName?: string;
}) {
  return (
    <div className={`relative flex justify-center ${containerClassName}`}>
      <Image
        src={"/img/mac-book-pro-16.png"}
        // @ts-ignore
        width={4733}
        // @ts-ignore
        height={2741}
        alt={"mac"}
        className={`w-full h-full`}
        {...props}
      ></Image>
      <div className="absolute top-[2%] left-[9%] right-[8.2%] bottom-[7%] overflow-hidden flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default MacFull;
