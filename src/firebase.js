
  import firebase from 'firebase'
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyDGkJ9P8GXaNXLnugY7ebTKKXaP4VO0fx4",
    authDomain: "chat-d516a.firebaseapp.com",
    databaseURL: "https://chat-d516a.firebaseio.com",
    projectId: "chat-d516a",
    storageBucket: "chat-d516a.appspot.com",
    messagingSenderId: "176015245914",
    appId: "1:176015245914:web:8b0d3c316fd90e68d2ce63"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messagesRef = database.ref('message')

  export const pushMessage = ({name,text})=>{
    messagesRef.push({name,text})
  }