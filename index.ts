import { PRISMA, createUser }from './config/database/prisma';


async function main() {
    try {  
        await createUser('https://img', "je m'apelle Emeric Bayard", 
        "Emeric.Mush@allo.come",
        "Doubidoubi123", "Emusk", "Superintendant");
        console.log("👮‍♂️ : Mon utilisateur à bien été crée ! "+ new Date())
    }
    catch(error:any) {
        throw new Error(error);
    }
    finally{
        async () => {
            await PRISMA.$disconnect();
        }  
    }
}


main()

