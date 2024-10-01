import { User } from "../types/user";
import Link from "next/link";

export default function Body({
  title,
  users,
  link,
}: {
  title: string;
  users: User[];
  link: { href: string; name: string };
}) {
  return (
    <article className="m-5">
      <h1>{title}</h1>
      <ul>
        {users.map((res) => {
          return (
            <li key={res.id}>
              id: {res.id}, name: {res.name}
            </li>
          );
        })}
      </ul>
      <Link href={link.href}>{link.name}</Link>
    </article>
  );
}
