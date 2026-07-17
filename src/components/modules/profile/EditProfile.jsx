import AccountForm from "./AccountForm";
import PersonalForm from "./PersonalForm";
import BankForm from "./BankForm";

function EditProfile({isEdit, setIsEdit, setActiveTab}) {

  return (
    <div>

      {/* Edit email */}
      <AccountForm setIsEdit={setIsEdit} setActiveTab={setActiveTab}/>

      {/* Edit user info */}
      <PersonalForm setIsEdit={setIsEdit} isEdit={isEdit} setActiveTab={setActiveTab} />

      {/* Edit user bank info */}
      <BankForm setIsEdit={setIsEdit} isEdit={isEdit} setActiveTab={setActiveTab}  />
    </div>
  );
}

export default EditProfile;
