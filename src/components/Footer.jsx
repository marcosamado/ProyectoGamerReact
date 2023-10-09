import logo from "../images/logoGamer.png";
import logoTwitter from "../images/twitterLogo.png";
import logoInstagram from "../images/instagramLogo.png";
import logoFacebook from "../images/facebookLogo.png";

const Footer = () => {
    return (
        <div className="flex flex-col h-48 items-center gap-5 sm:flex-row sm:justify-around">
            <div className="flex-auto pt-6 sm:flex-none">
                <img src={logo} alt="Logo Gamer" />
            </div>
            <div className="flex-grow flex flex-col gap-4 sm:text-center sm:flex-grow-0">
                <h2 className="text-2xl text-white">Redes sociales</h2>
                <div className="flex flex-row justify-around">
                    <div className="h-8 w-auto">
                        <img
                            className="w-full h-full"
                            src={logoTwitter}
                            alt="Logo de twitter"
                        />
                    </div>
                    <div className="h-8 w-auto">
                        <img
                            className="w-full h-full"
                            src={logoInstagram}
                            alt="Logo de Instagram"
                        />
                    </div>
                    <div className="h-8 w-auto">
                        <img
                            className="w-full h-full"
                            src={logoFacebook}
                            alt="Logo de Facebook"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
