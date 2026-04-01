"use client";

import Drawer from "@/src/components/Drawer";
import Pagination from "@/src/components/Pagination";
import Button from "@/src/components/ui/Button";
import Card from "@/src/components/ui/Card";
import Input from "@/src/components/ui/Input";
import Label from "@/src/components/ui/Label";
import { useState } from "react";

interface CardItems {
  title: string;
  description: string;
  createdAt: string;
}

const cardItems: CardItems[] = [
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "24/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/09/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "12/10/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "19/04/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "28/05/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "19/09/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus consequatur vel voluptates accusantium non qui,eligendi iste.",
    createdAt: "14/07/2025",
  },
];

const CreateKnowledgeBase = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const start = (currentPage - 1) * rowsPerPage;
  const paginatedData = cardItems.slice(start, start + rowsPerPage);

  const [open, setOpen] = useState(false);

  return (
    <>
      <section>
        <section className="flex justify-between p-5">
          <Label
            name="Knowledge Base"
            className="font-bold text-2xl text-gray-800"
          />
          <section>
            <Input
              placeholder="Search..."
              className="border p-2 border-gray-300 rounded-sm mr-4"
            />
            <Button
              value="+ Create New"
              onClick={() => setOpen(true)}
              className="bg-[var(--secondary-color)] text-white p-2 w-[8vw] rounded-sm cursor-pointer"
            />
          </section>
        </section>

        <section className="flex flex-col mb-10">
          <section className="grid grid-cols-3 gap-4 m-2 border rounded-sm p-3 border-gray-300">
            {paginatedData.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </section>
          <Pagination
            total={cardItems.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
        </section>
      </section>

      {/* Drawer Overlay */}
      {open && <Drawer isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
};

export default CreateKnowledgeBase;
