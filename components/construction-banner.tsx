"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export function ConstructionBanner() {
  return (
    <div className="sticky top-0 z-[60] grid place-content-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 py-3 border-b">
      <div className="mb-1.5 w-fit rounded-full bg-secondary/20">
        <div className="flex origin-top-left items-center rounded-full border border-secondary/30 bg-white p-0.5 text-sm transition-transform hover:-rotate-2">
          <span className="rounded-full bg-primary px-3 py-1 font-medium text-white">
            NOTICE
          </span>
          <span className="ml-2 mr-2 inline-block text-secondary">
            Website Under Construction
          </span>
          <FiArrowUpRight className="mr-2 inline-block text-secondary" />
        </div>
      </div>
    </div>
  );
}

