from app.agents.llm import llm

response = llm.invoke("Say hello from Groq.")

print(response.content)