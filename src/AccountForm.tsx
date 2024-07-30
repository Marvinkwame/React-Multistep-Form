type AccountFormData = {
  password: string;
  email: string;
};

type AccountFormProps = AccountFormData & {
  updateFields: (field: Partial<AccountFormData>) => void;
};
const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <div className="grid gap-y-8">
      <div className="flex items-center gap-2">
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Email"
          autoFocus
          name="password"
          id=""
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          className="border-2 border-black px-2"
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Email"
          autoFocus
          name="email"
          id=""
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className="border-2 border-black px-2"
          required
        />
      </div>
    </div>
  );
};

export default AccountForm;
