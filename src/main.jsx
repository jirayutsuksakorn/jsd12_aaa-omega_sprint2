import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MessageProvider } from "./contexts/messageContext/MessageProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </StrictMode>
);




// // Test for Homepage(CARD)

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import './assets/css/App.css';
// import AppTest from "./AppTest";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <AppTest />
//   </StrictMode>
// );

// // Test for Homepage(CARD)