const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Letter to the Dean</title>
  </head>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600&display=swap');
      body{
          font-family: Poppins;
      }
      h5,td,h4{
        margin: 10px auto;
        padding: 0px;
        
      }
    </style>
  <body>
    <h5>To,<br>The Dean<br>IIT, BOMBAY</h5>
    <br>
    <h5>27<sup>th</sup> May, 2021</h5>
    <br>
    <h3 style="text-align:center">SUBJECT : Devsnest 30-day Code Camp</h3>
    <table>
      <tr>
        <td style="text-align:justify">
          Respected Sir,<br> This letter is to inform you about the 30-Day code camp held at the University
          Devsnest server on Discord. Devsnest is an online community of coders that promotes the spirit of 
          peer learning. I recommend you check it out and promote it within the universit so that all the students
          can benefit from this community as well as contribute towards the betterment and growth of the IT industry in India.
          </td>
      </tr>
  </table>
   <p> Please find the link to the server below and join us<p>
    <br>
    <a href="https://discord.gg/rBhU3yJ2" alt="Discord link" style="text-decoration:none; color:blue; border:1px solid blue; border-radius:25px; padding:10px 20px; margin:30px auto; cursor:pointer">Discord Server</a>
    <br>
  <h4>
    Regards,<br>Kirmada<br>HTML ka BHAKT</h4>
    
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});