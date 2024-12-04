import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60
    }
  });

  if(!response.ok) throw new Error("Error fetch posts!")

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | NextJs App", //это тоже самое что тег --Head-- где можно в в тайтол прописать заголовок приложенеия
};

const Blog = async () => {
  const posts = await getData();
  return (
    <div className="page">
      <h1>Blog Page</h1>

      <ul className="list">
        {posts.map((post: any) => (
          <li key={post.id} className="listItem">
            <Link href={`/blog/${post.id}`}>
              {post.id}
              {"   "} {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
