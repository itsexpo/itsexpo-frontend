import Link, { LinkProps } from "next/link";
import * as React from "react";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, "href">;
} & React.ComponentPropsWithRef<"a">;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith("/") && !href.startsWith("#");

    if (!isNewTab) {
      return (
        <Link href={href} {...nextLinkProps} className={className}>
          {children}
        </Link>
      );
    }

    return (
      <Link
        ref={ref}
        href={href ? (href.startsWith("#") ? href : href) : "#"}
        {...nextLinkProps}
        className={className}
        {...rest}
      >
        {children}
      </Link>
    );
  }
);

export default UnstyledLink;
