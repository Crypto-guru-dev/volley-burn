import { cn } from "@/utils/utils";
import React, { useState } from "react";
import FAQItem from "./FAQItem";

type Props = {};

const BurnFAQs = (props: Props) => {
  const faqs = [
    {
      question: "What is the Burn?",
      answer:
        "The Burn is a deflationary mechanism that burns 1% of every transaction.",
    },
    {
      question: "What is the Burn Wallet?",
      answer:
        "The Burn Wallet is a wallet that holds the tokens that are burned.",
    },
    {
      question: "How does the Burn work?",
      answer:
        "The Burn works by taking 1% of every transaction and sending it to the Burn Wallet.",
    },
  ];
  return (
    <div className="w-11/12 max-w-3xl flex flex-col items-start justify-start gap-7">
      <div className="self-stretch flex flex-col items-start justify-start gap-3">
        <div className="self-stretch flex flex-row items-center justify-start">
          <h3 className="relative text-left font-bold font-inherit inline-block z-[2] text-2xl">
            FAQ
          </h3>
        </div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} faqItem={faq} />
        ))}
      </div>
    </div>
  );
};

export default BurnFAQs;
