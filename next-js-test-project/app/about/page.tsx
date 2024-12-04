import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | NextJs App", //это тоже самое что тег --Head-- где можно в в тайтол прописать заголовок приложенеия
};

const About = () => {
  return (
    <div className="page">
      <h1>Select subItem</h1>
    </div>
  );
};

export default About;
