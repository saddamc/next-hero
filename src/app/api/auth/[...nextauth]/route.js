import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true, placeholder: "Your email"},
                password: { label: "Password", type: "password", required: true, placeholder: "Enter Password"},
            },
            async authorize (credentials){
                const {email, password} = credentials;
                if(!credentials) {
                    return null;
                }
                    if(email) {
                        const currentUser = users.find((user) => user.email === email)
                        console.log(currentUser)
                        if(currentUser) {
                            if(currentUser.password === password) {
                                return currentUser;
                            }
                        }
                    }
                    return null;
            }
            
        })
    ],
}

const handler = NextAuth(authOptions)

const users = [
    {
      id: 1,
      name: "Test User 1",
      email: "m@gmail.com",  // Gmail format
      password: "aaa@aaa"    // Simple password
    },
    {
      id: 2,
      name: "Test User 2",
      email: "t@gmail.com",
      password: "bbb@bbb"
    },
    {
      id: 3,
      name: "Test User 3",
      email: "d@gmail.com",
      password: "ccc@ccc"
    },
    {
      id: 4,
      name: "Test User 4",
      email: "s@gmail.com",
      password: "ddd@ddd"
    },
    {
      id: 5,
      name: "Test User 5",
      email: "k@gmail.com",
      password: "eee@eee"
    }
  ];

export { handler as GET, handler as POST };

