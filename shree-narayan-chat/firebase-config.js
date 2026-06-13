import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyAXOgujFK5vduidj5bK5n0-jx4Osc6qUUs",
authDomain: "shree-narayan-chat.firebaseapp.com",
databaseURL: "https://shree-narayan-chat-default-rtdb.firebaseio.com",
projectId: "shree-narayan-chat",
storageBucket: "shree-narayan-chat.firebasestorage.app",
messagingSenderId: "493835309038",
appId: "1:493835309038:web:275a4e233c4284320588ff"
};

const app = initializeApp(firebaseConfig);

export { app };
export const db = getDatabase(app);
