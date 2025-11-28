export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycby1ySAAP4t9nr7ACXaXU-ugscE2rsBaxANiLZESLRXKxLVo62lZec3dXk8JyDS8RgGQ/exec";

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      redirect: "follow", // Important for Google Apps Script
    });

    if (!res.ok) {
      throw new Error(`Google Script responded with status: ${res.status}`);
    }

    const text = await res.text();

    return Response.json({ success: true, message: text }, { status: 200 });
  } catch (err: any) {
    console.error("API Error:", err);
    return Response.json(
      { success: false, error: err.message || "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
