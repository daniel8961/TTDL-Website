import linkedin from '../Asset/linkedin-logo.png';
import github from '../Asset/github-logo.png';
function Footer(){
    return(
        <div className="Footer">
            <div className="footer1">
                <a href="http://www.linkedin.com/in/tsungtilee" target='_blank'><img src={linkedin} alt="LinkedIn Link" /></a>
                <a href="https://github.com/daniel8961" target='_blank'><img src={github} alt="Github Link" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
            </div>
            <div className="footer2"></div>
        </div>
    );
}
export default Footer;