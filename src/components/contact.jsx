import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";

const Contact = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="mx-auto max-w-6xl">
        <p className="my-10 text-center text-3xl lg:text-8xl text-black">Contact</p>
        <p className="p-4 text-center text-xl text-black">{CONTACT.text}</p>
        <p className="my-4 text-center text-2xl font-medium text-black lg:pt-6 lg:text-5xl">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <p className="my-4 text-center text-2xl font-medium text-black lg:pt-6 lg:text-5xl">
          <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
        </p>
      </div>
      <div className="mt-20 flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="my-8 text-center text-gray-400">
        &copy; All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
