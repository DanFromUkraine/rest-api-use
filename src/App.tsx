import {
  ConnectBtn,
  Data,
  DeleteBtn,
  GetBtn,
  HeadBtn,
  OptionsBtn,
  PatchBtn,
  PostBtn,
  PutBtn,
  TraceBtn,
  Button
} from "./components";


import ActionDescription from "./components/ActionDescription";
import ExecuteBtn from "./components/ExecuteBtn";

export default function App() {
  return (
    <div className="p-8 flex gap-9">
      <div className="flex flex-col gap-4">
        <GetBtn />
        <PostBtn />
        <PutBtn />
        <DeleteBtn />
        <PatchBtn />
        <HeadBtn />
        <OptionsBtn />
        <ConnectBtn />
        <TraceBtn />
        <ExecuteBtn className="bg-red-500 hover:bg-red-400"/>
      </div>
      <div className="w-full flex flex-col justify-between items-center">
        <Data />
        <ActionDescription />
      </div>
    </div>
  );
}
