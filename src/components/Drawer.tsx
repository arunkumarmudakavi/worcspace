"use client";

import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import Select from "./ui/Select";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[30vw] bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <section className="flex flex-col">
            <Label
              name="Create New Knowledge Base"
              className="font-bold text-md text-gray-700"
            />
            <Label
              name="Best for quick answers from documents, websites and text files."
              className="text-[.8rem] text-gray-500"
            />
          </section>
          <Button
            value="✕"
            onClick={onClose}
            className="text-gray-500 text-xl cursor-pointer"
          />
        </div>

        <section className="p-4 space-y-4">
          <section className="flex flex-col">
            <section>
              <Label name="Name(Cannot be edited later)" />
              <span className="text-red-500">*</span>
            </section>
            <Input
              placeholder="Name"
              className="border border-gray-200 rounded-sm p-1"
            />
          </section>

          <section className="flex flex-col">
            <Label name="Description" />
            <Input
              placeholder="Description"
              className="border border-gray-200 rounded-sm p-1"
            />
          </section>
          <section>
            <Label name="Vector Store" />
            <span className="text-red-500">*</span>
            <Select
              options={["Qdrant", "Pinecone"]}
              className="w-full mt-1 p-2 border border-gray-200 rounded-md cursor-pointer"
            />
          </section>

          <div>
            <Label name="LLM Embedding Model" />
            <span className="text-red-500">*</span>

            <Select
              options={["text-embedding-ada-002", "text-embedding-ada-003"]}
              className="w-full mt-1 p-2 border border-gray-200 rounded-md cursor-pointer"
            />
          </div>
        </section>

        {/* Footer */}
        <div className="absolute bottom-0 right-0 p-4">
          <Button
            value="Create"
            className="bg-[var(--secondary-color)] text-white px-2 py-2 rounded-md hover:opacity-90 transition"
          />
        </div>
      </div>
    </>
  );
};

export default Drawer;
