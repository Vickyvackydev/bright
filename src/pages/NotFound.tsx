import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center font-inter">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md"
      >
        <h1 className="text-9xl font-bold text-black/10">404</h1>
        <h2 className="text-3xl font-medium text-black mt-4 tracking-tighter">
          Page Not Found
        </h2>
        <p className="text-[#11111299] mt-4 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="flex justify-center">
          <Button
            handleClick={() => navigate("/")}
            title="Go Home"
            btnStyles="w-[140px] h-[48px] rounded-full"
            textStyle="text-sm font-medium"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
