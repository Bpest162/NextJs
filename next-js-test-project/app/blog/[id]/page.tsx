import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getData(params.id);

  return {
    title: post.title,
  };
}

const Post = async ({ params }: Props) => {
  const post = await getData(params.id);
  return (
    <div className="container">
      <h2 className="title">Post {post.id}</h2>
      <h3 className="title">{post.title}</h3>
      <p className="text">{post.body}</p>
    </div>
  );
};

export default Post;
