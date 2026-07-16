import { useUser } from "@/hooks/queries";

import AccountForm from "./AccountForm";
import PersonalForm from "./PersonalForm";
import BankForm from "./BankForm";

function EditProfile({setIsEdit}) {

  return (
    <div>

      {/* Edit email */}
      <AccountForm />

      {/* Edit user info */}
      <PersonalForm setIsEdit={setIsEdit} />

      {/* Edit user bank info */}
      <BankForm setIsEdit={setIsEdit} />
    </div>
  );
}

export default EditProfile;
