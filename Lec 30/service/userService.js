
const express =require("express"); 
const app = express() ;

app.use(express.json);
app.use(express.urlencoded({extended:true}))

app.use("/api/user", )
app.listen(3444, () => {
    console.log("Server Started On 3444"); 
})
class User {
   static  async addUser(email, name) {
        const newUser = await prisma.user.create({
            data :{

            }
        })
    }
}
 
