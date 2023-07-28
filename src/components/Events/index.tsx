import React from "react";
import "./style.css";

function Events() {
  return (
    <section className="events">
      <h1>Events</h1>
      <div className="flex">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            laboriosam accusantium consequatur tempora quia debitis excepturi
            libero quidem unde ipsum ipsa similique. Cumque fuga odio, ipsa
            accusantium cupiditate veniam quibusdam.
          </p>
        </div>
        <div className="dates">
          <h4>Dates</h4>
          <ul>
            <li>Monday, Sept, 4th - Labor Day</li>
            <li>Monday, Oct, 9th - Columbus Day</li>
            <li>Friday, Nov, 10th - Veterans Day</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Events;
