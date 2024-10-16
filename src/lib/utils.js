const {default : mongoose} = require("mongoose") ;

// if connections : then do not build new connection  if not then build a new one 
const connection = {} ;

export const connectToDb = async () => {
    try { 
        if(connection.isConnected) {
            console.log("Using existing connection") ;
        }
        const db = await mongoose.connect(process.env.MONGO,{dbName:"next14tutorial"}) ;
        connection.isConnected = db.connections[0].readyState ;  
    } catch(error) {
        console.log(error) ; 
        throw new Error(error) ; 
    }
}