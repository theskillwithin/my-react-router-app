import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
}

export function Select({
  options,
  value,
  onValueChange,
  placeholder = "Select an option...",
}: SelectProps) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "6px",
          padding: "8px 12px",
          width: "100%",
          fontSize: "16px",
          color: "black",
          cursor: "pointer",
        }}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown style={{ width: "16px", height: "16px" }} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Content
        position="popper"
        sideOffset={4}
        style={{
          backgroundColor: "white",
          borderRadius: "6px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          zIndex: 50,
        }}
      >
        <SelectPrimitive.ScrollUpButton
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
            backgroundColor: "#f8f9fa",
            cursor: "default",
          }}
        >
          <ChevronUp style={{ width: "16px", height: "16px" }} />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport>
          {options.map((option) => (
            <SelectPrimitive.Item
              key={option.value}
              value={option.value}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
                userSelect: "none",
                cursor: "pointer",
              }}
            >
              <SelectPrimitive.ItemText>
                {option.label}
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator style={{ marginLeft: "8px" }}>
                <Check style={{ width: "16px", height: "16px" }} />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
            backgroundColor: "#f8f9fa",
            cursor: "default",
          }}
        >
          <ChevronDown style={{ width: "16px", height: "16px" }} />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
}
