import { PRISMA } from '../config/database/prisma';


export async function createUserPrisma() {
    try {
        PRISMA.user.create({
            data: {
                profilePic: 'https://www.prisma.com/',
                bio: 'Je suis une théière',
                email: 'theapot.com',
                password: 'theatheathea',
                username: 'thea234',
                role: 'theamaster',
                dob: new Date(),
                lastUpdate: new Date(),
            },
        })
    }
    catch(error:any) {
        throw new Error(error)
    } 
}

