const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

//データベース接続設定
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testapi_database",
});

//一覧取得API
app.get("/get-list", (req, res) => {
  connection.query("SELECT * FROM testapi_table", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

//POSTリクエストを処理するエンドポイント
//pstメソッドは第一引数：エンドポイント、第二引数に入れた関数の第一：req、第二：res
app.post(
  "/insert-list",
  (req, res) => {
    const { name, type } = req.body;

    //データベースに挿入するクエリ
    //テンプレートリテラルわからなくなったらggr
    const query = `INSERT INTO testapi_table (id, name, type) VALUES (null, '${name}', '${type}')`;

    //クエリ実行
    connection.query(query, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "データ登録中にエラー" });
      } else {
        res.json({ message: "データが正常に登録" });
      }
    });
  } //第二引数ここまで
);

//サーバ起動
app.listen(3000, () => {
  console.log("サーバがポート3000で起動");
});

//async,await今後使うからggr