import { useState } from "react";

import Sidebar from "../modules/profile/Sidebar";
import ProfileSection from "../modules/profile/ProfileSection";
import ToursSection from "../modules/profile/ToursSection";
import TransactionsSection from "../modules/profile/TransactionsSection";
import EditProfile from "../modules/profile/EditProfile";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="grid grid-cols-4 gap-9 w-400 mx-auto pt-10">
      <div className="col-span-1">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="col-span-3">
        {activeTab === "profile" && ( isEdit ? <EditProfile setIsEdit={setIsEdit} /> : <ProfileSection setIsEdit={setIsEdit}/> )}
        {activeTab === "tours" ? <ToursSection /> : ""}
        {activeTab === "transaction" ? <TransactionsSection /> : ""}
      </div>
    </div>
  );
}

export default ProfilePage;
