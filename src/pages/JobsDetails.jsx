import React from 'react'
import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold">
        Job Details – {id}
      </h2>
    </div>
  );
}
