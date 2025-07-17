import prisma from "../../prisma/client";

// ambil semua post 

export async function getPost(){
    try{
        // get all post 
        const post = await prisma.post.findMany({orderBy : {id:'desc'}});

        // return
        return {
            succes : true,
            message : "List data post",
            data : post
        };
    }
    catch(e :unknown){
        console.error(`Error getting post ${e}`);
    }
}