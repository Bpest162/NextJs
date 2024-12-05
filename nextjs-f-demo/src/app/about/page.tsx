"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p-2 rounded-md mb-[30px]"
      >
        Go Home Янки
      </button>
    </div>
  );
};

export default About;
