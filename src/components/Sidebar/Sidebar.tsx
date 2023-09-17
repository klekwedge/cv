// import './Sidebar.scss';

function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src="./assets/images/my-avatar.png" alt="my avatar" width="80"/>
        </figure>

        <div className="info-content">
          <h1 className="name" title="Антонов Андрей">Антонов Андрей</h1>
          <p className="title">Frontend разработчик</p>
        </div>

        <button type='button' className="info_more-btn" data-sidebar-btn>
          <span>Показать контакты</span>
          {/* <ion-icon name="chevron-down"></ion-icon> */}
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"/>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              {/* <ion-icon name="mail-outline"></ion-icon> */}
            </div>

            <div className="contact-info">
              <p className="contact-title">Почта</p>

              <a href="mailto:richard@example.com" className="contact-link">richard@example.com</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
            </div>

            <div className="contact-info">
              <p className="contact-title">Telegram</p>

              <a href="tel:" className="contact-link">8</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              {/* <ion-icon name="location-outline"></ion-icon> */}
            </div>

            <div className="contact-info">
              <p className="contact-title">Локация</p>
              <address>Saint Petersburg</address>
            </div>

          </li>

        </ul>

        <div className="separator"/>

        <ul className="social-list">

          <li className="social-item">
            <a href="/" className="social-link">
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
            </a>
          </li>

          <li className="social-item">
            <a href="/" className="social-link">
              {/* <ion-icon name="logo-twitter"></ion-icon> */}
            </a>
          </li>

          <li className="social-item">
            <a href="/" className="social-link">
              {/* <ion-icon name="logo-instagram"></ion-icon> */}
            </a>
          </li>

        </ul>

      </div>

    </aside>
  );
}

export default Sidebar;
