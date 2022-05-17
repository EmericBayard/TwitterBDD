import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function createUserPrisma() {
    try {
        const user = await prisma.user.create({
            data: {
                profilePic: 'hss',
                bio: 'Je suis une théière',
                email: 'theapot.com',
                password: 'theatheathea',
                username: 'thea234',
                role: 'theamaster',
                dob: new Date(),
                lastUpdate: new Date(),
                createdAt: new Date()
            },
        })
    }
    catch(error:any) {
        console.log(error)
        throw new Error(error)
    } 
}

export async function getUserPrisma() {
    let users: any[] = [];
    try {
        users = await prisma.user.findMany()
    }
    catch(error:any) {
        console.log(error)
        throw new Error(error)
    } finally {
        return users
    }
}