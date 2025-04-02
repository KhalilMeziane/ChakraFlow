"use client"

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle () {
    const { toggleColorMode } = useColorMode()
    return (
        <IconButton
            alignSelf={"center"}
            size={"sm"}
            backgroundColor={useColorModeValue("white", "gray.700")}
            border={"1px"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            variant={"ghost"}
            aria-label={"Toggle Color Mode"}
            onClick={toggleColorMode}
            icon={useColorModeValue( <Moon size="16" />, <Sun size="16" />)}
        />
    )
}