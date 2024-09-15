"use client";
import React from "react";

export function FlaskForm() {
  const [data, setData] = React.useState<{firstName: string; lastName: string; availability: string[]} | null>(null);

  async function submit(formData: FormData) {
    try {
      const response = await fetch("/api/submit", {method: "POST", body: formData});

      if (!response.ok) {
        throw new Error("Oops! An error occurred");
      }

      const result: {firstName: string; lastName: string; availability: string[]} = await response.json();
      const {availability, firstName, lastName} = result;
      console.log({availability, firstName, lastName});
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=" flex flex-col justify-center border-2 rounded-md p-10">
      <form action={submit}>
        <div className="w-full flex gap-2 flex-col items-center justify-center">
          <label>First Name</label>
          <input className="text-black" name="firstName" />
          <label>Last Name</label>
          <input className="text-black" name="lastName" />
          <AvailabilityCheckBox nameValue="monday" />
          <AvailabilityCheckBox nameValue="tuesday" />
          <AvailabilityCheckBox nameValue="wednesday" />
          <AvailabilityCheckBox nameValue="thursday" />
          <AvailabilityCheckBox nameValue="friday" />
          <AvailabilityCheckBox nameValue="saturday" />
          <AvailabilityCheckBox nameValue="sunday" />
          <button className="bg-white text-black p-2 rounded-md hover:bg-green-200" type="submit">
            Submit
          </button>
          {data && (
            <div>
              <p>
                {data.firstName} {data.lastName} {data.availability.map((day) => day)}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

interface AvailabilityCheckBoxProps {
  nameValue: string;
}
function AvailabilityCheckBox({nameValue}: AvailabilityCheckBoxProps) {
  return (
    <label className="flex flex-row gap-2">
      <input type="checkbox" name={"availability"} value={nameValue} />
      {nameValue.charAt(0).toUpperCase() + nameValue.slice(1)}
    </label>
  );
}
