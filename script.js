const fileInput = document.getElementById("fileInput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const output = document.getElementById("output");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Simulación de IA (ficticio por ahora)
      ctx.fillStyle = "black";
      ctx.font = "20px sans-serif";
      ctx.fillText("Ej: 6♥", 50, 50);
      ctx.fillText("Ej: 7♣", 150, 150);
      ctx.beginPath();
      ctx.moveTo(55, 55);
      ctx.lineTo(155, 155);
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.stroke();

      output.innerText = "Sugerencia: Mover el 6 de corazones sobre el 7 de tréboles.";
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

function reiniciar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  output.innerText = "";
  fileInput.value = "";
  document.getElementById("ayuda").style.display = "none";
}

function descargar() {
  const link = document.createElement("a");
  link.download = "solucion.png";
  link.href = canvas.toDataURL();
  link.click();
}

function mostrarAyuda() {
  const ayuda = document.getElementById("ayuda");
  ayuda.style.display = ayuda.style.display === "none" ? "block" : "none";
}

