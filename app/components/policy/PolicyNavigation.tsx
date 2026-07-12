const PolicyNavigation = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center border-b pb-6">
      <a href="#terms" className="text-primary hover:text-primary/80 transition-colors font-inter font-medium">
        Terms and Services
      </a>
      <a href="#privacy" className="text-primary hover:text-primary/80 transition-colors font-inter font-medium">
        Privacy Policy
      </a>
      <a href="#acceptable" className="text-primary hover:text-primary/80 transition-colors font-inter font-medium">
        Acceptable Use Policy
      </a>
      <a href="#security" className="text-primary hover:text-primary/80 transition-colors font-inter font-medium">
        Security Policy
      </a>
    </div>
  );
};

export default PolicyNavigation;