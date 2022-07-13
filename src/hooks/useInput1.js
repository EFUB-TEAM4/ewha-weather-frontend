import { useState } from "react";

export default function useInput1() {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  return { value, onChange };
}
