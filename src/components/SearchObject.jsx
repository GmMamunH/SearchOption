/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const SearchObject = () => {
  const [searchTerm, setSearchTerm] = useState(""); // সার্চ ইনপুটের জন্য স্টেট
  const [results, setResults] = useState([]); // সার্চের রেজাল্টের জন্য স্টেট

  // সার্চ করার জন্য একটি অবজেক্টের অ্যারে
  const data = [
    { id: 1, name: "apple", category: "fruit" },
    { id: 2, name: "banana", category: "fruit" },
    { id: 3, name: "grape", category: "fruit" },
    { id: 4, name: "carrot", category: "vegetable" },
    { id: 5, name: "mango", category: "fruit" },
    { id: 6, name: "cucumber", category: "vegetable" },
  ];

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
      <h1 className="text-2xl font-bold mb-4">Object Name Search Example</h1>
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

export default SearchObject;
