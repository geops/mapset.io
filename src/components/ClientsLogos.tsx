import clientLogos from "@/utils/clientLogos";
import Image from "next/image";

function ClientsLogos() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-12">
      {clientLogos.map((logo) => {
        return (
          <div key={logo.id}>
            <Image
              src={logo.src}
              alt={`${logo.id} logo`}
              className="w-[192px]"
            />
          </div>
        );
      })}
    </div>
  );
}
export default ClientsLogos;
