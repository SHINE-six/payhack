"use client";
import { ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

const VendorApplicationsPage = () => {
  const searchParams = useSearchParams();
  const completed = searchParams.get("completed") === "true";
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Applications</h1>
      <div className="text-zinc-500">
        Setup a mobile, web or IoT applications to use FinAuth for Open Finance
        API.
        <a className="link mx-2 inline-flex items-center space-x-1" href="#">
          <span>Show more</span>
          <ChevronRight className="inline" size={20} />
        </a>
      </div>
      {completed ? <p>Completed</p> : <p>Not completed</p>}
    </div>
  );
};

export default VendorApplicationsPage;
