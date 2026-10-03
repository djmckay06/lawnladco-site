export default async function () {
  const key = Netlify.env.get("AUTOMATION_WEBHOOK_SECRET");
  if (!key) throw new Error("AUTOMATION_WEBHOOK_SECRET is not configured.");

  const response = await fetch(
    "https://api.base44.com/api/apps/6aaccc7fcf62f282d80dae7e/functions/automationBridge",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-lawnlad-automation-key": key
      },
      body: JSON.stringify({ source: "netlify-scheduled-function" })
    }
  );

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`LawnBrain automation bridge failed (${response.status}): ${text}`);
  }

  console.log("LawnBrain automation sweep completed:", text);
}

export const config = {
  schedule: "@hourly"
}
