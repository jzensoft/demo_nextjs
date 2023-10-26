import Image from "next/image";

interface Props {}

export default async function About(props: Props) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <p>
              <Image src={"/dog.jpg"} alt="" width={50}  height={50}/>
              {user.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
