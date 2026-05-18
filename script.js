const target = new Date(2026, 4, 30, 10, 0, 0);

const zeroPad = value => String(value).padStart(2, '0');

function updateCountdown(){

  const now = new Date();

  const diff = target - now;

  if(diff <= 0){
    document.getElementById('cd-days').textContent = '00';
    document.getElementById('cd-hrs').textContent = '00';
    document.getElementById('cd-min').textContent = '00';
    document.getElementById('cd-sec').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hrs = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const min = Math.floor(
    (diff % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const sec = Math.floor(
    (diff % (1000 * 60)) / 1000
  );

  document.getElementById('cd-days').textContent =
    zeroPad(days);

  document.getElementById('cd-hrs').textContent =
    zeroPad(hrs);

  document.getElementById('cd-min').textContent =
    zeroPad(min);

  document.getElementById('cd-sec').textContent =
    zeroPad(sec);
}

updateCountdown();

setInterval(updateCountdown, 1000);