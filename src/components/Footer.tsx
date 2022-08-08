import './Footer.css';

import Strife from '../assets/Strife.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="navs">
                <div className="copyright-nav">
                    <img src={Strife} alt="strife-logo" className="strife-logo" />
                    <div className="footer-title">Strife Client</div>
                    <div className="footer-copyright">Copyright &copy; 2021 Strife Client | All Rights Reserved</div>
                    <div className="footer-copyright">made with ❤ by dingo, aamber and submaryne</div>
                    <ul>
                        <li><a href="https://discord.com/invite/UcacAKJQYs" className="link">Discord</a></li>
                        <li><a href="/tos" className="link">Terms Of Service</a></li>
                        <li><a href="/privacy" className="link">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            {/* <div className="flex-nav">
            <div className="left-nav footer-nav">
                <div className="footer-title">Discord</div>
                <div className="footer-subtitle">Join our amazing discord community.</div>
                <iframe
                    title="Discord Embed"
                    src="https://canary.discord.com/widget?id=884855307468169226&theme=dark" 
                    width={"100%"}
                    height={500/2}
                    allowTransparency={true}
                    frameBorder={0}
                    className="discord"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                </iframe>
            </div>
            <div className="right-nav footer-nav">
                <div className="footer-links">
                    <div className="footer-title">Links</div>
                    <div className="footer-subtitle">Check them out.</div>
                    <ul>
                        <li><a href="https://discord.com/invite/UcacAKJQYs" className="link">Discord</a></li>
                        <li><a href="/tos" className="link">Terms Of Service</a></li>
                        <li><a href="/privacy" className="link">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            </div> */}
        </div>
    )
}

export default Footer
