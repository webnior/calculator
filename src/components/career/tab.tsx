"use client";
//import jobs from "../../../jobs"
import React, { useEffect, useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("all"); // Initial active tab
  const [job,setJob]=useState({});
  useEffect(()=>{
    setJob(jobs)
  },[])

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-600 hover:text-white transition duration-300`}
          onClick={() => handleTabClick("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "product"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-600 hover:text-white transition duration-300`}
          onClick={() => handleTabClick("product")}
        >
          Product
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "engineering"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-600 hover:text-white transition duration-300`}
          onClick={() => handleTabClick("engineering")}
        >
          Engineering
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "sales"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-600 hover:text-white transition duration-300`}
          onClick={() => handleTabClick("sales")}
        >
          Sales
        </button>
        {/* Add similar buttons for other tabs */}
      </div>

      <div className="mt-4">
        {activeTab === "all" && (
          <div className="text-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-16">
              <a href="/card1-url">
                <div className="border border-gray-400 border-1 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">Card 1</h2>
                  <p>This is the content for all tab Card 1.</p>
                </div>
              </a>
              <a href="/card2-url">
                <div className="border border-gray-400 border-1 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">Card 2</h2>
                  <p>This is the content for all tab Card 2.</p>
                </div>
              </a>
              <a href="/card3-url">
                <div className="border border-gray-400 border-1 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">Card 3</h2>
                  <p>This is the content for all Card 3.</p>
                </div>
              </a>
              <a href="/card4-url">
                <div className="border border-gray-400 border-1 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">Card 4</h2>
                  <p>This is the content for Card 4.</p>
                </div>
              </a>
            </div>
          </div>
        )}
        {activeTab === "product" && (
          <div className="text-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-16">
              <a href="/product-card1-url">
                <div className="border border-gray-400 border-1 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">Product Card 1</h2>
                  <p>This is the content for Product Card 1.</p>
                </div>
              </a>
              <a href="/product-card2-url">
                <div className="border border-gray-400 border-1 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">Product Card 2</h2>
                  <p>This is the content for Product Card 2.</p>
                </div>
              </a>
            </div>
          </div>
        )}
        {activeTab === "engineering" && (
          <p className="text-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-16">
              <a href="/engineering-card1-url">
                <div className="border border-gray-400 border-1 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">Engineering Card 1</h2>
                  <p>This is the content for Engineering Card 1.</p>
                </div>
              </a>
            </div>
          </p>
        )}
        {activeTab === "sales" && (
          <p className="text-gray-700">
             <div className="grid grid-cols-2 gap-4 mb-16">
              <a href="/sales-card1-url">
                <div className="border border-gray-400 border-1 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">Sales Card 1</h2>
                  <p>This is the content for Sales Card 1</p>
                </div>
              </a>
            </div>
          </p>
        )}
        {/* Add similar content sections for other tabs */}
      </div>
    </div>
  );
}
