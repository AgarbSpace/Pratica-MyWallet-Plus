export default function errorHandlerMiddleware(error, req, res, next){
    
    if(error.type === "Conflict"){
        return res.sendStatus(409);
    }

    if(error.type === "Not_Found"){
        return res.sendStatus(404);
    }

    return res.sendStatus(500);
}