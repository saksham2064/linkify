"use client"
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Generate = () => {
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState("");
  const [pic, setPic] = useState("");

  // Update a specific link in the array
  const handleChange = (index, key, value) => {
    const updatedLinks = links.map((item, i) => {
      if (i === index) {
        return { ...item, [key]: value };
      }
      return item;
    });
    setLinks(updatedLinks);
  };

  // Add a new empty link
  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }]);
  };

  // Submit links to backend
  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links,
      handle,
      pic,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const r = await fetch("http://localhost:3000/api/add", requestOptions);
      const result = await r.json();
      toast(result.message);
    } catch (error) {
      toast("Error submitting links");
    }
  };

  return (
    <div className="grid min-h-screen grid-cols-1 bg-pink-200 md:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-6 px-6 md:px-20">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">
          Create your Linkify
        </h1>

        {/* Step 1: Handle */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Step 1: Claim a handle</label>
          <input
            onChange={(e) => setHandle(e.target.value)}
            value={handle}
            type="text"
            placeholder="e.g. Saksham"
            className="px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Step 2 & 3: Links */}
        {links.map((item, index) => (
          
          <div key={index} className="flex gap-2 pb-4 border-b">
            <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Step 2: Link title</label>
            <input
              type="text"
              placeholder="e.g. My Portfolio"
              value={item.linktext}
              onChange={(e) => handleChange(index, "linktext", e.target.value)}
              className="px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-pink-400"
            />
            </div>
 <div className="flex flex-col">
            <label className="mt-2 font-semibold text-gray-700">Step 3: Link URL</label>
            <input
              type="url"
              placeholder="https://example.com"
              value={item.link}
              onChange={(e) => handleChange(index, "link", e.target.value)}
              className="px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-pink-400"
            />
            </div>
          </div>
        ))}

        <button
          onClick={addLink}
          className="px-6 py-3 mt-4 font-semibold text-white transition bg-pink-500 rounded-full hover:bg-pink-600"
        >
          Add link
        </button>

        {/* Step 4: Profile picture */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Step 4: Profile picture</label>
          <input
            type="file"
            onChange={(e) => setPic(e.target.value)}
            className="file:mr-4 file:rounded-full file:border-0 file:bg-pink-500 file:px-4 file:py-2 file:text-white hover:file:bg-pink-600"
          />
        </div>

        {/* Submit */}
        <button
          onClick={submitLinks}
          className="px-6 py-3 mt-4 font-semibold text-white transition bg-pink-500 rounded-full hover:bg-pink-600"
        >
          Generate Linkify
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center bg-red-50">
        <img src="/home.png" alt="Generate your links" className="w-[260px] md:w-[320px]" />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Generate;