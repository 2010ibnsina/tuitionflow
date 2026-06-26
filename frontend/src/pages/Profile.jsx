import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("access");

    axios.get(
      "http://127.0.0.1:8000/api/accounts/profile/",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((response) => {
      setUser(response.data);
    });

  }, []);

  return (
    <div className="container mt-5">

      <h2>Profile</h2>

      {user && (
        <>
          <p>
            <strong>Username:</strong> {user.username}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </>
      )}

    </div>
  );
}

export default Profile;