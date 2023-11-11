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
  myntra: [
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
  ajio: [
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
