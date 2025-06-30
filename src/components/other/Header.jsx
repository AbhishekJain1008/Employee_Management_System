import React from "react";

const Header = (props) => {
  // const [userName, setUserName] = useState("");

  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");

    // so here when we click on the logout btn we empty the user into the localstorage so it automatically go to the login page
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">userName😎</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white px-5 py-2 rounded-s-sm text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
