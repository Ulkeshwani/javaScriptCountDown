const countDown = () => {
  const countDate = new Date("May 17, 2021 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const gapBetween = countDate - currentDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gapBetween / day);
  const textHour = Math.floor((gapBetween % day) / hour);
  const textMinute = Math.floor((gapBetween % hour) / minute);
  const textSecond = Math.floor((gapBetween % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countDown, 1000);
