import * as React from "react";

import clsxm from "@/lib/clsxm";

enum TypographyVariant {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "t",
  "p",
  "b1",
  "b2",
  "c",
}

enum TypographyColor {
  "primary",
  "secondary",
  "tertiary",
  "danger",
}

type TypographyProps<T extends React.ElementType> = {
  /** @default <p> tag */
  as?: T;
  className?: string;
  color?: keyof typeof TypographyColor;

  variant: keyof typeof TypographyVariant;
  children: React.ReactNode;
} & React.ComponentProps<T>;

export default function Typography<T extends React.ElementType>({
  as,
  children,
  className,
  color = "primary",
  variant,
  ...rest
}: TypographyProps<T>) {
  const Component = as || "p";
  return (
    <Component
      className={clsxm(
        //#region  //*=========== Variants ===========
        [
          variant === "h1" && ["text-[64px] md:text-[80px]"],
          variant === "h2" && ["text-[48px] md:text-[72px]"],
          variant === "h3" && ["text-[32px] md:text-[64px]"],
          variant === "h4" && ["text-[24px] md:text-[48px]"],
          variant === "h5" && ["text-[20px] md:text-[32px]"],
          variant === "h6" && ["text-[16px] md:text-[24px]"],
          variant === "t" && ["text-[20px]"],
          variant === "p" && ["text-[18px]"],
          variant === "b1" && ["text-[16px]"],
          variant === "b2" && ["text-[16px]"],
          variant === "c" && ["text-[14px]"],
        ],

        //#region  //*=========== Color ===========
        [
          color === "primary" && ["text-typo"],
          color === "secondary" && ["text-typo-secondary"],
          color === "tertiary" && ["text-typo-tertiary"],
          color === "danger" && ["text-danger-400"],
        ],
        //#endregion  //*======== Color ===========
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
