import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "Arial" }}>
      
      <h1>🚀 Ganapathi Varma</h1>
      <h3>DevOps & Platform Engineer</h3>

      <img
        src="https://cdn-icons-png.flaticon.com/512/919/919853.png"
        alt="DevOps"
        width="120"
        style={{ margin: "20px" }}
      />

      <p>
        4+ years of experience in building and operating CI/CD platforms.
      </p>

      <p>
        Strong expertise in <b>Docker, Kubernetes, Jenkins, Git</b> and 
        backend development using <b>Java & Spring Boot</b>.
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
        alt="Kubernetes"
        width="120"
        style={{ margin: "20px" }}
      />

      <p>
        Experienced in automation using <b>Python & Shell scripting</b> and 
        managing containerized applications.
      </p>

      <hr style={{ margin: "40px" }} />

      <h3>💪 Personal Discipline</h3>
      <p>
        Works out 6 days a week and focused on continuous self-improvement —
        both professionally and physically.
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/1048/1048949.png"
        alt="Fitness"
        width="120"
        style={{ margin: "20px" }}
      />

      <p>Height: 5'10"</p>
      <p>Current Goal: Reach peak fitness & technical excellence 🔥</p>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
