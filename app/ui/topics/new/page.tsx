export default async function Page() {
  await new Promise((r) => setTimeout(r, 3000));

  return <div>New Topics Page</div>;
}