import { createClient } from '@supabase/supabase-js';
import "./globals.css";

export default   
 function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}