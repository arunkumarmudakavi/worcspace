"use client";

import { EllipsisVertical } from "lucide-react";
import Label from "./Label";

const Card = ({
  title,
  description,
  createdAt,
}: {
  title: string;
  description: string;
  createdAt: string;
}) => {
  return (
    <>
      <section className="border border-gray-300 rounded-sm p-2">
        <section className="flex justify-between items-center">
          <Label name={title} className="font-semibold text-gray-800" />
          <EllipsisVertical />
        </section>
        <span>
          <Label name={description} className="text-gray-600" />
        </span>
        <section className="text-gray-600 mt-[8vh]">
          <Label name="Created On" />: <Label name={createdAt} />
        </section>
      </section>
    </>
  );
};

export default Card;
