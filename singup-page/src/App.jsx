import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showpass, setShowpass] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (form.name.length < 3) {
      newErrors.name = "Name must be atleast 3 characters";
    }

    if (!form.email.includes("@gmail.com")) {
      newErrors.email = "Invalid email";
    }

    if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Password do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful");

    setForm({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <h2>Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.phone}</p>

        <input
          type={showpass ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <span
          onClick={() => setShowpass((p) => !p)}
          style={{
            border: "1px, black, solid",
            paddingRight: "5px",
            paddingLeft: "5px",
            marginLeft: "5px",
          }}
        >
          show
        </span>
        <p style={{ color: "red" }}>{errors.password}</p>

        <input
          type={showpass ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.confirmPassword}</p>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default App;