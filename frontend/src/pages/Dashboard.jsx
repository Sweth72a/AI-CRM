import Navbar from "../components/Navbar";
import InteractionForm from "../components/InteractionForm";
import ChatPanel from "../components/ChatPanel";
import InteractionHistory from "../components/InteractionHistory";
function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "30px",
          background: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <InteractionForm />

        <ChatPanel />
      </div>
        <InteractionHistory />
    </>
  );
}

export default Dashboard;