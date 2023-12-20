import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getMessaging, getToken } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js'


export class Firebase {
  config() {
    navigator.serviceWorker.register('service-worker.js')
      .then(async serviceWorker => {
        let subscription = await serviceWorker.pushManager.getSubscription()
        if (!subscription) {
          subscription = await serviceWorker.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BNDS9MRreKOaJyhN5TVLMTyAY6LQ-RWor_Wn-BA8ma6eIcTK5soLSZIQBvIa3fTuIiYsHCjgKnnWMWMInGWuLqg'
          })
        }
        const { data } = await axios.post('http://localhost:3333/send', subscription)
        console.log(data)
        // console.log(await subscription)
      })

  }

  async cloudMessaging() {
    const firebaseConfig = {
      apiKey: "AIzaSyA4g5uwMFwmdz6vGX9ueTuiPW4A9c8LRc4",
      authDomain: "pushnotification-8db69.firebaseapp.com",
      projectId: "pushnotification-8db69",
      storageBucket: "pushnotification-8db69.appspot.com",
      messagingSenderId: "262200447211",
      appId: "1:262200447211:web:736df10858240589b82eae"
    };

    const app = initializeApp(firebaseConfig)

    const messaging = getMessaging(app)

    getToken(messaging, { vapidKey: 'BJy3msIQINd5XOFEqrUUn3MosUDnkx4kO4QXRCegFEvUAjcnrW_2_lpcmzkDJxT1gy-ZSaOF7t2pAEZfpmnIaUc'})
      .then(token => console.log(token))
  }


  requestPermission(){
    Notification.requestPermission().then(permission => {
      if(permission === 'granted'){
        console.log('Notification permission granted.')
      }
    })
  }

  test() {
    return 'firebase test'
  }
}