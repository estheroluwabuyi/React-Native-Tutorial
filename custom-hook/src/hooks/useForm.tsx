import { useState } from "react";

type UseFormProps = {
  initialValue?: string;
};

const useForm = ({ initialValue = "" }: UseFormProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (text: string) => {
    setValue(text);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useForm;
