import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Redirect old /visa route to /services/visas
const VisaPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/services/visas", { replace: true });
  }, [navigate]);

  return null;
};

export default VisaPage;