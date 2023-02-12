import { Button, Form, Input } from "antd";
import { FaUserCircle, FaPhoneAlt } from "react-icons/fa";
import { RxEyeClosed } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import "./signup.css";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";


function Signup() {





  const [input, setinput] = useState({
    firstName: "",
    Contact: "",
    Email: "",
    Password: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setinput({
      ...input,
      [evt.target.name]: value,
    });
  }

  let users = [];

  const user = {
    Firstname: input.firstName,
    Contact: input.Contact,
    email: input.Email,
    password: input.Password,
  };
  function pushData() {
    users.push(user);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    // var usersData = []
    // usersData.push(JSON.parse(localStorage.getItem('users')));
    // localStorage.setItem('users', JSON.stringify(usersData));
  }

  return (
    <div className="Signup">
      <Form className="form" >
        <Form.Item label="Full Name">
          <Input
            value={input.firstName}
            name="firstName"
            onChange={handleChange}
            prefix={<FaUserCircle className="site-form-item-icon" />}
            placeholder="Full Name"
          ></Input>
        </Form.Item>
        <Form.Item label="Contact ">
          <Input
            value={input.Contact}
            name="Contact"
            onChange={handleChange}
            prefix={<FaPhoneAlt className="site-form-item-icon" />}
            placeholder="Contact"
          ></Input>
        </Form.Item>
        <Form.Item label="E-mail">
          <Input
            value={input.Email}
            name="Email"
            onChange={handleChange}
            prefix={<AiOutlineMail className="site-form-item-icon" />}
            placeholder="E-mail"
          ></Input>
        </Form.Item>
        <Form.Item label="Password">
          <Input
            value={input.Password}
            name="Password"
            onChange={handleChange}
            prefix={<RxEyeClosed className="site-form-item-icon" />}
            placeholder="Password"
          ></Input>
        </Form.Item>

        <Button onClick={pushData}>Signup</Button>
      </Form>
    </div>
  );
}

export default Signup;
