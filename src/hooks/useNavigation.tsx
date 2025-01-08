import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../utils/master-menu";

const useNavigation = () => {
  const navigate = useNavigate();
  const [previousPath, setPreviousPath] = useState("");

  const handleNavigation = (path?: string) => {
    if (previousPath !== path) {
      setPreviousPath(path ?? RoutesList.NOT_FOUND);
      navigate(path ?? RoutesList.NOT_FOUND);
    }
  };

  return {
    handleNavigation,
  };
};

export default useNavigation;
