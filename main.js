// Hàm tính điểm thi
function calculateScore() {
  let nameHS = document.getElementById("nameHS").value;
  let score1 = parseFloat(document.getElementById("score1").value);
  let score2 = parseFloat(document.getElementById("score2").value);
  let score3 = parseFloat(document.getElementById("score3").value);
  let area = document.getElementById("area").value;
  let category = parseFloat(document.getElementById("category").value);
  let cutoff = parseFloat(document.getElementById("cutoff").value);
  if (isNaN(score1) || score1 >= 10) {
    document.getElementById("resultScore").innerHTML =
      "Vui lòng nhập đúng điểm môn 1 (Không quá 10 điểm).";
    return;
  }
  if (isNaN(score2) || score2 >= 10) {
    document.getElementById("resultScore").innerHTML =
      "Vui lòng nhập đúng điểm môn 2 (Không quá 10 điểm).";
    return;
  }
  if (isNaN(score3) || score3 >= 10) {
    document.getElementById("resultScore").innerHTML =
      "Vui lòng nhập đúng điểm môn 3 (Không quá 10 điểm).";
    return;
  }
  if (isNaN(cutoff) || cutoff >= 30) {
    document.getElementById("resultScore").innerHTML =
      "Vui lòng nhập đúng điểm chuẩn (Không quá 30 điểm).";
    return;
  }
  let areaPoint = 0;
  switch (area) {
    case "A":
      areaPoint = 2;
      break;
    case "B":
      areaPoint = 1;
      break;
    case "C":
      areaPoint = 0.5;
      break;
    case "X":
      areaPoint = 0;
      break;
  }

  let categoryPoint = 0;
  switch (category) {
    case 1:
      categoryPoint = 2.5;
      break;
    case 2:
      categoryPoint = 1.5;
      break;
    case 3:
      categoryPoint = 1;
      break;
    case 0:
      categoryPoint = 0;
      break;
  }

  // Tính tổng điểm
  let totalScore = score1 + score2 + score3 + areaPoint + categoryPoint;
  // Kiểm tra nếu thí sinh đậu hay rớt
  let resultScore = totalScore >= cutoff ? "Đậu" : "Rớt";

  // Hiển thị kết quả
  document.getElementById(
    "resultScore"
  ).innerHTML = `Thí sinh ${nameHS} tổng điểm: ${totalScore}. Kết quả: ${resultScore}`;
}

// Hàm tính tiền Điện
function calculateElectricityBill() {
  let name = document.getElementById("name").value;
  let kw = parseFloat(document.getElementById("kw").value);
  if (isNaN(kw) || kw < 0) {
    document.getElementById("resultScore").innerHTML =
      "Vui lòng nhập số điểm hợp lệ.";
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
  document.getElementById(
    "resultTD"
  ).innerHTML = `Chào ${name}, số tiền điện bạn phải trả là: ${bill.toLocaleString()} VND`;
}

function calculateTax() {
  let name = document.getElementById("name").value;
  let income = document.getElementById("income").value * 1;
  let dependents = document.getElementById("dependents").value * 1;
  const taxableIncome = income - 4 - dependents * 1.6;
  if (taxableIncome <= 0) {
    document.getElementById("resultText").innerHTML =
      "Thu nhập không đủ để tính thuế.";
    return;
  }
  let taxRate = 0;
  let taxAmount = 0;

  if (taxableIncome <= 60) {
    taxRate = 5;
    taxAmount = taxableIncome * 0.05;
  } else if (taxableIncome <= 120) {
    taxRate = 10;
    taxAmount = taxableIncome * 0.1;
  } else if (taxableIncome <= 210) {
    taxRate = 15;
    taxAmount = taxableIncome * 0.15;
  } else if (taxableIncome <= 384) {
    taxRate = 20;
    taxAmount = taxableIncome * 0.2;
  } else if (taxableIncome <= 624) {
    taxRate = 25;
    taxAmount = taxableIncome * 0.25;
  } else if (taxableIncome <= 960) {
    taxRate = 30;
    taxAmount = taxableIncome * 0.3;
  } else {
    taxRate = 35;
    taxAmount = taxableIncome * 0.35;
  }

  // Hiển thị kết quả
  document.getElementById(
    "resultText"
  ).innerHTML = `Thu nhập chịu thuế: ${taxableIncome} triệu<br>
    Thuế suất: ${taxRate}%<br>
    Thuế phải trả: ${taxAmount} triệu`;
}

// Hàm để ẩn hoặc hiển thị các trường cho khách hàng doanh nghiệp
function toggleFields() {
  const customerType = document.getElementById('customerType').value;
  const connections = document.getElementById('connections');

  // Xét điểu kiện để on or off ô nhập số kết nối
  if (customerType === 'business') {
    connections.disabled = false; // Bỏ disable cho ô số kết nối
  } else {
    connections.disabled = true; // Disable ô số kết nối khi chọn nhà dân
  }
}

// Hàm tính tiền cáp
function calculateCharge() {
  const customerType = document.getElementById('customerType').value;
  const connections = parseInt(document.getElementById('connections').value);
  const channels = parseInt(document.getElementById('channels').value);
  let totalCharge = 0;

  if (customerType === 'household') {
    // Tính tiền cho khách hàng nhà dân
    totalCharge = 4.5 + 20.5 + (channels * 7.5);
  } else if (customerType === 'business') {
    // Tính tiền cho khách hàng doanh nghiệp
    let connectionCharge = 0;
    let prossingBSNFee = 15;
    // Nếu kết nối lớn hơn 10, tính thêm phí cho kết nối từ 11 trở đi
    if (connections > 10) {
      connectionCharge = prossingBSNFee + 75 + (connections - 10) * 5; // 5$ cho mỗi kết nối từ thứ 11 trở đi
    } else  {
      connectionCharge = prossingBSNFee + 75;
    }
    // Tính tổng tiền (cộng phí kênh cao cấp)
    totalCharge = connectionCharge + (channels * 50);
  }
  document.getElementById('totalCharge').innerText = `Tổng tiền cáp: ${totalCharge} $`;
}
