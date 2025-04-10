"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./global/Button";

const ContactForm = () => {
  const form = useRef<any>("");
  const [mounted, setMounted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
        }
      )
      .then(
        () => {
          alert("Email Sent Successfully");
          setIsLoading(false);
          form.current?.reset();
        },
        (error) => {
          alert("Email Failed Sending");
          setIsLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="box-shadow rounded-lg p-6">
        <h4 className="text-[30px] uppercase font-medium text-center mb-4">
          Get In Touch
        </h4>

        <form ref={form} className="space-y-4" onSubmit={handleSubmitEmail}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            ></textarea>
          </div>

          <Button disabled={isLoading} btnWidth="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
