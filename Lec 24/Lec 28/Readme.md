This Lecture is about Prism-ORM. 
Postgress  : Pg lib -> Connect server to DB . Asks to Build a QUERY To add data to DB. 
ORM : Object Relational Mapping .
ORM : Midle layer between Server and DB. 
ORM : ORM get the class from server , runs sql to add and fetch data from db, returns a json file that is then sent to cleint. 

Prisma :  Vercetile works with different db with no issues. Ex:<mysql><postgress><>
DB Flip : change From 1 db to other with no issues and very less efforts and changes. 

Commands : 
npm i prisma 
npx
 npx prisma migrate dev --name "Creative user table"

Your database is now in sync with your schema.

Running generate... (Use --skip-generate to skip the generators)

✔ Generated Prisma Client (v6.16.1) to ./generated/prisma in 76ms