import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="w-full px-6">
      <div className="flex justify-start gap-6 mt-4">
        <a href="https://mail.google.com/mail/?view=cm&to=dlgudwn3739@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors" aria-label="Send Email via Gmail">
          <SiGmail className="w-6 h-6" />
        </a>

        <a href="https://github.com/dlgudwn94" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors" aria-label="GitHub Profile">
          <AiFillGithub className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
