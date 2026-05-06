import { useState } from 'react';
import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
import { faGear } from '@fortawesome/free-solid-svg-icons'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//-------------------------------------------------------------------------//
const InstallLink = () => {
  const [installable, setInstallable] = useState(false);
  window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    window.deferredPrompt = event;
    setInstallable(true);
  });
  window.addEventListener('appinstalled', function (event) {
    window.deferredPrompt = null;
  });
  const handleInstallClick = function (event) {
    event.preventDefault();
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
  };
  return (
    <>
      <div id='profileSection'>
        <div id='innerWindow'>
          <Link onClick={handleInstallClick}><FontAwesomeIcon id='profileFontAwesome' icon={faGear} /></Link><br />
          <Link onClick={handleInstallClick}>install</Link>
        </div>
      </div>
    </>
  );
}
//-------------------------------------------------------------------------//
export default InstallLink;