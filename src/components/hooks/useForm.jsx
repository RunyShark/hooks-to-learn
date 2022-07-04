import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };
  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    handleOnChange,
    onResetForm,
  };
};
