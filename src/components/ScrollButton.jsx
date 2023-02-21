import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 mr-10">
      <button
        type="button"
        onClick={scrollToTop}
        className=" p-2 rounded-full text-gray-200 bg-yellow-600"
      >
        <BiArrowFromBottom className="h-8 w-8" aria-hidden="true" />
      </button>
    </div>
  );
};
export default ScrollButton;
