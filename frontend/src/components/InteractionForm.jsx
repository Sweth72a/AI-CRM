import { useState } from "react";
import API from "../services/api";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@mui/material";

function InteractionForm() {
  const [formData, setFormData] = useState({
    hcp_name: "",
    hospital: "",
    interaction_type: "",
    notes: "",
    follow_up_date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveInteraction = async () => {
    try {
      const response = await API.post("/interactions", formData);

      alert("Interaction Saved Successfully!");

      console.log(response.data);

      setFormData({
        hcp_name: "",
        hospital: "",
        interaction_type: "",
        notes: "",
        follow_up_date: "",
      });

    } catch (error) {
      console.log(error);
      alert("Error saving interaction");
    }
  };

  return (
  <Card sx={{ width: "45%", p: 2 }}>
    <CardContent>

      <Typography variant="h5" gutterBottom>
        Log Interaction
      </Typography>

      <TextField
        fullWidth
        label="HCP Name"
        name="hcp_name"
        value={formData.hcp_name}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Hospital"
        name="hospital"
        value={formData.hospital}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Interaction Type"
        name="interaction_type"
        value={formData.interaction_type}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        multiline
        rows={5}
        label="Notes"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        type="date"
        name="follow_up_date"
        value={formData.follow_up_date}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={saveInteraction}
      >
        Save Interaction
      </Button>

    </CardContent>
  </Card>
);
}

export default InteractionForm;