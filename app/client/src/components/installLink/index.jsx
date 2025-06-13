import { useState } from 'react';
import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
import installSecIcon from '../../../src/assets/images/profile-section-ico/installIcon.png';
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
    if(!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
  };
  return (
    <>
      <div id='profileSection'>
        <Link onClick={handleInstallClick}><img src={installSecIcon} /></Link><br />
        <Link onClick={handleInstallClick}>-:|:- Install</Link>
      </div>
    </>
  );
}
//-------------------------------------------------------------------------//
export default InstallLink;