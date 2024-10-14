"use client";
import Link from "next/link";
import add from "./actions/add";
import { useState } from 'react';

export default function Home() {
  const [shortUrl, setShortUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const { short } = await add(formData);
    setShortUrl(short); 
    setLoading(false);
  };

  const handleCopy = async () => {
    console.log("clicked")
    try {
      const fullUrl = `${window.location.origin}/pages/${shortUrl}`;
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <main className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-4 bg-cyan-500 p-4 rounded shadow-xl shadow-cyan-500/50">
        <h1 className="text-xl font-bold text-indigo-600">Url Shortener</h1>
        <p>Url Shortener With Next, Prism, and Supabase</p>
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input type="text" className="rounded p-1 text-slate-700" name="url" placeholder="Input Url" required />
          <button disabled={loading} type="submit" className="bg-cyan-500 rounded border-white p-1 border-2 text-white">{loading ? 'Shortening...' : 'Shorten'}</button>
        </form>
        {shortUrl && ( 
          <div>
            <Link target="_blank" href={`/pages/${shortUrl}`}>Your shortened URL: {shortUrl}</Link>
            <button 
            onClick={handleCopy} 
            className="bg-blue-500 text-white p1 rounded ml-2"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          </div>
        )}
      </div>
    </main>
  );
}
