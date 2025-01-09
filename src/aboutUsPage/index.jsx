import { Link } from "react-router-dom";

export default function AboutUsPage() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        We are a company that values our customers and we strive to provide the
        best service possible.
      </p>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
