import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

export async function GET() {
  try {
    // On appelle la fonction et on renvoie le résultat en JSON
    const invoices = await listInvoices();
    return Response.json(invoices);
  } catch (error) {
    // En cas d'erreur (ex: table inexistante), on renvoie un code 500
    return Response.json({ error }, { status: 500 });
  }
}
