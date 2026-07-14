from app.agents.llm import llm


def log_interaction(state):
    prompt = f"""
    Convert this doctor's visit into structured CRM JSON.

    {state["message"]}
    """

    result = llm.invoke(prompt)

    return {"response": result.content}


def edit_interaction(state):
    prompt = f"""
    Update the following CRM interaction according to the user's request.

    {state["message"]}
    """

    result = llm.invoke(prompt)

    return {"response": result.content}


def search_hcp(state):
    prompt = f"""
    Identify which Healthcare Professional the user wants to search for.

    {state["message"]}
    """

    result = llm.invoke(prompt)

    return {"response": result.content}


def follow_up_reminder(state):
    prompt = f"""
    Extract follow-up reminders from the following text.

    {state["message"]}
    """

    result = llm.invoke(prompt)

    return {"response": result.content}


def visit_summary(state):
    prompt = f"""
    Create a professional visit summary from the following doctor's interaction.

    {state["message"]}
    """

    result = llm.invoke(prompt)

    return {"response": result.content}