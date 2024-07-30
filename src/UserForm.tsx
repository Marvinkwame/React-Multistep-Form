type UserData = {
  firstName: string;
  lastName: string;
  nickName: string;
};

type UserFormProps = UserData & {
  updateFields: (field: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  nickName,
  updateFields,
}: UserFormProps) => {
  return (
    <div className="grid gap-y-8">
      <div className="flex items-center gap-2">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          autoFocus
          name="firstName"
          id=""
          value={firstName}
          required
          onChange={e => updateFields({ firstName: e.target.value })}
          className="border-2 border-black px-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          placeholder="last Name"
          autoFocus
          name="lastName"
          id=""
          value={lastName}
          required
          onChange={e => updateFields({ lastName: e.target.value })}
          className="border-2 border-black px-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="">Nickname</label>
        <input
          type="nickie"
          name=""
          value={nickName}
          onChange={e => updateFields({ nickName: e.target.value })}
          id=""
          required
          className="border-2 border-black px-2"
        />
      </div>
    </div>
  );
};

export default UserForm;
