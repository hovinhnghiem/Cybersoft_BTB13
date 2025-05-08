// Hàm tính điểm thi
function calculateScore() {
  let nameHS = document.getElementById("nameHS").value;
  let score1 = parseFloat(document.getElementById("score1").value);
  let score2 = parseFloat(document.getElementById("score2").value);
  let score3 = parseFloat(document.getElementById("score3").value);
  let area = document.getElementById("area").value;
  let category = parseFloat(document.getElementById("category").value);
  let cutoff = parseFloat(document.getElementById("cutoff").value);
  if (isNaN(score1) || score1 <= 10) {
    document.getElementById("resultScore").innerHTML = "Vui lòng nhập đúng điểm môn 1 (Không quá 10 điểm).";
    return;
  }
  if (isNaN(score2) || score2 <= 10) {
    document.getElementById("resultScore").innerHTML = "Vui lòng nhập đúng điểm môn 2 (Không quá 10 điểm).";
    return;
  }
  if (isNaN(score3) || score3 <= 10) {
    document.getElementById("resultScore").innerHTML = "Vui lòng nhập đúng điểm môn 3 (Không quá 10 điểm).";
    return;
  }
  if (isNaN(cutoff) || cutoff <= 30) {
    document.getElementById("resultScore").innerHTML = "Vui lòng nhập đúng điểm chuẩn (Không quá 30 điểm).";
    return;
  }
  let areaPoint = 0;
  switch(area) {
    case "A": areaPoint = 2; break;
    case "B": areaPoint = 1; break;
    case "C": areaPoint = 0.5; break;
    case "X": areaPoint = 0; break;
  }

  let categoryPoint = 0;
  switch (category) {
    case 1: categoryPoint = 2.5; break;
    case 2: categoryPoint = 1.5; break;
    case 3: categoryPoint = 1; break;
    case 0: categoryPoint = 0; break;
  }


  // Tính tổng điểm
  let totalScore = score1 + score2 + score3 + areaPoint + categoryPoint;
  console.log(totalScore);
  // Kiểm tra nếu thí sinh đậu hay rớt
  let resultScore = totalScore >= cutoff ? "Đậu" : "Rớt";

  // Hiển thị kết quả
  document.getElementById("resultScore").innerHTML = `Thí sinh ${nameHS} tổng điểm: ${totalScore}. Kết quả: ${resultScore}`;
}

// Hàm tính tiền Điện
function calculateElectricityBill() {
  let name = document.getElementById("name").value;
  let kw = parseFloat(document.getElementById("kw").value);
  if (isNaN(kw) || kw < 0) {
    document.getElementById("resultScore").innerHTML = "Vui lòng nhập số điểm hợp lệ.";
    return;
  }

  let bill = 0;

  // Tính tiền điện theo các mức giá
  if (kw <= 50) {
    bill = kw * 500;
  } else if (kw <= 100) {
    bill = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 150) {
    bill = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else {
    bill = 50 * 500 + 50 * 650 + 50 * 850 + (kw - 150) * 1100;
  }
  document.getElementById("resultTD").innerHTML = `Chào ${name}, số tiền điện bạn phải trả là: ${bill.toLocaleString()} VND`;
}
