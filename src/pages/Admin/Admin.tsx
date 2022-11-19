import "./Admin.css";

import { useState } from "react";

import { User } from "../../Interfaces/users";
import { useFetchApi } from "../Hooks/useFetchApi";

const Admin = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading)
  useFetchApi(
    "/api/user/",
    setUserList,
    "users",
    [],
    true,
    true,
    setIsLoading,
    null
  );
  console.log(userList);
  return (
    <div className="admin-container">
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>Username</th>
            <th>Email</th>
            <th>createdAt</th>
            <th>isVerified</th>
            <th>isFreeAds</th>
            <th>becomingSupporterAt</th>
            <th>becomingMemberAt</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(
            (
              {
                email,
                isVerified,
                createdAt,
                userId,
                username,
                isFreeAds,
                becomingMemberAt,
                becomingSupporterAt,
              },
              key
            ) => (
              <tr key={key}>
                <th>{userId}</th>
                <th>{username}</th>
                <th>{email}</th>
                <th>{createdAt}</th>
                <th>{isVerified.toString()}</th>
                <th>{isFreeAds ? isFreeAds.toString() : "false"}</th>
                <th>{becomingSupporterAt ? becomingSupporterAt : "none"}</th>
                <th>{becomingMemberAt ? becomingMemberAt : "none"}</th>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
