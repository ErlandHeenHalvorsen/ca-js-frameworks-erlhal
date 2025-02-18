import FetchStore from "../API/FetchStore";
import "../app.css";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <main className="home-store-section">
        <FetchStore />
      </main>
    </div>
  );
}
