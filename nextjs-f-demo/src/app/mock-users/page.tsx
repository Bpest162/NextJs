import { revalidatePath } from "next/cache";

type MockUser = {
  id: number;
  name: string;
};

const MockUsers = async () => {
  /* await new Promise((resolve) => setTimeout(resolve, 2000)); */
  const res = await fetch("https://6751f4e2d1983b9597b4ef8a.mockapi.io/users");
  const users = await res.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const resp = await fetch(
      "https://6751f4e2d1983b9597b4ef8a.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await resp.json();
    revalidatePath("/mock=users")
    console.log(newUser);
  }

  //console.log(users);

  return (
    <div className="py-10">
      <form action={addUser} className="mb-4 ml-5">
        <input
          type="text"
          name="name"
          required
          className="border p-2 mr-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add user
        </button>
      </form>
      <div className="grid grid-cols-4 space-y-4 py-10 gap-2">
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {" "}
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockUsers;
