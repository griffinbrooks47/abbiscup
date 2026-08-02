'use client'

import { Button } from "@mantine/core";
import { IconArrowBigRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

/*
 * The site's blue call-to-action button. Renders as an <a> when given `href`
 * so the whole button navigates -- wrapping an <a> inside <Button> instead
 * leaves most of the button area dead.
 */

type CtaButtonProps = {
    children: ReactNode;
    href?: string;      // external destination
    to?: string;        // internal route
    height?: string;
    className?: string;
};

export function CtaButton({ children, href, to, height = "3rem", className }: CtaButtonProps) {

    const router = useRouter();

    const shared = {
        color: "#4169E1",
        w: "fit-content",
        h: height,
        justify: "center",
        rightSection: <IconArrowBigRight />,
        className,
        style: {
            fontSize: "1.15rem",
            border: "1.5px solid black",
            borderRadius: '11px',
            boxShadow: "7px 8px 0px -4px #000000ce",
        },
    };

    if (href) {
        return (
            <Button {...shared} component="a" href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </Button>
        )
    }

    return (
        <Button {...shared} onClick={() => to && router.push(to)}>
            {children}
        </Button>
    )
}
