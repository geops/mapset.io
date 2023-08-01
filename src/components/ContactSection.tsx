import ContactForm from "./ContactForm";
import ContactImage from "./images/ContactImage";

function ContactSection() {
  return (
    <div className={`flex justify-between overflow-hidden gap-12 w-full`}>
      <ContactForm />
      <div className="hidden lg:flex flex-1 items-start justify-center ">
        <ContactImage />
      </div>
    </div>
  );
}

export default ContactSection;
