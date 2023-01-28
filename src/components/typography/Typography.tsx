import * as React from "react";

import clsxm from "@/lib/clsxm";

enum TypographyVariant {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "title",
  "paragraph",
  "body",
  "button",
  "caption",
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
  /**
   * | Variant | Size Class | Font Size | Font Weight |
   * | :------ | :--------- | :-------- | :---------- |
   * | h1      | text-2xl   | 24px      | 600         |
   * | h2      | text-xl    | 20px      | 600         |
   * | h3      | text-lg    | 18px      | 600         |
   * | h4      | text-base  | 16px      | 700         |
   * | h5      | text-base  | 16px      | 600         |
   * | h6      | text-sm    | 14px      | 600         |
   * | s1      | text-lg    | 18px      | 500         |
   * | s2      | text-base  | 16px      | 500         |
   * | s3      | text-sm    | 14px      | 500         |
   * | s4      | text-xs    | 12px      | 500         |
   * | b1      | text-lg    | 18px      | 400         |
   * | b2      | text-base  | 16px      | 400         |
   * | b3      | text-xs    | 14px      | 400         |
   * | c1      | text-xs    | 12px      | 400         |
   * | c2      | -          | 11px      | 400         |
   */
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
          variant === "h1" && ["text-[80px] leading-[96px]"],
          variant === "h2" && ["text-[72px] leading-[90px]"],
          variant === "h3" && ["text-[64px] leading-[84px]"],
          variant === "h4" && ["text-[48px] leading-[64px]"],
          variant === "h5" && ["text-[32px] leading-[48px]"],
          variant === "h6" && ["text-[24px] leading-[32px]"],
          variant === "title" && ["text-[20px] leading-[24px]"],
          variant === "paragraph" && ["text-[18px] leading-[24px]"],
          variant === "body" && ["text-[16px] leading-[24px]"],
          variant === "button" && ["text-[16px] leading-[24px]"],
          variant === "caption" && ["text-[14px] leading-[24px]"],
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
