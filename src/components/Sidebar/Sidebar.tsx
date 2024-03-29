import './Sidebar.scss';
import { BsLinkedin, BsTelegram, BsGithub } from 'react-icons/bs';
import { IoMailOutline, IoLocationOutline, IoLinkOutline } from 'react-icons/io5';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/img/personal-photo.jpg" alt="my avatar" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Антонов Андрей">
            Антонов Андрей
          </h1>
          <p className="title">Frontend разработчик</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Почта</p>

              <a href="mailto:antonov.andrey.10101@gmail.com" className="contact-link">
                Gmail
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLinkOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Резюме</p>
              <a href="https://drive.google.com/file/d/1k89ThJtqQOLiNZYApYS6vxYHfoD7vKdm/view?usp=sharing" className="contact-link">
                Google Drive
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Локация</p>
              <address>Санкт-Петербург</address>
            </div>
          </li>
        </ul>

        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href="https://t.me/klekwedge" className="social-link">
              <BsTelegram size="22" />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/klekwedge" className="social-link">
              <BsGithub size="22" />
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.linkedin.com/in/klekwedge" className="social-link">
              <BsLinkedin size="22" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
