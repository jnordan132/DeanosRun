import "./style.css";
import NamesList from "./listOfNames";

function Events() {
  return (
    <section className="events">
      <h1>Events</h1>
      <div className="">
        <div className="dates">
          <h4>May 18, 2024 - Deano's Run</h4>
          <div className="text">
            <p>Meet up at 11am @ Salter Speed Shop</p>
            <p>Kickstands up at 12pm</p>
          </div>
        </div>
        <h1>Thank you to those who donated!</h1>
        <NamesList />
      </div>
    </section>
  );
}

export default Events;
