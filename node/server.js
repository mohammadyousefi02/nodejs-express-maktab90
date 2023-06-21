import http from "http"

const server = http.createServer((req, res) => {
    switch(req.url) {
        case "/users":
            res.write("userss!!!!!!!")
            res.end()
            break;
        case "/products":
            res.write("products")
            res.end()
            break;
        default:
            res.write("eshtebah oomadi")
            res.end()
    }  
})

server.listen(1999, "localhost", () => {
    console.log("server is running")
})