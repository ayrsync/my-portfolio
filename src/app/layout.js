import "../app/assets/css/tailwind.css";
import "../app/assets/css/materialdesignicons.min.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title:
    "Freelance Web Developer & SEO Expert | High-Performance Websites That Generate Leads",
  description:
    "I help businesses grow with fast, SEO-optimized websites and performance-driven digital marketing. Specializing in modern web development, technical SEO, speed optimization, and lead generation strategies.",
  keywords: [
    "freelance web developer",
    "SEO expert",
    "website developer for business",
    "digital marketing freelancer",
    "technical SEO",
    "website speed optimization",
    "lead generation specialist",
  ],
  authors: [{ name: "AyrSync Solutions" }],
  creator: "AyrSync Solutions",
  openGraph: {
    title: "Web Development, SEO & Digital Marketing Freelancer",
    description:
      "Get a fast, modern website that ranks on Google and converts visitors into customers.",
    url: "https://yourdomain.com",
    siteName: "AyrSync Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer & SEO Expert",
    description:
      "Helping businesses grow with high-performance websites and SEO strategies.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900 `}
      >
        {children}
      </body>
    </html>
  );
}
