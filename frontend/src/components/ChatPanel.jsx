import { useState } from "react";
import API from "../services/api";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

function ChatPanel() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await API.post("/chat", {
    message: `
You are a pharmaceutical CRM assistant.

Create a professional visit summary from these notes.

Visit Notes:
${message}

Return:
- Summary
- Action Items
- Follow-up
`,
});
      setResponse(res.data.response);
    } catch (error) {
      console.log(error);
      alert("Error communicating with AI.");
    }
  };

  return (
  <Card sx={{ width: "45%", p: 2 }}>
    <CardContent>

      <Typography variant="h5" gutterBottom>
        AI Visit Summary
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={8}
        label="Visit Notes"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        margin="normal"
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={sendMessage}
      >
        Generate AI Summary
      </Button>

      <Typography
        variant="h6"
        sx={{ mt: 3 }}
      >
        AI Response
      </Typography>

      <Paper
        elevation={2}
        sx={{
          mt: 2,
          p: 2,
          minHeight: 200,
          whiteSpace: "pre-wrap",
          background: "#fafafa",
        }}
      >
        {response}
      </Paper>

    </CardContent>
  </Card>
);
}

export default ChatPanel;