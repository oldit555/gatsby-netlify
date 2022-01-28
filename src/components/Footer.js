import * as React from "react";


import telegram from "../img/social/telegram.svg";
import youtube from "../img/social/youtube.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4"> 
              </div>
              <div className="column is-4 social">
                <a title="telegram" href="https://t.me/olegdi" target="_blank">
                  <img
                    src={telegram}
                    alt="Telegram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCsG4d7tL554tAJLO9viHmJA" target="_blank">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
