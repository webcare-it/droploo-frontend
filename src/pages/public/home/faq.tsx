import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "What is dropshipping?",
    answer:
      "Dropshipping is a retail fulfillment method where you sell products without holding inventory. When a customer places an order, you purchase the item from a third-party supplier who ships it directly to the customer. You never handle the product yourself.",
  },
  {
    id: "2",
    question: "Is dropshipping still profitable in 2026?",
    answer:
      "Yes, dropshipping can still be profitable in 2026, but it requires effort. Success depends on choosing the right niche, reliable suppliers, effective marketing, and providing great customer service. Margins are typically 20-30%, and competition is high, so branding and optimization are key.",
  },
  {
    id: "3",
    question: "How much money do I need to start dropshipping?",
    answer:
      "You can start with as little as $100-500. Main costs include a domain (~$15/year), e-commerce platform (e.g., Shopify ~$39/month), and initial marketing budget ($200+ for ads). No inventory costs make it low-risk compared to traditional retail.",
  },
  {
    id: "4",
    question: "Is dropshipping legal?",
    answer:
      "Yes, dropshipping is completely legal worldwide, as long as you follow local e-commerce laws, pay taxes, and avoid selling copyrighted or prohibited items. Register your business if required in your country (e.g., LLC in the US).",
  },
  {
    id: "5",
    question: "How do I find reliable suppliers?",
    answer:
      "Use platforms like Spocket, AliExpress (with DSers), CJdropshipping, or Zendrop for vetted suppliers. Look for fast shipping (US/EU warehouses), good reviews, and responsive communication. Test orders yourself before selling.",
  },
  {
    id: "6",
    question: "What are the best products to dropship?",
    answer:
      "Focus on evergreen niches like fashion accessories, beauty, home & garden, pet supplies, or trending items with demand but low competition. Use tools like Google Trends, Sell The Trend, or product research apps to find winners. Avoid saturated items like phone cases.",
  },
  {
    id: "7",
    question: "How long does shipping take in dropshipping?",
    answer:
      "Shipping times vary: 7-15 days from China (ePacket/AliExpress), 3-7 days from US/EU suppliers (Spocket/Zendrop). Be transparent on your site to manage expectations. Faster shipping improves customer satisfaction and reduces refunds.",
  },
  {
    id: "8",
    question: "How do I handle returns and refunds?",
    answer:
      "Create a clear return policy (e.g., 30 days). Coordinate with your supplier for returns, or offer refunds yourself for better service. Many dropshippers cover return shipping to build trust, but it depends on your margins.",
  },
  {
    id: "9",
    question: "Do I need to register a business for dropshipping?",
    answer:
      "It depends on your location and scale. For small starts, often not required, but registering (e.g., sole proprietorship or LLC) protects you legally and is needed for payment processors. Check local tax laws – you may need to collect sales tax.",
  },
  {
    id: "10",
    question: "Can I dropship on Shopify?",
    answer:
      "Yes, Shopify is the most popular platform for dropshipping. It integrates easily with apps like DSers, Spocket, and Oberlo alternatives. Start with their basic plan, add a theme, and connect suppliers for automated fulfillment.",
  },
];

export const FAQSection = () => {
  return (
    <section className="pb-14 md:pb-24">
      <h2 className="text-4xl text-center md:text-5xl font-bold text-gray-900">
        Frequently Asked Questions About Dropshipping
      </h2>
      <div className="max-w-4xl mx-auto mt-8 md:mt-10">
        <Accordion type="single" collapsible className="w-full">
          {faqs &&
            faqs.length > 0 &&
            faqs?.map((faq, index) => (
              <motion.div
                key={faq?.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <AccordionItem value={`item-${faq?.id}`}>
                  <AccordionTrigger className="text-left text-xl font-semibold text-gray-900 hover:text-primary cursor-pointer">
                    {faq?.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                    {faq?.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
        </Accordion>
      </div>
    </section>
  );
};
