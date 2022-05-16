import { PrismaClient } from '@prisma/client'

export const PRISMA = new PrismaClient();

export async function createUser(profilePic:string, bio:string, email:string,
     password:string, username:string,role:string) {
    const newUser = await PRISMA.user.create({
        data: {
            profilePic: profilePic,
            bio: bio,
            email: email,
            password: password,
            username: username,
            role:role,
            dob: new Date(),
            lastUpdate: new Date(),
        },
    })
}
