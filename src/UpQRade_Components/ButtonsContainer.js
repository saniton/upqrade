// import './button.css';
import NavButton from '../Buttons/NavButton';
import Feedback from '../Buttons/Feedback';
import SocialMediaButton from '../Buttons/SocialMediaButton'
import SocialMediaButton1 from '../Buttons/SocialMediaButton1';
// import Homebtn from './Buttons/Homebtn';
// import Sharebtn from './Buttons/Sharebtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Buttons/button.css';
// import Scanbtn2 from './Buttons/Scanbtn2';

const ButtonsContainer = () => {
  return (
    <div>
      <div className="rw"> {/* btn1,btn2 */}
      <SocialMediaButton1 />
        </div> 
        
        <div className="rw">{/* btn3,btn4*/}
        <NavButton />
        </div>
        <div className="rw">{/* btn5*/}
          <Feedback />
        </div>
    </div>
  );
};
 
export default ButtonsContainer; 