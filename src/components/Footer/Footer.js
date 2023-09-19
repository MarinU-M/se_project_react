// A component that renders meta info about the app: the copyright and the production year. It consists of basic text.
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        <span>Developed by Marin Umegane-McGuinness</span>
        <span>2023</span>
      </p>
    </footer>
  );
}

export default Footer;
