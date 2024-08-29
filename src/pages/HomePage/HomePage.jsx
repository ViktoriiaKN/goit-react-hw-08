import "animate.css";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={`animate__animated animate__fadeIn ${s.homePage}`}>
      <h1 className={s.title}>Contacts Book</h1>
      <p className={s.subtitle}>Welcome to your personal contacts manager.</p>
    </div>
  );
};

export default HomePage;
