"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./global/Button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div className="w-[1250px] mx-auto py-20">
        <h2 className="text-4xl font-medium mb-10 border-l-6 border-l-blue-600 w-[200px]  text-center uppercase">
          Contact
        </h2>

        <div className="grid grid-cols-2 gap-16">
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

          <div>
            <div className="box-shadow rounded-lg p-6">
              <h4 className="text-[30px] uppercase font-medium text-center ">
                Get In Touch
              </h4>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  ></textarea>
                </div>

                <Button btnWidth="w-full">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
