import CreateTopicForm from "@/components/CreateTopicForm";
export default async function Page() {
  await new Promise((r) => setTimeout(r, 3000));

  return (
    <div>
      <h1 className={`mb-4 text-xl md:text-2xl`}>New Topic</h1>
      <CreateTopicForm />
    </div>
  );
}
