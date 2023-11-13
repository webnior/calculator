import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqObj = {
  amazon: [
    {
      question: "1. How to calculate profit on Amazon?",
      answer:
        "Utilize our Technovita Amazon Seller Calculator to assess profit by deducting total fees from the sale price.",
    },
    {
      question: "2. How to check commission rate of products on Amazon?",
      answer:
        "You can easily determine commission rates by referring to Amazon's fee structure or using our Amazon Commission Calculator.",
    },
    {
      question: "3. How much does Amazon take from sellers as a commission?",
      answer:
        "Amazon's commission varies by category, but our Amazon Profit Calculator can help you calculate the exact amount.",
    },
    {
      question: "4. How to calculate the Delivery charges on the Amazon ?",
      answer:
        "Delivery charges are typically determined by Amazon based on shipping options. Check Amazon's shipping policies for precise calculations.",
    },
    {
      question: "5. How to decide the selling price of a product on a Amazon?",
      answer:
        "Use our Amazon Pricing Calculator to optimize your product's selling price by considering your costs, fees, and desired profit margin. This way you will be able to find out a sweet point for your product to list it on the amazon ecommerce platform.",
    },
  ],
  flipkart: [
    {
      question: "1. How to calculate profit on Flipkart?",
      answer:
        "Utilize our Technovita Flipkart Seller Calculator to assess profit by deducting total fees from the sale price.",
    },
    {
      question: "2. How to check commission rate of products on Flipkart?",
      answer:
        "You can easily determine commission rates by referring to Flipkart's fee structure or using our Flipkart Commission Calculator.",
    },
    {
      question: "3. How much does Flipkart take from sellers as a commission?",
      answer:
        "Flipkart's commission varies by category, but our Flipkart Profit Calculator can help you calculate the exact amount.",
    },
    {
      question: "4. How to calculate the Delivery charges on the Flipkart ?",
      answer:
        "Delivery charges are typically determined by Flipkart based on shipping options. Check Flipkart's shipping policies for precise calculations.",
    },
    {
      question:
        "5. How to decide the selling price of a product on a Flipkart?",
      answer:
        "Use our Flipkart Pricing Calculator to optimize your product's selling price by considering your costs, fees, and desired profit margin. This way you will be able to find out a sweet point for your product to list it on the Flipkart ecommerce platform.",
    },
  ],
  myntra: [
    {
      question: "1. How to calculate profit on Myntra?",
      answer:
        "Utilize our Technovita Myntra Seller Calculator to assess profit by deducting total fees from the sale price.",
    },
    {
      question: "2. How to check commission rate of products on Myntra?",
      answer:
        "You can easily determine commission rates by referring to Myntra's fee structure or using our Myntra Commission Calculator.",
    },
    {
      question: "3. How much does Myntra take from sellers as a commission?",
      answer:
        "Myntra's commission varies by category, but our Myntra Profit Calculator can help you calculate the exact amount.",
    },
    {
      question: "4. How to calculate the Delivery charges on the Myntra ?",
      answer:
        "Delivery charges are typically determined by Myntra based on shipping options. Check Myntra's shipping policies for precise calculations.",
    },
    {
      question: "5. How to decide the selling price of a product on a Myntra?",
      answer:
        "Use our Myntra Pricing Calculator to optimize your product's selling price by considering your costs, fees, and desired profit margin. This way you will be able to find out a sweet point for your product to list it on the Myntra ecommerce platform.",
    },
  ],
  ajio: [
    {
      question: "1. How to calculate profit on Ajio?",
      answer:
        "Utilize our Technovita Ajio Seller Calculator to assess profit by deducting total fees from the sale price.",
    },
    {
      question: "2. How to check commission rate of products on Ajio?",
      answer:
        "You can easily determine commission rates by referring to Ajio's fee structure or using our Ajio Commission Calculator.",
    },
    {
      question: "3. How much does Ajio take from sellers as a commission?",
      answer:
        "Ajio's commission varies by category, but our Ajio Profit Calculator can help you calculate the exact amount.",
    },
    {
      question: "4. How to calculate the Delivery charges on the Ajio ?",
      answer:
        "Delivery charges are typically determined by Ajio based on shipping options. Check Ajio's shipping policies for precise calculations.",
    },
    {
      question: "5. How to decide the selling price of a product on a Ajio?",
      answer:
        "Use our Ajio Pricing Calculator to optimize your product's selling price by considering your costs, fees, and desired profit margin. This way you will be able to find out a sweet point for your product to list it on the Ajio ecommerce platform.",
    },
  ],
}

export default function FAQ({ page }: { page: keyof typeof faqObj }) {
  return (
    <>
      {faqObj[page].map((obj, index) => (
        <CustomAccordion
          key={index}
          question={obj.question}
          answer={obj.answer}
        />
      ))}
    </>
  )
}

function CustomAccordion({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
