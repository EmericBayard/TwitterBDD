import { PRISMA } from './config/database/prisma';
import express from 'express';
import  openRoutes  from './routes/public/openRoutes'

const APP = express();


async function main() {
    try {  
        
        APP.listen(3000, () => {
            console.log('✅ : Server is running on port 3000')
            openRoutes(APP);
        })
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

