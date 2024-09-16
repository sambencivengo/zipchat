"use client";
import React from "react";
import {Button} from "~/components/ui/button";
import {Input} from "~/components/ui/input";
import {Label} from "~/components/ui/label";

export function FlaskForm() {
  const [data, setData] = React.useState<{firstName: string; lastName: string; availability: string[]} | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  async function submit(formData: FormData) {
    try {
      const response = await fetch("/api/submit", {method: "POST", body: formData});
      if (!response.ok) {
        throw new Error("Oops! An unexpected occurred");
      }
      const result: {firstName: string; lastName: string; availability: string[]} = await response.json();
      setData(result);
    } catch (error: any) {
      setError(error.toString());
    }
  }
  return (
    <div className="flex w-full flex-col justify-center p-10 border rounded-md">
      <form action={submit}>
        <div className="w-full flex gap-2 flex-col items-center justify-center">
          <Label>First Name</Label>
          <Input className="text-black" name="firstName" />
          <Label>Last Name</Label>
          <Input className="text-black" name="lastName" />
          <AvailabilityCheckBox nameValue="monday" />
          <AvailabilityCheckBox nameValue="tuesday" />
          <AvailabilityCheckBox nameValue="wednesday" />
          <AvailabilityCheckBox nameValue="thursday" />
          <AvailabilityCheckBox nameValue="friday" />
          <AvailabilityCheckBox nameValue="saturday" />
          <AvailabilityCheckBox nameValue="sunday" />
          {error && <p className="text-error">{error}</p>}
          <Button type="submit">Submit</Button>
          {data && (
            <div>
              <p>
                {data.firstName} {data.lastName}
              </p>
              <div className="flex flex-row gap-2">
                {data.availability.map((day, idx) => (
                  <p key={idx}>{day.charAt(0).toUpperCase() + day.slice(1)}</p>
                ))}
              </div>
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
    <Label className="flex items-center gap-2">
      <Input type="checkbox" name={"availability"} value={nameValue} />
      {nameValue.charAt(0).toUpperCase() + nameValue.slice(1)}
    </Label>
  );
}
