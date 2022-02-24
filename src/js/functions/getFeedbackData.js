import regeneratorRuntime from "regenerator-runtime";

export async function getFeedbackData() {
  const response = await fetch('../feedback_data.json');
  const data = await response.json();

  return data;
}
