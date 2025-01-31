import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What materials are your bags made from?",
      answer: "Our bags are crafted from premium full-grain leather, sustainable canvas, and high-quality vegan alternatives. Each material is carefully selected to ensure durability and style."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide! Shipping times and costs vary by location. Free shipping is available for orders over $200 in select countries."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items in original condition with tags attached. Returns are free for customers in the United States."
    },
    {
      question: "How do I care for my leather bag?",
      answer: "We recommend regular cleaning with a soft, dry cloth. For leather bags, use a leather conditioner every 3-6 months. Keep bags away from direct sunlight and water."
    },
    {
      question: "Are your products covered by warranty?",
      answer: "Yes, all our bags come with a lifetime warranty against manufacturing defects. This covers issues with stitching, hardware, and material defects."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order ships, you'll receive a tracking number via email. You can also track your order through your account dashboard."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our products and services</p>
      </div>
      
      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <h2>Still have questions?</h2>
        <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="contact-btn">Get in touch</button>
      </div>
    </div>
  );
};

export default FAQ;