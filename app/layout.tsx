import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeetingCost – Calculate Meeting Costs in Real-Time",
  description: "Browser extension that shows the running cost of your current meeting based on attendee salaries and duration. For engineering managers, founders, and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="58fff267-0a1c-4862-b003-436a64c47588"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
