import React,{ useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import ChatBot from 'react-simple-chatbot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';
function Index() {
  const [showChatbot, setShowChatbot] = useState(false);
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);

  const steps =[
    {
      id:'Greet',
      message:'Hello, Welcome to our websites',
      trigger:'Ask Name'
    },
    {
      id:'Ask Name',
      message:'Please enter your name',
      trigger:'waiting1'
    },{
       id:'waiting1',
      user:true,
      trigger:'Name'
    },{
       id:'Name',
       message:'Hi {previousValue}, Please select the query.',
       end:true
    }
  ]

  // Function to toggle the visibility of the chatbot
  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  const toggleChat = () => {
    setShowChatbot(false);
  };


  return (
      <>

        <IndexNavbar />
        <IndexHeader />
        <div className="main">
          <SectionButtons />
          <SectionNavbars />
          <SectionNavigation />
          <SectionProgress />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavaScript />
          <SectionCarousel />
          <SectionNucleoIcons />
          <SectionDark />
          <SectionLogin />
          <SectionExamples />
          <SectionDownload />
          <DemoFooter />
        </div>
        <div className="chatbot-container">
          {/* Button to toggle the visibility of the chatbot */}
          <button className="chat-icon-button" onClick={toggleChatbot}>
            <FontAwesomeIcon icon={faComment} style={{ fontSize: '24px', color: 'purple' }} />
          </button>
          {/* Chatbot container */}
          {showChatbot && (
              <div className="chatbot-container">
                <ChatBot steps={steps} />
                <button className="close-button" onClick={toggleChat}>
                  <FontAwesomeIcon icon={faTimes} style={{ fontSize: '24px', color: 'purple' }}/>
                </button>
              </div>
          )}
        </div>

      </>
  );
}

export default Index;