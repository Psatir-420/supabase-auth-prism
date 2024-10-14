"use client"; 

import { useEffect } from 'react';
import short from "@/app/actions/short";

export default function Page({ params }) {
  useEffect(() => {
    const redirect = async () => {
      const ashort = params.uuid;
      const origin = await short(ashort);
      console.log(origin.originalUrl)
      window.open(origin.originalUrl, '_self');
    };
    redirect();
  }, [params]); // Dependency array to rerun effect if params.short changes

  return (
    <h1>Redirecting...</h1>
  );
}