import clientLogos from "@/utils/clientLogos";
import Image from "next/image";
import InfiniteLooper from "./ui/Infinitelooper";

const line1 = clientLogos.slice(0, clientLogos.length / 2);
const line2 = clientLogos.slice(clientLogos.length / 2, clientLogos.length);
function ClientsLogos() {
  return (
    <>
      <InfiniteLooper speed={50}>
        {line1.map((logo) => {
          return (
            <div key={logo.id} className="px-6">
              <Image
                src={logo.src}
                alt={`${logo.id} logo`}
                className="w-[192px]"
              />
            </div>
          );
        })}
      </InfiniteLooper>
      <br />
      <InfiniteLooper speed={50} direction={"left"}>
        {line2.map((logo) => {
          return (
            <div key={logo.id} className="px-6">
              <Image
                src={logo.src}
                alt={`${logo.id} logo`}
                className="w-[192px]"
              />
            </div>
          );
        })}
      </InfiniteLooper>
    </>
  );
}
export default ClientsLogos;
