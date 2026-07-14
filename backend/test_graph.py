from app.agents.graph import graph

result = graph.invoke({
    "message": "Show follow-up reminders for this week."
})
print(result["response"])