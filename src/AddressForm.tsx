
type AddressFormData = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

type AddressFormProps = AddressFormData & {
  updateFields: (field: Partial<AddressFormData>) => void;
};

const AddressForm = ({
  city,
  state,
  zipCode,
  street,
  updateFields,
}: AddressFormProps) => {
  return (
    <div className="grid gap-y-8">
      <div className="flex items-center gap-2">
        <label htmlFor="">Street</label>
        <input
          type="text"
          placeholder="street"
          autoFocus
          required
          name="street"
          id=""
          onChange={(e) => updateFields({ street: e.target.value })}
          value={street}
          className="border-2 border-black px-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="">City</label>
        <input
          type="text"
          placeholder="city"
          required
          autoFocus
          value={city}
          name="city"
          onChange={(e) => updateFields({ city: e.target.value })}
          id=""
          className="border-2 border-black px-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="">State</label>
        <input
          type="text"
          required
          value={state}
          name=""
          id=""
          onChange={(e) => updateFields({ state: e.target.value })}
          className="border-2 border-black px-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="">Zip Code</label>
        <input
          type="text"
          name=""
          value={zipCode}
          required
          onChange={(e) => updateFields({ zipCode: e.target.value })}
          id=""
          className="border-2 border-black px-2"
        />
      </div>
    </div>
  );
};

export default AddressForm;
