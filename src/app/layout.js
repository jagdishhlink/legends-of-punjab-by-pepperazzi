import "./globals.css";

export const metadata = {
  title: "Legends Of Punjab by Pepperazzi | Authentic Punjabi Restaurant Gulbai Tekra Ahmedabad",
  description: "Experience authentic Punjabi cuisine at Legends Of Punjab by Pepperazzi on 1st Street, Gulbai Tekra. Fresh tandoor dishes, traditional curries & warm hospitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
