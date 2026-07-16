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
    <div className="md:grid md:grid-cols-4 md:gap-9 md:w-400 md:mx-auto pt-10">
      <div className="md:col-span-1">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="md:col-span-3">
        {activeTab === "profile" && ( isEdit ? <EditProfile setIsEdit={setIsEdit} /> : <ProfileSection setIsEdit={setIsEdit}/> )}
        {activeTab === "tours" ? <ToursSection /> : ""}
        {activeTab === "transaction" ? <TransactionsSection /> : ""}
      </div>
    </div>
  );
}

export default ProfilePage;
