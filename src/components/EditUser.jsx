import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";
import { server_cooperative } from "../server";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);


  const document_cookies = document.cookie;
  //var token = document_cookies.split("=")[1];
  var config = {
    headers: {
      Authorization: `Bearer ${document_cookies}`,
    },
  };

  useEffect(() => {
    axios.get(`${server_cooperative}/${id}`, config)
    .then((res) =>{
      res.data.msg.data.map((data)=>{
        setData(data);
        return data._id
      })
      // console.log(res.data.msg.data)
    })
    // axios
    //   .get(`${server_cooperative}/${id}`, config)
    //   .then((res) => {
    //     setData(res.data.msg.data);
    //     console.log(id)
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    axios.put("http://localhost:3000/users/" + id, data).then((res) => {
      toast.info("Data updated successfully!");
      navigate("/admin-dashboard");
    });
  }
  return (
    <div>
      <Header />
      <div className="bg-[url(./assets/loan-bg.jpg)] h-[100vh] bg-no-repeat bg-cover pt-[5%]">
        <div>
          <form
            action=""
            className="flex flex-col w-fit m-auto bg-black bg-opacity-60 p-4"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="ID"
              type="text"
              value={data.id}
              disabled
            />
            <input
              placeholder="Members Name"
              type="text"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <input
              placeholder="Monthly Savings"
              type="text"
              value={data.monthly_saving}
              onChange={(e) =>
                setData({ ...data, monthly_saving: e.target.value })
              }
            />
            <input
              placeholder="Loan Amount"
              type="text"
              value={data.loan_amount}
              onChange={(e) =>
                setData({ ...data, loan_amount: e.target.value })
              }
            />
            <input
              placeholder="Loan Balance"
              type="text"
              value={data.loan_balance}
              onChange={(e) =>
                setData({ ...data, loan_balance: e.target.value })
              }
            />
            <input
              placeholder="Loan Monthly Deduction"
              type="text"
              value={data.monthly_deduction}
              onChange={(e) =>
                setData({ ...data, monthly_deduction: e.target.value })
              }
            />
            <input
              placeholder="Available Balance"
              type="text"
              value={data.available_balance}
              onChange={(e) =>
                setData({ ...data, available_balance: e.target.value })
              }
            />
            <button className="bg-violet-500 border-0 text-white p-2 cursor-pointer rounded-xl">
              Update
            </button>
          </form>
          <Link to="/admin-dashboard">
            <div className="flex justify-center">
              <p className="p-2 bg-red-500 w-[80px] text-white rounded-lg text-center mt-4">
                Back
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditUser;
