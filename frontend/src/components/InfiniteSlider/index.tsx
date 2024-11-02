"use client";
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiasedbg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    index: 10,
    name: "Item 1",
    cost: 15.99,
  },
  {
    index: 9,
    name: "Item 2",
    cost: 25.49,
  },
  {
    index: 8,
    name: "Item 3",
    cost: 9.99,
  },
  {
    index: 7,
    name: "Item 4",
    cost: 45.0,
  },
  {
    index: 6,
    name: "Item 5",
    cost: 12.49,
  },
  {
    index: 5,
    name: "Item 6",
    cost: 29.99,
  },
  {
    index: 4,
    name: "Item 7",
    cost: 18.75,
  },
  {
    index: 1,
    name: "Item 8",
    cost: 35.99,
  },
  {
    index: 2,
    name: "Item 9",
    cost: 22.5,
  },
  {
    index: 3,
    name: "Item 10",
    cost: 19.99,
  },
];
