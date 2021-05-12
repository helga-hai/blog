window.onload = function() {
  console.log('window onload')
  window.addEventListener('beforeinstallprompt', function(e) {
    console.log('beforeinstallprompt', e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = e;
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  });
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function(reg) {
      })
      .catch(function(err) {
        console.log('service worker not registered', err);
      });
  }
}
