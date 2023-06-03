const handleClickRegisterButton = async () => {
  // 選択したポケモン情報を取得
  const pokemon = document.getElementById("pokemon_select-register").value;
  const ability = document.getElementById("ability_select-register").value;
  const nature = document.getElementById("nature_select-register").value;
  const item = document.getElementById("item_select-register").value;
  const move1 = document.getElementById("move1_select-register").value;
  const move2 = document.getElementById("move2_select-register").value;
  const move3 = document.getElementById("move3_select-register").value;
  const move4 = document.getElementById("move4_select-register").value;
  const effort_h = document.getElementById("effort_h_input-register").value;
  const effort_a = document.getElementById("effort_a_input-register").value;
  const effort_b = document.getElementById("effort_b_input-register").value;
  const effort_d = document.getElementById("effort_c_input-register").value;
  const effort_s = document.getElementById("effort_d_input-register").value;
  const individual_h = document.getElementById("individual_h_input-register").value;
  const individual_a = document.getElementById("individual_a_input-register").value;
  const individual_b = document.getElementById("individual_b_input-register").value;
  const individual_c = document.getElementById("individual_c_input-register").value;
  const individual_d = document.getElementById("individual_d_input-register").value;
  const individual_s = document.getElementById("individual_s_input-register").value;

  // リクエストデータを作成
  const requestData = {
    pokemon: pokemon,
    ability: ability,
    nature: nature,
    item: item,
    move1: move1,
    move2: move2,
    move3: move3,
    move4: move4,
    effort_h: effort_h,
    effort_a: effort_a,
    effort_b: effort_b,
    effort_d: effort_d,
    effort_s: effort_s,
    individual_h: individual_h,
    individual_a: individual_a,
    individual_b: individual_b,
    individual_c: individual_c,
    individual_d: individual_d,
    individual_s: individual_s,
  };

  const endpoint = "http://localhost:3000/insert-list"; // エンドポイントのURLを指定

  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  })
    .then(response => response.json())
    .then(data => {
      // レスポンスの処理
      console.log(data);
    })
    .catch(error => {
      // エラーハンドリング
      console.error(error);
    });
}

window.onload = () =>{
  // ボタン要素を取得
  const registerButton = document.getElementById("register_pokemon_button");

  registerButton.onclick = async () => {
    await handleClickRegisterButton();
  }
}