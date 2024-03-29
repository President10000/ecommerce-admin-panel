import React from "react";
import { form_template } from "../Addproduct";

const Price: React.FC<{
  form: form_template;
  setForm: React.Dispatch<React.SetStateAction<form_template>>;
}> = ({ form, setForm }) => {
  return (
    <>
      <div className="d-flex gap-2 flex-wrap">
          <input
            name="price"
            value={form.price}
            min={0}
            onChange={(e) =>
              setForm((pre) => ({
                ...pre,
                [e.target.name]: parseInt(e.target.value),
              }))
            }
            id=""
            className=""
            type="number"
            placeholder="Price"
          />
          <input
            name="local_price"
            min={0}
            value={form.local_price}
            onChange={(e) =>
              setForm((pre) => ({
                ...pre,
                [e.target.name]: parseInt(e.target.value),
              }))
            }
            id=""
            className=""
            type="number"
            placeholder=" Local Price"
          />
      </div>
    </>
  );
};

export default Price;
