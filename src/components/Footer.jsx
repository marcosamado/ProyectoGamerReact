import logo from "../images/logoGamer.png";
import logoTwitter from "../images/twitterLogo.png";
import logoInstagram from "../images/instagramLogo.png";
import logoFacebook from "../images/facebookLogo.png";

const Footer = () => {
    return (
        <div className="flex flex-col h-48 items-center gap-5">
            <div className="flex-auto pt-6">
                <img src={logo} alt="Logo Gamer" />
            </div>
            <div className="flex-grow flex flex-col gap-4">
                <h2 className="text-3xl text-white">Redes sociales</h2>
                <div className="flex flex-row justify-between">
                    <div>
                        <img src={logoTwitter} alt="Logo de twitter" />
                    </div>
                    <div>
                        <img src={logoInstagram} alt="Logo de Instagram" />
                    </div>
                    <div>
                        <img src={logoFacebook} alt="Logo de Facebook" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
