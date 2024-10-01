"use server";

import { getUsers } from "@/lib/prisma/generated/test1/sql";
import prismaTest1Singleton from "@/lib/prisma/test1/client";
import { User } from "../../types/user";

export const convertWithSingleton = async () => {
  const result = await prismaTest1Singleton.$queryRawTyped(getUsers());
  console.log(result);
  return result.map((e) => {
    return { id: e.id ?? 0, name: e.name ?? "None" } satisfies User;
  });
};
