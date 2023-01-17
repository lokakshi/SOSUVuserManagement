import React from 'react'
import { useState } from "react"
import './UserForm.css'
export const UserForm = () => {

    const [name, setName] = useState("");
    const [EmployeeID, setEmployeeID] = useState("");
    const [Clientname, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
       // Perform validation here
        
      // Send data to API or other function
        
  };
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
          setProfilePhoto(null);
          setPreviewUrl(null);
          return;
    }
    setProfilePhoto(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <form className="userForm" onSubmit={handleSubmit}>
      <label>
        Profile Photo:
        <input type="file" onChange={handlePhotoChange} accept="image/*" />
      </label>
      {previewUrl && <img src={previewUrl} alt="Preview" width="100" height="100" />}
      <br/>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Employee ID:
        <input type="text" value={EmployeeID} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Client Name:
        <input type="text" value={Clientname} onChange={(e) => setName(e.target.value)} />
      </label>
      <br/>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  )
}
