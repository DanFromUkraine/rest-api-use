import {
  Data,
  DeleteBtn,
  GetBtn,
  PatchBtn,
  PostBtn,
  PutBtn,
} from "./components";

import ActionDescription from "./components/ActionDescription";
import ExecuteBtn from "./components/ExecuteBtn";

import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import Input from "./components/Input";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-8 flex gap-9">
        <div className="flex flex-col gap-4">
          <GetBtn />
          <PostBtn />
          <PutBtn />
          <DeleteBtn />
          <PatchBtn />
          <ExecuteBtn className="bg-red-500 hover:bg-red-400" />

          <Input />
        </div>
        <div className="w-full flex flex-col justify-between items-center">
          <Data />
          <ActionDescription />
        </div>
      </div>
    </QueryClientProvider>
  );
}
