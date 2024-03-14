import React from "react";
import "../styles/Recent.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
function Recent() {
  return (
    <section className="recent-section">
      <h2>Recent Purchases</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      </p>
    </section>
  );
}

export default Recent;