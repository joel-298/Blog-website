import NextAuth from "next-auth" ; 
import Github from "next-auth/providers/github" ; 
export const { handlers : {GET , POST}, auth , signIn , signOut} = NextAuth({ 
    providers: [
                Github({
                        clientId:process.env.GITHUB_ID ,
                        clinetSecret: process.env.GITHUB_SECRET
                    })
                ],
}) ; 
