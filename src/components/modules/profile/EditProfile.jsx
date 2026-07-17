import AccountForm from "./AccountForm";
import PersonalForm from "./PersonalForm";
import BankForm from "./BankForm";

function EditProfile({setIsEdit, setActiveTab}) {

  return (
    <div>

      {/* Edit email */}
      <AccountForm />

      {/* Edit user info */}
      <PersonalForm setIsEdit={setIsEdit} setActiveTab={setActiveTab} />

      {/* Edit user bank info */}
      <BankForm setIsEdit={setIsEdit} setActiveTab={setActiveTab}  />
    </div>
  );
}

export default EditProfile;
