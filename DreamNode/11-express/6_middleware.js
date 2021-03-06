import express, { Router } from "express";
import morgan from "morgan";
import postRouter from "./5_routers/post.js";
import userRouter from "./5_routers/user.js";

const app = express();
const PORT = 8080;
const logger = morgan("dev");
app.use(logger);
//
//
//

/*๐ ์ ์ฉํ ๋ฏธ๋ค์จ์ด ๐*/
// 1๏ธโฃ
app.use(express.json()); // REST API -> Body
// 2๏ธโฃ
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body

// 3๏ธโฃ
const options = {
  dotfiles: "ignore", // ์จ๊ฒจ์งํ์ผ ๋ฌด์
  etag: false,
  index: false,
  maxAge: "1d", // ์บ์ ์๋ช
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-rimestamp", Date.now()); // ํค๋์ ์ถ๊ฐ๋ฐ์ดํฐ ๋ณด๋ด๊ธฐ
  },
};
app.use(express.static("public", options)); // ์ด๋ฐ์์ผ๋ก ์ฌ์ฉํ๋ฉด "public"์์ ์๋ ๋ชจ๋  ๋ฆฌ์์ค์ ์ ๊ทผ๊ฐ๋ฅ
// options๋ ์ค ์ ์์, ์์ธํ๊ฑด express.static()๋ฌธ์ ์ฐธ๊ณ ํ์
//
//
//

// 4๏ธโฃ
// ์๋ฒ์ ํด๋ผ์ด์ธํธ์ ip๊ฐ ๊ฐ์ผ๋ฉด ๋ฐ์ดํฐ๋ฅผ ์์์ด ์ฃผ๊ณ ๋ฐ์ ์ ์์ง๋ง ๋ค๋ฅผ ๊ฒฝ์ฐ ๋ฐ์ดํฐ๋ฅผ ๋ฌธ์ ์์ด ์ฃผ๊ณ  ๋ฐ๊ธฐ ์ํด์๋
// ๋ค์๊ณผ ๊ฐ์ด ํค๋์ ํ์ํด์ฃผ์ด์ผ ํฉ๋๋ค.
// ๐ฉ ์ด ์์์ ๋ฒ๊ฑฐ๋ก์ด๋ฐ ๋คํํ ์ ์ฉํ ๋ฏธ๋ค์จ์ด๊ฐ ์์ต๋๋ค.
//
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, DELETE",
//   );
//   next();
// });
//
// โจ ๋ฐ๋ก "cors" ๋ฏธ๋ค์จ์ด๋ฅผ ์ด์ฉ!
import cors from "cors";
//app.use(cors()); // ์ด๋ ๊ฒ ์ฐ๋ฉด ๋ชจ๋  ip์์ ํ์ฉ๋๋ฏ๋ก..
app.use(
  cors({
    origin: ["http://127.0.0.1:5500"], // ์ด๋ฐ์์ผ๋ก ip ์ง์  ๊ฐ๋ฅ
    optionsSuccessStatus: 200, // 200์ผ๋ก ์๋์ผ๋ก ์๋ตํ๊ฒํจ
    credentials: true, // Access-Control-Allow-Credentials: true ์ ๋์ผ, ํ ํฐ์ด๋ ์ฌ์ฉ์์ ๋ณด ์ถ๊ฐ๋ฅผ ํ์ฉํ๋ ๊ธฐ๋ฅ
  }),
);

app.use("/posts", postRouter);
app.use("/uers", userRouter);
app.get("/", (req, res) => {
  res.send("HALO!");
});

app.listen(PORT, () => console.log(`connect http://localhost:${PORT}`));
