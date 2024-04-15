interface OmikuziListTypes {
  大吉: string;
  吉: string;
  中吉: string;
  小吉: string;
  末吉: string;
  凶: string;
  大凶: string;
}
const pickUpOmikuziList = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
const omikuziList = {
  大吉: "大吉です",
  吉: "吉です",
  中吉: "中吉です",
  小吉: "小吉です",
  末吉: "末吉です",
  凶: "凶です",
  大凶: "大凶です",
} satisfies OmikuziListTypes;

function omikuzi() {
  const random = Math.floor(Math.random() * pickUpOmikuziList.length);
  const pickedOmikuzi = pickUpOmikuziList[random] as keyof OmikuziListTypes;
  console.log(`${omikuziList[pickedOmikuzi]} `);
}
omikuzi();
