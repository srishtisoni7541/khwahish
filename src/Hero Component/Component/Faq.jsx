import React, { useState } from 'react'

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "1. Are all diamond ornaments certified?",
            answer:
                "Of course! At Khwaahish, all the diamond ornaments are certified by world-renowned Gemological laboratories & are BIS Hallmarked. Trust us! We do not compromise on the quality and are well known for authenticity.",
        },
        {
            question: "2. List the ring collections from Khwaahish.",
            answer:
                "Our ring collections include Engagement Rings, Wedding Rings, Cocktail Rings, and more! Visit our website or store to explore.",
        },
        {
            question: "3. How do you evaluate the quality of diamonds?",
            answer:
                "We evaluate the quality of diamonds based on the 4Cs: Cut, Clarity, Color, and Carat Weight. Each diamond is meticulously checked for these criteria.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <div className="w-[95%] mx-auto p-4">
                <h1 className="text-2xl text-start text-[#b2872d] mb-6">FAQs on Diamond Jewellery</h1>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-md">
                            <button
                                className="flex justify-between w-full px-4 py-1 bg-[#eaeae9] text-left text-[14px] font-medium"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span>{openIndex === index ? "-" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-4 py-6 bg-white border-none text-[14px] text-gray-600">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Faq