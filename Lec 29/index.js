const {PrismaClient} = require("./generated/prisma"); 
let prisma = new PrismaClient(); 

async function addUser(email , name) {
    const newUeser = await prisma.user.create({
    data :{
        email : email, 
        name : name
    }
    })
    return "User added"
}


addUser("prabhgun@gamil.com", "Prabhgun")
.then((data) => console.log(data) )
.catch((e)=>console.log(e))


async function getUser(email) {
    let user = await prisma.user.findUnique({
        where : {
            email  : email
        }
    })
    return user;
}
getUser("Prabhgun@2004")
.then((data) => console.log(data))


const updateUser = await prisma.user.update({
    where : {
        email : 'Prabhgun@gmail.com', 
    }, 
    data : {
        name : 'Prabhgun' ,
    },    
})

const deleteUser = await prisma.user.delete({
    where  : {
        email : 'Prabhgun@2004', 
    }, 
})



addUser("vani@gamil.com", "vani")
.then((data) => console.log(data) )
.catch((e)=>console.log(e))

async function main(){
    let includePosts : boolean = false 
    let user: Prisma.UserCreateInput

    if(includePosts) {
        user ={
            
            userId : userId, 
            body : body
        }
    }
}