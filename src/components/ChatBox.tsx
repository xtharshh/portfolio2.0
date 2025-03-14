"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Send, Bot, Loader2, X } from "lucide-react";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, data]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, I encountered an error." },
      ]);
    } finally {
      setIsLoading(false);
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-14 lg:right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full p-4 sm:p-5 md:p-6 bg-gray-300 text-black hover:bg-gray-500 dark:bg-[#ff4d8d] dark:text-white dark:hover:bg-[#ff3a7d] shadow-lg transition-colors flex items-center gap-2"
        >
          <Bot className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          <span className="hidden sm:inline">Kool.AI</span>
        </Button>
      ) : (
        <Card className="w-[90vw] max-w-[380px] h-[70vh] max-h-[550px] bg-white dark:bg-[#1a1625] shadow-2xl border border-gray-200 dark:border-[#2a2438] transition-colors">
          <CardHeader className="flex justify-between bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-white p-4 rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <span className="text-lg font-semibold">Chat with Kool.ai</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-gray-800 dark:hover:bg-[#3a3448] rounded-full ml-auto transition-colors"
                aria-label="Close Chat"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 h-[calc(100%-130px)] sm:h-[calc(100%-140px)] md:h-[calc(100%-150px)] bg-gray-50 dark:bg-[#1a1625]">
            <ScrollArea className="h-full pr-4">
              {messages.length === 0 && !isLoading && (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  <Bot className="h-12 w-12 mb-2" />
                  <p className="text-lg font-medium">How can I help you today?</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                  <div className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-black text-white ml-4"
                      : "bg-white dark:bg-[#2a2438] text-black dark:text-white border border-gray-200 dark:border-[#3a3448] mr-4 shadow-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-center">
                  <Loader2 className="animate-spin" />
                </div>
              )}
              <div ref={scrollRef} />
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-4 bg-white dark:bg-[#1a1625] border-t border-gray-200 dark:border-[#2a2438]">
            <form onSubmit={handleSubmit} className="flex items-center w-full gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-50 dark:bg-[#2a2438] border-gray-200 dark:border-[#3a3448] focus:border-black dark:focus:border-white"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-black text-white hover:bg-gray-800 dark:bg-[#ff4d8d] dark:text-white dark:hover:bg-[#ff3a7d] px-4 transition-colors"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ChatBox;
