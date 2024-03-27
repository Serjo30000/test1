require('dotenv').config();
const express = require("express");
const sequelize = require("./db");
const {User, Credential} = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const preRedirect = require("./middleware/preRedirect");
const path = require("path");
const bcrypt = require('bcrypt');


const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin.html", preRedirect("ADMIN"));
app.use("/volunteer.html", preRedirect("VOLUNTEER"));

app.use(express.static(path.resolve(__dirname, "static")));
app.use('/api',router);
app.use(errorHandler);

app.get('/test', function(request,response){
    response.send('Hello Test');
});

app.listen(PORT, () => console.log(`Server was started. Port: ${PORT}`));
/*
const start = async () => {
    let connected = false;
    let retryCount = 0;
    const maxRetries = 5;
    
    const connectToDatabase = async () => {
        try {
            await sequelize.authenticate();
            connected = true;
        } catch (error) {
            console.log(error);
            if (retryCount < maxRetries){
                retryCount++;
                setTimeout(connectToDatabase, 2000);
            }
            
        }
    };

    await connectToDatabase();

    if (!connected) {
        process.exit(1);
    }
    
    try{

        await sequelize.sync();
        const server = app.listen(PORT, () => console.log(`Server was started. Port: ${PORT}`));
        function closeApp(){
            db.connection.close().then(x=>{
	        server.close(()=>
	            console.log('Server stop')
	            );
	        }
	    );
        }
        procces.on('SIGTERM',closeApp);
        procces.on('SIGINT',closeApp);
        
    } catch (e){
        console.log(e);
    }
}

start();*/
