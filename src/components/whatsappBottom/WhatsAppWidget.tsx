// WhatsAppWidget.js

import React, { useEffect } from "react"

const WhatsAppWidget = () => {
  useEffect(() => {
    // WhatsApp widget script
    const whatsappScript = document.createElement("script")
    whatsappScript.type = "text/javascript"
    whatsappScript.async = true
    whatsappScript.src =
      "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?36216"

    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#4dc247",
        ctaText: "Chat with us",
        borderRadius: "25",
        marginLeft: "0",
        marginBottom: "25",
        marginRight: "20",
        position: "right",
      },
      brandSetting: {
        brandName: "Technovita Solutions",
        brandSubTitle: "Grow your Ecommerce Business with us",
        brandImg: "/logo.webp",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello, I have a question about {{page_link}}",
        backgroundColor: "#0a5f54",
        ctaText: "Start Chat",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "+917451073504",
      },
    }

    whatsappScript.onload = () => {
      // Assuming CreateWhatsappChatWidget is a global function defined by the script
      ;(window as any).CreateWhatsappChatWidget(options)
    }

    // Append the WhatsApp script to the head of the document
    document.head.appendChild(whatsappScript)

    // Cleanup function
    return () => {
      whatsappScript.remove()
    }
  }, [])

  return null
}

export default WhatsAppWidget
