import { containerClassName } from "@/packages/components/Login";
import { CardsCreateAccount } from "@/packages/components/Signup";

const Signup = () => {
  return (
    <div className={containerClassName}>
      <CardsCreateAccount />
    </div>
  );
};

export default Signup;
