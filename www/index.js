import fs from "fs";
import http from "http"

// const result = fs.readFileSync('./www/some.txt', 'utf-8')
// fs.writeFileSync('./www/some.txt', result + '\nHello, world!')


// console.log({ result })

// fs.readFile('./www/some.txt', 'utf-8', (err, data) => {
//     console.log({data})
//     fs.writeFile('./www/some.txt', data + '\n some text 2', (err, succ) => console.log("success"));
// });

// fs.mkdir('./www/text-files2', () => {
//     fs.writeFile('./www/text-files2/some.txt', "Hallo", () => console.log("success"))
// })

// fs.unlink('./www/text-files2/some.txt', () => {
//     fs.rmdir('./www/text-files2', () => { })
// })

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    fs.readFile("./www/index.html", "utf-8", (err, data) => {
        res.end(
            data
        );
    })
   
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущено: http://${HOST}:${PORT}`)
})