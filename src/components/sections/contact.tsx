"use client";

import { useState } from "react";
import { MainHeading } from "@/components/basic/text";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(2);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
    const lines = event.target.value.split("\n").length;
    setRows(Math.min(Math.max(lines, 2), 5));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <section
      className="flex w-screen h-screen bg-center bg-cover backdrop-saturate-0 backdrop-contrast-100"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4')",
      }}
    >
      <div className="flex items-center justify-center w-1/2 h-screen py-6 bg-black bg-opacity-70 backdrop-saturate-0">
        <MainHeading>
          Contact
          <br />
          Me
        </MainHeading>
      </div>
      <div className="flex items-center justify-center w-1/2 h-screen bg-black">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center w-3/4 h-full gap-3 p-8"
        >
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="py-2 mb-4 text-white bg-transparent border-b-4 border-white outline-none"
            placeholder="Your name"
            required
          />
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="py-2 mb-4 text-white bg-transparent border-b-4 border-white outline-none"
            placeholder="Your email"
            required
          />
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleTextareaChange}
            rows={rows}
            className="py-2 mb-4 text-white bg-transparent border-b-4 border-white outline-none"
            placeholder="Your message"
            required
          />
          <button type="submit" className="p-2 mt-6 text-white bg-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
