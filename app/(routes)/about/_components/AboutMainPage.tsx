"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const AboutMainPage = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        In
      </Button>
      <Button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </Button>
      <div>{count}</div>
    </div>
  );
};

export default AboutMainPage;
