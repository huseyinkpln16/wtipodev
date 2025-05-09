/*   Öneri Kısmı    */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("oneriformu");
    const mesaj = document.getElementById("oneriMesaji");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Sayfanın yukarı zıplamasını engeller
  
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
  
      // Teşekkür mesajını göster
      mesaj.style.display = "block";
  
      // 3 saniye sonra gizle
      setTimeout(() => {
        mesaj.style.display = "none";
      }, 3000);
  
      // Formu temizle
      form.reset();
    });
  });

  /*  Oyun Kısmı  */ 
  window.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById("start-btn");
    const hitBtn = document.getElementById("hit-btn");
    const statusText = document.getElementById("status-text");
  
    let timeoutID;
    let canHit = false;
    let gameRunning = false;
  
    startBtn.addEventListener("click", () => {
        if (gameRunning) return; // ❌ Zaten oynanıyorsa yeniden başlatma
      
        statusText.textContent = "Hazır ol... Rakip saldıracak!";
        hitBtn.disabled = true;
        canHit = false;
        gameRunning = true;
      
        const delay = Math.random() * 2500 + 500; // ✅ 0.5 – 3 saniye arası
        timeoutID = setTimeout(() => {
          statusText.textContent = "ŞİMDİ VUR!";
          hitBtn.disabled = false;
          canHit = true;
      
          const enemyAttackDelay = Math.random() * 250 + 250; // ✅ 0.25 – 0.5 saniye
          setTimeout(() => {
            if (canHit) {
              statusText.textContent = "😵 Geç kaldın! Nakavt oldun!";
              hitBtn.disabled = true;
              gameRunning = false;
            }
          }, enemyAttackDelay);
        }, delay);
      });
    hitBtn.addEventListener("click", () => {
      if (!canHit) {
        statusText.textContent = "❌ Erken vurdun! Dikkat et.";
        clearTimeout(timeoutID);
        gameRunning = false;
        return;
      }
  
      statusText.textContent = "🥊 Harika refleks! Rakibi yendin!";
      hitBtn.disabled = true;
      canHit = false;
      gameRunning = false;
    });
  });
