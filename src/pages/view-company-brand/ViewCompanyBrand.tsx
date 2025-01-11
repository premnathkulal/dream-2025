import { useParams } from "react-router-dom";
import ViewCompany from "./ViewCompany";
import ViewBrand from "./ViewBrand";

const ViewCompanyBrand = () => {
  const { pageName } = useParams();

  return (
    <>
      {pageName === "company" && <ViewCompany />}
      {pageName === "brand" && <ViewBrand />}
    </>
  );
};

export default ViewCompanyBrand;
