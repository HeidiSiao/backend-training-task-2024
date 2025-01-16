// 題目 - 樂呵呵健身房
// 樂呵呵健身房目前有 8 位會員
const members = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Evan",
  "Fiona",
  "George",
  "Hannah",
];

// 第一階段：新增課程購買記錄（優惠定價）
// 撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：
// 購買數量 / 單價 (每堂課)
// 1-10 堂 / 1500 元
// 11-20 堂 / 1300 元
// 21 堂以上 / 1100 元

let purchaseRecords = [];

const unitPrice = {
  planA: 1500,
  planB: 1300,
  planC: 1100,
};

const addPurchaseRecord = (name, courses) => {
  if (!name || typeof courses === "string" || !courses) {
    console.log("輸入錯誤，請輸入有效的會員名稱和課程數量");
    return;
  }

  const planA = courses <= 10;
  const planB = courses < 20;
  const planC = courses >= 21;

  let plan = planA ? "planA" : planB ? "planB" : "planC";

  let totalPrice = unitPrice[plan] * courses;

  console.log(
    `新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalPrice} 元`
  );

  purchaseRecords.push({
    name,
    courses,
    unitPrice: unitPrice[plan],
    totalPrice,
  });
};

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");

// 記錄內容：
// 會員名稱 (name)：字串
// 購買課程數量 (courses)：數字
// 課程單價（自動計算）
// 總金額（courses × 單價）

// 功能要求：
// 使用陣列 purchaseRecords 儲存每筆記錄。
// 如果輸入無效（如名稱為空或數值不正確），提示輸入錯誤，並不儲存該記錄。
// 成功新增後，印出「新增購買記錄成功！會員 [會員名稱] 購買 [數量] 堂課，總金額為 [金額] 元。」
// 舉例：
// addPurchaseRecord("Alice", 4); >> 印出 console.log 文字為 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
// addPurchaseRecord("Bob", 12); >> 印出 console.log 文字為 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
// addPurchaseRecord("Charlie", 25); >> 印出 console.log 文字為 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
// addPurchaseRecord("Hannah", 50); >> 印出 console.log 文字為 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
// addPurchaseRecord("名稱", "課程數量"); >> 印出 console.log 文字為 輸入錯誤，請輸入有效的會員名稱和課程數量。

// 第二階段：計算目前的總營業額
// 新增函式 calculateTotalPrice，計算目前的總營業額為多少。
// 印出 console.log 文字為 目前總營業額為 ${totalPrice} 元

let totalPrice = 0;

// 不需要返回新陣列不要考慮 map 僅執行計算使用用forEach
const calculateTotalPrice = () => {
  purchaseRecords.forEach((item) => {
    totalPrice += item.totalPrice;
  });
  console.log(`目前總營業額為 ${totalPrice} 元`);
};

calculateTotalPrice();

// 第三階段：篩選出還沒有購課的會員
// 新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出

const filterNoPurchaseMember = () => {
  //先列出有購買的人
  const hasRecord = purchaseRecords.map((item) => item.name);
  console.log(`已購買課程的會員有：${hasRecord}`);

  //從 members 裡篩選「不包含在hasRecord」的人
  const noRecord = members.filter((member) => !hasRecord.includes(member));

  console.log(`未購買課程的會員有：${noRecord}`);
};

filterNoPurchaseMember();
// 印出 console.log 文字為 未購買課程的會員有：.......
