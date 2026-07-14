from langgraph.graph import StateGraph, END

from app.agents.state import AgentState
from app.agents.tools import (
    log_interaction,
    edit_interaction,
    search_hcp,
    follow_up_reminder,
    visit_summary,
)

workflow = StateGraph(AgentState)

workflow.add_node("LogInteraction", log_interaction)
workflow.add_node("EditInteraction", edit_interaction)
workflow.add_node("SearchHCP", search_hcp)
workflow.add_node("FollowUpReminder", follow_up_reminder)
workflow.add_node("VisitSummary", visit_summary)


def router(state):
    message = state["message"].lower()

    if "edit" in message:
        return "EditInteraction"

    elif "search" in message:
        return "SearchHCP"

    elif "follow" in message:
        return "FollowUpReminder"

    elif "summary" in message:
        return "VisitSummary"

    else:
        return "LogInteraction"


workflow.set_conditional_entry_point(router)

workflow.add_edge("LogInteraction", END)
workflow.add_edge("EditInteraction", END)
workflow.add_edge("SearchHCP", END)
workflow.add_edge("FollowUpReminder", END)
workflow.add_edge("VisitSummary", END)

graph = workflow.compile()