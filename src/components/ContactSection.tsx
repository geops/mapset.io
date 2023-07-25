import ContactForm from "./ContactForm";
import Contact from "./images/ContactImage";

function ContactSection() {
  return (
    <div className={`flex justify-between overflow-hidden gap-12 `}>
      <ContactForm className="pt-4 pb-4" />
      <div className="hidden lg:flex flex-1 items-start justify-center ">
        <Contact />
      </div>
    </div>
  );
}

export default ContactSection;
