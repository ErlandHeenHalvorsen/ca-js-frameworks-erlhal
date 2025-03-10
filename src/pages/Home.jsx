import React, { useState } from "react";
import FetchStore from "../components/FetchStore";
import { MoveDown } from "lucide-react";

import "../app.css";

function Home() {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {

    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }

  return (
    <div>
      <div className="info-container">
        <h1>Welcome to The Everything Emporium</h1>
        <p>
          Step into a world where the unexpected meets the everyday! We
          specialize in selling... well, *whatever we feel like!* From quirky
          gadgets and novelty gifts to household essentials and totally
          unnecessary (but incredibly fun) impulse buys, you never know what
          you’ll find.
        </p>
        <p>
          <button className="cursor-pointer flex items-center" onClick={toggleHidden}>
            ✨ <strong>Why Shop With Us?</strong>
            <MoveDown className="stroke-3" />
          </button>
        </p>
        <div className={hidden ? "" : "hidden"}>
          <ul>
            <li>
              ✅ A constantly changing inventory – blink and you’ll miss it!
            </li>
            <li>✅ Weird, wonderful, and practical items all in one place.</li>
            <li>✅ Great deals on stuff you didn’t even know you needed.</li>
          </ul>
          <p>
            Whether you're on the hunt for the perfect gift, a useful tool, or
            just something totally bizarre to brighten your day, we've got you
            covered.
          </p>
        </div>
      </div>
      <main>
        <FetchStore />
      </main>
    </div>
  );
}

export default Home;
