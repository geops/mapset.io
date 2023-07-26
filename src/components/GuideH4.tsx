import H4 from "./ui/H4";

function GuideH4({ icon, text }: { icon: string; text: string }) {
  if (!text) {
    return null;
  }
  return (
    <H4 className="flex gap-2 items-center !pb-6">
      {icon && (
        <span
          dangerouslySetInnerHTML={{
            __html: icon,
          }}
        />
      )}
      <span
        className="flex items-center"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></span>
    </H4>
  );
}

export default GuideH4;
