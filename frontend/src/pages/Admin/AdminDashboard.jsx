import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import AdminTable from "../../components/admin/AdminTable";

const AdminDashboard = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/admin/users`);
        setAdmins(res.data);
        console.log("res card dtaaaa", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">AdminDashboard</h1>
      {/* <adminTable admins={admins} /> */}``
      <AdminTable admins={admins} />
    </div>
  );
};

export default AdminDashboard;
