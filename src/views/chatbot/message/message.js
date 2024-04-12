import './index.scss';

export default (test, botImage, colorCode, name, time, day, message) => {
  const imageSrc = botImage;

  return test === 'bot' ? (`
    <section class="user-message">
      <div class="user-message-full">
        <div class="user-info">
          <img src="${imageSrc}" alt="Bot">
          <p class="day-time"><span class="message-day">${day}</span>${time}</p>
        </div>
        <div class="user-message-card">
          <b><p class="underline-name" style="text-decoration-color:${colorCode};">${name}</p></b>
          <p>${message}</p>
        </div>
      </div>
      <div class="user-messsage-empty"></div>
    </section>
  `) : (`
    <section class="user-message">
      <div class="user-messsage-empty"></div>
      <div class="user-message-full">
        <div class="user-message-card">
          <b><p class="underline-name" style="text-decoration-color:${colorCode};">${name}</p></b>
          <p>${message}</p>
        </div>
        <div class="user-info">
          <img src="http://localhost:81/user.png" alt="User">
          <p class="day-time"><span class="message-day">${day}</span>${time}</p>
        </div>
      </div>
    </section>
  `);
};
