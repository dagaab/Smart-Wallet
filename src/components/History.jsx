import React from "react";
import "../styles/History.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
function History() {
  return (
    <section className="history-section">
      <h2>History</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
      </p>
    </section>
  );
}

export default History;