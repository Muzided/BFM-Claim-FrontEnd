import Logo from '../assets/images/logo.png';
import Telegram from '../assets/images/icons/telegram.svg';
import Discord from '../assets/images/icons/discord.svg';
import Twitter from '../assets/images/icons/twitter.svg';
import Facebook from '../assets/images/icons/facebook.svg';
import Instagram from '../assets/images/icons/instagram.svg';



import Styles from './Header.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Header = () => {
    const socials = [
        // telegram, twitter, instagram, discord, facebook
        {
            icon: Telegram,
            link: 'https://t.me/BenefitMine',
        },
        {
            icon: Twitter,
            link: 'https://twitter.com/benefitmine',
        },
        {
            icon: Instagram,
            link: 'https://www.instagram.com/benefitmine_official/',
        },
        {
            icon: Discord,
            link: 'https://discord.com/invite/BenefitMine',
        },
        {
            icon: Facebook,
            link: 'https://www.facebook.com/BenefitMine.OfficialPage/',
        },
    ];

    return (
        <div >
            <nav
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div
                    onClick={() => {
                        window.location.href = 'https://benefitmine.io/';
                    }}
                    className={Styles.header__logo__container}
                >
                    <img
                        src={Logo}
                        alt="logo"
                        className={Styles.header__logo}
                    />
                </div>
                <ul className={Styles.header__socials}>
                    <li>
                        <a
                            href="https://benefitmine.io/"
                            className={Styles.header__link}
                        >
                            Official Website
                        </a>
                    </li>
                    {socials.map((social, index) => (
                        <li key={index}>
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={social.icon}
                                    alt="social"
                                    className={Styles.header__icon}
                                />
                            </a>
                        </li>
                    ))}

                    <li>
                        <ConnectButton/>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
