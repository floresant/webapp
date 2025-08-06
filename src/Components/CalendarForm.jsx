import { useState } from "react";
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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { ChromePicker } from "react-color";
import "../Styles/Calendar.css";

function CalendarForm({
  handleAddEvent,
  showWidget,
  setShowWidget,
  colors,
  setColors,
}) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    startDate: dayjs(),
    endDate: dayjs(),
    backgroundColor: "rgba(255, 0, 0, 1)",
  });

  const handleStartDateChange = (newValue) => {
    const name = "startDate";
    formData.endDate = newValue;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleEndDateChange = (newValue) => {
    const name = "endDate";
    setFormData({ ...formData, [name]: newValue });
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

  const handleColorChange = (color) => {
    const { r, g, b, a } = color.rgb;
    const name = "backgroundColor";
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
    setFormData({
      ...formData,
      [name]: rgba,
    });
  };

  const handleColorSelect = (color) => {
    const name = "backgroundColor";
    setFormData({
      ...formData,
      [name]: color,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const colorName = "color1";
    const color = formData.backgroundColor;
    handleAddEvent(formData);
    setColors((prev) => ({ ...prev, [color]: { colorName, color } }));
    setFormData({
      title: "",
      desc: "",
      startDate: dayjs(),
      endDate: dayjs(),
      backgroundColor: "rgba(255, 0, 0, 1)",
    });
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
              required
              //   variant="standard"
              value={formData.title}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              name="desc"
              label="Description"
              type="text"
              fullWidth
              //   variant="standard"
              value={formData.desc}
              onChange={handleChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                margin="normal"
                label="Starts"
                value={formData.startDate}
                onChange={(newValue) => handleStartDateChange(newValue)}
              />
              <DateTimePicker
                margin="normal"
                label="Ends"
                value={formData.endDate}
                onChange={(newValue) => handleEndDateChange(newValue)}
              />
            </LocalizationProvider>
            <div className="color-selection">
              <div className="color-picker">
                <span>Selected color: </span>
                <span>
                  <ColorSquare color={formData.backgroundColor} />
                </span>
                <ChromePicker
                  color={formData.backgroundColor}
                  onChange={handleColorChange}
                />
              </div>
              <div className="prev-colors">
                <header>Previous Colors</header>
                {Object.entries(colors).map(([key, { colorName, color }]) => (
                  <div key={key} className="color-name" onClick={() => handleColorSelect(color)}>
                    {colorName}
                    <div className="color">
                      <ColorSquare color={color} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!formData.title}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function ColorSquare({ color, size = 20 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        border: "none",
        borderRadius: 4,
        display: "inline-block",
      }}
    />
  );
}

export default CalendarForm;
