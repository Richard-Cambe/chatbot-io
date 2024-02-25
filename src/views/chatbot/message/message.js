import logo from '../img/fox.png';
import user from '../img/user.png';
import './index.scss';

export default (test, botImage, time, message) => {
  const imageSrc = botImage || logo;

  return test === 'bot' ? (`
    <section class="user-message">
      <div class="user-message-full">
        <div class="user-info">
          <img src="${imageSrc}" alt="Bot">
          <p>${time}</p>
        </div>
        <div class="user-message-card">
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
          <p>${message}</p>
        </div>
        <div class="user-info">
          <img src="${user}" alt="User">
          <p>${time}</p>
        </div>
      </div>
    </section>
  `);
};
