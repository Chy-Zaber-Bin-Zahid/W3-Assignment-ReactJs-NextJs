import { Button } from "@nextui-org/react";

interface NavItem {
  label: string;
  value: string;
}

export default function Overview() {
  const navItems: NavItem[] = [
    { label: "Overview", value: "overview" },
    { label: "Amenities", value: "amenities" },
    { label: "Policies", value: "policies" },
  ];

  return (
    <div className="w-full border-b">
      <div className="flex max-w-screen-xl mx-auto">
        {navItems.map((item: NavItem) => (
          <Button
            key={item.value}
            className={`px-6 py-4 relative ${
              item.label === "Overview"
                ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
