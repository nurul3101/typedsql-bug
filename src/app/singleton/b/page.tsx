"use client";

import { convertWithSingleton } from "../../../actions/convert/singleton";
import Body from "../../../components/body";
import { User } from "../../../types/user";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const pathname = usePathname();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await convertWithSingleton();
      setUsers(data);
    };
    fetchData();
  }, []);
  return (
    <Body
      title={pathname}
      users={users}
      link={{ href: "/singleton/a", name: "Singleton A" }}
    />
  );
}
