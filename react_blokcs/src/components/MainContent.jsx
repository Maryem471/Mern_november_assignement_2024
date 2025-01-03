import './MainContent.css';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

function MainContent() {
  return (
    <div className="main-content">
      <div className="subcontents">
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisement />
    </div>
  );
}

export default MainContent;
