This is a reproduction based on instructions from this comment: https://github.com/prisma/prisma/discussions/25106#discussioncomment-10776069

---

1. Install Dependencies: `npm install`
2. Add a `.env.development.local` file with database URL:

```
DATABASE_URL_TEST1="postgresql://test1:test1password@localhost:5432/test-db?schema=test1"
```

3. Run command: `npm run prisma:test1:migrate`
4. Run command: `> npm run prisma:test1:generate`
5. Start Server: `npm run dev`
6. Go to URL: `http://localhost:3000/singleton/a` - No Error
7. Go to URL: `http://localhost:3000/singleton/b` - Should see the Error

```
Argument `query` is missing.
    at Dn (./src/lib/prisma/generated/test1/runtime/library.js:5964:11)
    at Mn.handleRequestError (./src/lib/prisma/generated/test1/runtime/library.js:6762:13)
    at Mn.handleAndLogRequestError (./src/lib/prisma/generated/test1/runtime/library.js:6749:18)
    at Mn.request (./src/lib/prisma/generated/test1/runtime/library.js:6729:18)
    at async l (./src/lib/prisma/generated/test1/runtime/library.js:7397:25)
    at async $$ACTION_0 (./src/actions/convert/singleton.ts:18:20)
digest: "1148600400"
```
