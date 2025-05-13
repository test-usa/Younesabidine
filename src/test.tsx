"use client";

import { useState } from "react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle"; // [^1]

export default function DualRangeSliderDemo() {
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [showLabels, setShowLabels] = useState(true);

  // Format as currency
  const formatPrice = (value: number) => `$${value}`;

  // Format as percentage
  const formatPercent = (value: number) => `${value}%`;

  return (
    <div className="container mx-auto py-10 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        DualRangeSlider Examples
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Price Range Example */}
        <Card>
          <CardHeader>
            <CardTitle>Price Range</CardTitle>
            <CardDescription>Select minimum and maximum price</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DualRangeSlider
              defaultValue={[20, 80]}
              min={0}
              max={100}
              step={1}
              formatValue={formatPrice}
              showValues={showLabels}
              onValueChange={setPriceRange}
            />
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                Selected range: {formatPrice(priceRange[0])} -{" "}
                {formatPrice(priceRange[1])}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Percentage Example */}
        <Card>
          <CardHeader>
            <CardTitle>Percentage Range</CardTitle>
            <CardDescription>Select percentage range</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DualRangeSlider
              defaultValue={[25, 75]}
              min={0}
              max={100}
              step={5}
              formatValue={formatPercent}
              showValues={showLabels}
            />
          </CardContent>
        </Card>

        {/* Temperature Example */}
        <Card>
          <CardHeader>
            <CardTitle>Temperature Range (°F)</CardTitle>
            <CardDescription>Select temperature range</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DualRangeSlider
              defaultValue={[32, 75]}
              min={0}
              max={100}
              step={1}
              formatValue={(value) => `${value}°F`}
              showValues={showLabels}
            />
          </CardContent>
        </Card>

        {/* Custom Steps Example */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Steps</CardTitle>
            <CardDescription>Range with larger step increments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DualRangeSlider
              defaultValue={[20, 80]}
              min={0}
              max={100}
              step={10}
              showValues={showLabels}
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Toggle
              pressed={showLabels}
              onPressedChange={setShowLabels}
              aria-label="Toggle value labels"
            >
              Show value labels
            </Toggle>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
("use client");

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

interface DualRangeSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  formatValue?: (value: number) => string;
  showValues?: boolean;
  className?: string;
}

const DualRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  DualRangeSliderProps
>(({ className, formatValue, showValues = true, ...props }, ref) => {
  const [values, setValues] = React.useState(props.defaultValue || [25, 75]);

  const handleValueChange = (newValues: number[]) => {
    setValues(newValues);
    if (props.onValueChange) {
      props.onValueChange(newValues);
    }
  };

  const format = formatValue || ((value: number) => `${value}`);

  return (
    <div className="space-y-4">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
        defaultValue={undefined}
        value={values}
        onValueChange={handleValueChange}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        {values.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Root>

      {showValues && (
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">
            {format(values[0])}
          </span>
          <span className="text-sm text-muted-foreground">
            {format(values[1])}
          </span>
        </div>
      )}
    </div>
  );
});

DualRangeSlider.displayName = "DualRangeSlider";

export { DualRangeSlider };
