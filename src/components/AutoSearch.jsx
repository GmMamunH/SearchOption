/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const AutoSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // সার্চ ইনপুটের জন্য স্টেট
  const [results, setResults] = useState([]); // সার্চের রেজাল্টের জন্য স্টেট

  // সার্চ করার জন্য একটি অ্যারে
  const data = ["apple", "banana", "grape", "orange", "mango", "watermelon"];

  // সার্চ হ্যান্ডলার ফাংশন
  const handleSearch = (term) => {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
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
      <h1 className="text-2xl font-bold mb-4">Auto Search Example</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange} // টাইপ করার সাথে সাথে সার্চ হবে
        placeholder="Search here..."
        className="border p-2 rounded w-full max-w-sm"
      />

      <div className="mt-4 w-full max-w-sm">
        {searchTerm && results.length > 0 ? (
          <ul className="list-disc pl-5">
            {results.map((item, index) => (
              <li key={index} className="py-1">
                {item}
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

export default AutoSearch;
