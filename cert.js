function handleCert(data) {
  document.getElementById("result").innerText =
    data.error ? "❌ " + data.error : "✅ " + data.arabic_name + " - " + data.status;
}

const params = new URLSearchParams(window.location.search);
const token = params.get("token");

if (!token) {
  document.getElementById("result").innerText = "❌ لم يتم العثور على التوكن في الرابط";
} else {
  const url = `https://script.google.com/macros/s/AKfycbyR3kY-Fzf6Fba2GzcqQmTUoOMDpp7yGP4f3np2FrYUzMyzALzTzHo-XPbbehIVs9WUCA/exec?token=${token}&callback=handleCert`;

  let s = document.createElement("script");
  s.src = url; // يبقى التوكن كما هو
  document.body.appendChild(s);
}
