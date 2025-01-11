import Lottie from "lottie-react";
import "./EmptyPage.scss";
import animationData from "../../assets/lottie/no-data-anim.json";

const EmptyPage = () => {
  return (
    <div className="empty-page">
      <div className="lottie-anim-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <p>No Data Found!</p>
    </div>
  );
};

export default EmptyPage;
