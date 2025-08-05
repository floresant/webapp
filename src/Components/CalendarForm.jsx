import { useRef, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../Styles/Calendar.css";

function CalendarForm({ handleAddEvent, showWidget, setShowWidget }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    startDate: dayjs(),
    endDate: dayjs(),
  });

  const handleStartDateChange = (newValue) => {
    const name = 'startDate';
    setFormData({ ...formData, [name]: newValue});
  };

  const handleEndDateChange = (newValue) => {
    const name = 'endDate';
    setFormData({ ...formData, [name]: newValue});
  };

  const handleClose = () => {
    setShowWidget(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleAddEvent(formData);
    handleClose();
  };

  return (
    <div>
      <Dialog open={showWidget} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              name="title"
              label="Title"
              type="text"
              fullWidth
              //   variant="standard"
              value={formData.title}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="desc"
              label="Description"
              type="text"
              fullWidth
              //   variant="standard"
              value={formData.desc}
              onChange={handleChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                margin="dense"
                // name="startDate"
                label="Starts"
                //   type="text"
                fullWidth
                value={formData.startDate}
                onChange={(newValue) => handleStartDateChange(newValue)}
              />
              <DatePicker
                margin="dense"
                // name="endDate"
                label="Ends"
                //   type="text"
                fullWidth
                value={formData.endDate}
                onChange={(newValue) => handleEndDateChange(newValue)}
              />
            </LocalizationProvider>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CalendarForm;
