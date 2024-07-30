import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import "./App.css";
import { useMultistepForm } from "./useMultistepForm";
import UserForm from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  password: string;
};

const InitialData: FormData = {
  firstName: "",
  lastName: "",
  nickName: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  password: "",
};
function App() {
  const [data, setData] = useState(InitialData);

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev,  ...fields}
    })

  }

  const { steps, currentIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!isLastStep) return next();
    alert("Account Created")
  };

  return (
    <div className="border-2 w-[400px] p-6 mx-auto rounded-md relative mt-5 border-black">
      <form action="" onSubmit={onSubmit}>
        <div className="absolute top-0 right-2">
          {currentIndex + 1}/{steps.length}
        </div>

        {step}

        <div className="flex items-center mt-4 justify-end gap-2">
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="border-2 border-black px-2"
            >
              Prev
            </button>
          )}

          <button type="submit" className="border-2 border-black px-2">
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
