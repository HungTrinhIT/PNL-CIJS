import { useState, useEffect } from "react";
import UserCard from "../../components/UserCard";

const HomepageUsingHook = (props) => {
  const [users, setUsers] = useState([]);

  const getGithubUsers = async () => {
    const responseJson = await fetch(
      "https://api.github.com/users?per_page=15"
    );
    const res = await responseJson.json();
    setUsers(res);
  };

  useEffect(() => {
    getGithubUsers();
  }, []);

  return (
    <div className="row">
      {users.map((user, index) => {
        return <UserCard user={user} key={index} />;
      })}
    </div>
  );
};

export default HomepageUsingHook;
