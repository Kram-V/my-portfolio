import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-[40px] lg:scroll-mt-[70px]">
      <div className="w-[90%] xl:w-[1050px] 2xl:w-[1250px] mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-medium mb-10 border-l-6 border-l-blue-600 w-[180px] md:w-[200px] text-center uppercase">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium mb-4">
              Feel free to reach out! You can send me a message or follow me on
              social media:
            </p>

            <div className="flex flex-col gap-[20px]">
              <Link
                href="https://web.facebook.com/markanthony.vivar.1/"
                target="_blank"
              >
                <div className="flex items-center gap-[13px] relative left-[4px] -mb-[5px]">
                  <img
                    className="w-[33px]"
                    src="/contact/facebook.png"
                    alt="Facebook"
                  />
                  <p className="font-medium text-gray-600">
                    Mark Anthony Vivar
                  </p>
                </div>
              </Link>

              <Link href="mailto:markvivar32@gmail.com" target="_blank">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10"
                    src="/contact/gmail.png"
                    alt="Gmail 1"
                  />
                  <p className="font-medium text-gray-600">
                    markvivar32@gmail.com
                  </p>
                </div>
              </Link>

              <Link href="mailto:markanthonyvivar24@gmail.com" target="_blank">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10"
                    src="/contact/gmail.png"
                    alt="Gmail 2"
                  />
                  <p className="font-medium text-gray-600">
                    markanthonyvivar24@gmail.com
                  </p>
                </div>
              </Link>

              <Link href="mailto:markanthonyvivar241@gmail.com" target="_blank">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10"
                    src="/contact/gmail.png"
                    alt="Gmail 3"
                  />
                  <p className="font-medium text-gray-600">
                    markanthonyvivar241@gmail.com
                  </p>
                </div>
              </Link>

              <Link href="https://github.com/Kram-V" target="_blank">
                <div className="flex items-center gap-[10px] relative left-[4px] -top-[6px]">
                  <img
                    className="w-[34px]"
                    src="/contact/github.png"
                    alt="Github"
                  />
                  <p className="font-medium text-gray-600">Kram-V</p>
                </div>
              </Link>

              <Link
                href="https://gitlab.com/markanthonyvivar24"
                target="_blank"
              >
                <div className="flex items-center gap-[10px] relative left-[4px] -top-[13px]">
                  <img
                    className="w-[34px]"
                    src="/contact/gitlab.png"
                    alt="Gitlab"
                  />
                  <p className="font-medium text-gray-600">
                    markanthonyvivar24
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
