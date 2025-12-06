"use client"
import { useEffect, useState } from "react";
import * as client from "../../client"
import { useParams } from "next/navigation";
import PeopleTable from "./Table";

export default function People() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { cid }: { cid: string } = useParams();
  const [people, setPeople] = useState<any[]>([])
  const fetchPeople = async () => {
    const enrolled = await client.findUsersForCourse(cid);
    setPeople(enrolled);
  }
  useEffect(() => {fetchPeople();});
  return (
    <div id="wd-people" className="me-3">
      <PeopleTable users={people} fetchUsers={fetchPeople} />
    </div>
  );
}
