"use client";

import Sidebar from '../components/Sidebar';
import '../app/globals.css'; // グローバルCSSを正しいパスでインポート

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Sidebar />
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
