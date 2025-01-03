import { PopoverC } from "@/components/PopoverC";
import TodoList from "@/components/TodoList";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between h-screen max-w-[430px] mx-auto space-y-4 px-4 pt-10 pb-8 bg-slate-50 rounded-lg shadow-lg">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-2xl font-bold mx-auto">All Tasks</h1>
        <TodoList />
      </div>
      <PopoverC />
    </main>
  );
};

export default Home;
