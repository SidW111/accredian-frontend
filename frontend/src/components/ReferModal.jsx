import React, { useState } from "react";
import axios from "axios";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const ReferModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    referreNama: "",
    referreEmail: "",
    referrePhone: "",
    courseInterested: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.referrerPhone.length < 10 || formData.referrePhone.length < 10) {
      alert("Phone number must be at least 10 digits.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/referrals", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Form Data Submitted Successfully!");
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Failed to submit form: ${error.response?.data?.message || "Unknown error"}`);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle className="text-center text-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-300 border-b pb-3">
        Refer Your Friend
      </DialogTitle>
      <DialogContent className="p-6 bg-blue-50">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField label="Your Name" name="referrerName" fullWidth required onChange={handleChange} />
          <TextField label="Your Email" name="referrerEmail" type="email" fullWidth required onChange={handleChange} />
          <TextField label="Your Phone Number" name="referrerPhone" type="tel" fullWidth required onChange={handleChange} />
          <TextField label="Friend's Name" name="referreNama" fullWidth required onChange={handleChange} />
          <TextField label="Friend's Email" name="referreEmail" type="email" fullWidth required onChange={handleChange} />
          <TextField label="Friend's Phone Number" name="referrePhone" type="tel" fullWidth required onChange={handleChange} />
          <TextField label="Interested Course" name="courseInterested" fullWidth required onChange={handleChange} />
          <DialogActions className="flex justify-between mt-4">
            <Button
              onClick={() => setOpen(false)}
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-700"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Submit Referral
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const ReferNowButton = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        
      >
        Refer Now
      </button>
      <ReferModal open={open} setOpen={setOpen} />
    </>
  );
};

export default ReferModal;
