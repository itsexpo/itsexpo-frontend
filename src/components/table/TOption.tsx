import * as React from "react";

import clsxm from "@/lib/clsxm";

type TOptionProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  placeholder?: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function TOption({
  children,
  icon: Icon,
  placeholder,
  onChange,
  value,
}: TOptionProps) {
  return (
    <div
      className={clsxm(
        "flex items-center",
        "border-secondary-250 hover:border-primary-400 hover:ring-0"
      )}
    >
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            {Icon}
          </div>
        )}
        <select
          className={clsxm(
            "text-typo-secondary block rounded-md bg-transparent pl-8 pr-8 text-sm font-semibold",
            "border-none outline-none focus:border-none focus:outline-none focus:ring-0",
            "transition duration-200 hover:bg-white/70",
            "active:bg-white disabled:bg-danger-main disabled:brightness-95"
          )}
          value={value}
          onChange={onChange}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {children}
        </select>
      </div>
    </div>
  );
}
