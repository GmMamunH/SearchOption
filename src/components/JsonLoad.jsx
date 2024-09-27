/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
const JsonLoad = () => {
  const [searchTerm, setSearchTerm] = useState(""); // সার্চ ইনপুটের জন্য স্টেট
  const [results, setResults] = useState([]); // সার্চের রেজাল্টের জন্য স্টেট
  const [data, setData] = useState([]); // JSON ফাইল থেকে লোড হওয়া ডেটা স্টোর করার জন্য স্টেট

  // useEffect এর মাধ্যমে JSON ফাইল থেকে ডেটা লোড করা হচ্ছে
  //  useEffect(() => {
  //    // JSON ফাইল থেকে ডেটা লোড করা
  //    fetch("/public/data.json")
  //      .then((response) => response.json())
  //      .then((data) => setData(data)) // ডেটা লোড হয়ে গেলে সেটি স্টেটে রাখা
  //      .catch((error) => console.error("Error loading data:", error));
  //  }, []); // একবারই রান হবে
  // =======================================

  useEffect(() => {
    const fetchObject = async () => {
      const fetchData = await fetch("/public/data.json");
      const data = await fetchData.json();
      setData(data);
    };
    fetchObject();
  }, []);
  //  =======================================
  // useEffect এর মাধ্যমে JSON ফাইল থেকে ডেটা লোড করা হচ্ছে
  // useEffect(() => {
  //   // JSON ফাইল থেকে ডেটা লোড করার জন্য async ফাংশন তৈরি করা
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/data.json"); // JSON ফাইল থেকে ডেটা ফেচ করা
  //       const jsonData = await response.json(); // রেসপন্সকে json এ কনভার্ট করা
  //       setData(jsonData); // ডেটা লোড হওয়ার পর সেটাকে স্টেটে সেভ করা
  //     } catch (error) {
  //       console.error("Error loading data:", error); // কোনো সমস্যা হলে সেটি কনসোলে দেখাবে
  //     }
  //   };

  //   fetchData(); // ফাংশন কল করা হচ্ছে
  // }, []); // এই effect শুধুমাত্র একবারই রান হবে (কম্পোনেন্ট লোড হলে)
  // ========================================

  // সার্চ হ্যান্ডলার ফাংশন
  const handleSearch = (term) => {
    const filteredData = data.filter(
      (item) => item.name.toLowerCase().includes(term.toLowerCase()) // শুধু নাম অনুসারে ফিল্টার করা হচ্ছে
    );
    setResults(filteredData); // সার্চ করা ফলাফল সেভ করা হচ্ছে
  };

  // ইনপুট চেঞ্জ ইভেন্ট
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term); // টাইপ করার সাথে সাথে সার্চ হচ্ছে
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Search Object from JSON</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange} // টাইপ করার সাথে সাথে সার্চ হবে
        placeholder="Search by name..."
        className="border p-2 rounded w-full max-w-sm"
      />

      <div className="mt-4 w-full max-w-sm">
        {searchTerm && results.length > 0 ? (
          <ul className="list-disc pl-5">
            {results.map((item) => (
              <li key={item.id} className="py-1">
                {item.name} - {item.category}
              </li>
            ))}
          </ul>
        ) : searchTerm ? (
          <p className="text-red-500 font-bold">Not Found</p>
        ) : (
          <p className="text-gray-500">Type something to search</p>
        )}
      </div>
    </div>
  );
};

export default JsonLoad;
