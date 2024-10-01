import { PrismaClient } from "@/lib/prisma/generated/test1";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prismaClientTest1Singleton =
  globalThis.prismaGlobal ?? prismaClientSingleton();

export default prismaClientTest1Singleton;

if (process.env.NODE_ENV !== "production")
  globalThis.prismaGlobal = prismaClientTest1Singleton;
