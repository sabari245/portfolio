// app/chat.tsx -- client component
"use client";

import { PropsWithChildren, useState } from "react";
import { ChatCompletionRequestMessage } from "openai";

interface AIChatProps {}
function AIChat(props: PropsWithChildren<AIChatProps>) {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex items-center justify-center text-white bg-black rounded-full h-14 w-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 rotate-45"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </div>
      <div className="max-w-md p-6 bg-black">
        <p className="text-white">{props.children}</p>
      </div>
    </div>
  );
}

interface UserChatProps {}
function UserChat(props: PropsWithChildren<UserChatProps>) {
  return (
    <div className="flex flex-row-reverse gap-4 p-4">
      <div className="flex items-center justify-center text-white rounded-full bg-primary h-14 w-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
      <div className="max-w-md p-6 bg-primary">
        <p className="text-white">{props.children}</p>
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false); // added state variable
  const chatViewRef = useRef<HTMLDivElement>(null);

  function handleInputChange(event: any) {
    setInput(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    let initialUpdate: ChatCompletionRequestMessage[] = [
      ...messages,
      {
        role: "user",
        content: input,
      },
    ];
    setMessages(initialUpdate);
    setInput("");
    setIsTyping(true); // set isTyping to true before calling the API

    fetch("/api/completion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: initialUpdate }),
    })
      .then((res) => res.json())
      .then((data) => {
        let secondaryUpdate: ChatCompletionRequestMessage[] = [
          ...initialUpdate,
          {
            role: "assistant",
            content: data.result.content,
          },
        ];
        setMessages(secondaryUpdate);
        setIsTyping(false); // set isTyping to false after receiving the message
      });
  }

  useEffect(() => {
    if (chatViewRef.current) {
      chatViewRef.current.scrollTo({
        top: chatViewRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <div ref={chatViewRef} className="flex-grow overflow-y-scroll">
        <div className="h-1/2"></div>
        <AIChat>
          Hi, I am an AI bot trained on professional information about Sabari.
          feel free to ask me any questions
        </AIChat>

        {messages.map((message, index) => (
          <div key={index}>
            {message.role === "user" ? (
              <UserChat>{message.content}</UserChat>
            ) : (
              <AIChat>{message.content}</AIChat>
            )}
          </div>
        ))}

        {isTyping && (
          <AIChat>
            <p className="text-gray-200"> Typing ... </p>
          </AIChat>
        )}
      </div>

      <form
        style={{
          boxShadow: "0px -4px rgba(0, 0, 0)",
        }}
        className="flex items-center h-14"
        onSubmit={handleSubmit}
      >
        <div className="flex-grow p-3 ml-6">
          <input
            placeholder="Chat with me!"
            className="w-full outline-none"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="flex items-center justify-center text-2xl text-white bg-black h-14 w-14"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
