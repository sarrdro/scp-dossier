export async function onRequestGet({ env }) {
  const result = await env.DB
    .prepare("SELECT content, updated_at FROM dossier WHERE id = 1")
    .first();

  if (!result) {
    return Response.json({ error: "Dossier not found" }, { status: 404 });
  }

  return Response.json(result);
}
