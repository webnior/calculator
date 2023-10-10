"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { GrAmazon } from "react-icons/gr"
import { SiFlipkart } from "react-icons/si"
import { TbBrandShopee } from "react-icons/tb"
import * as z from "zod"

import { Button } from "@/components/ui/new-york/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/new-york/card"
import { Input } from "@/components/ui/new-york/input"
import { Label } from "@/components/ui/new-york/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/new-york/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/new-york/select"
import { Icons } from "@/components/calculator/icons"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function CalculatorForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculators</CardTitle>
        <CardDescription>Calculate your bills</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
          <div>
            <RadioGroupItem
              value="flipkart"
              id="flipkart"
              className="peer sr-only"
            />
            <Label
              htmlFor="flipkart"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="flex w-8 h-8 justify-center">
                <SiFlipkart className="w-6 h-6" />
              </span>
              Flipkart
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="amazon"
              id="amazon"
              className="peer sr-only"
            />
            <Label
              htmlFor="amazon"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="flex w-8 h-8 justify-center">
                <GrAmazon className="w-6 h-6" />
              </span>
              Amazon
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="shopsy"
              id="shopsy"
              className="peer sr-only"
            />
            <Label
              htmlFor="shopsy"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="flex w-8 h-8 justify-center">
                <TbBrandShopee className="w-6 h-6" />
              </span>
              Shopsy
            </Label>
          </div>
        </RadioGroup>
        <div className="grid grid-cols-4 gap-4">
          <div className="grid gap-2 col-span-1">
            <Label htmlFor="fbf">FBF</Label>
            <Select>
              <SelectTrigger id="fbf">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">FBF</SelectItem>
                <SelectItem value="2">NFBF</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 col-span-1">
            <Label htmlFor="szone">Shoping Zone</Label>
            <Select>
              <SelectTrigger id="szone">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Local</SelectItem>
                <SelectItem value="2">Regional</SelectItem>
                <SelectItem value="3">National</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 col-span-2">
            <Label htmlFor="pcat">Product Category</Label>
            <Select>
              <SelectTrigger id="pcat">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Clothing &amp; Accessories</SelectItem>
                <SelectItem value="2">Food &amp; Nutrition</SelectItem>
                <SelectItem value="3">
                  Kitchen Cookware &amp; Serveware
                </SelectItem>
                <SelectItem value="4">Edible Oil</SelectItem>
                <SelectItem value="5">Health &amp; Beauty</SelectItem>
                <SelectItem value="6">Footwear</SelectItem>
                <SelectItem value="7">Painting &amp; Posters</SelectItem>
                <SelectItem value="8">Artificial Jewelry</SelectItem>
                <SelectItem value="9">Soap</SelectItem>
                <SelectItem value="10">Cosmetic</SelectItem>
                <SelectItem value="11">Health &amp; Wellness</SelectItem>
                <SelectItem value="12">Clothing &amp; Apparels</SelectItem>
                <SelectItem value="13">Home &amp; Kitchen</SelectItem>
                <SelectItem value="14">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="price">Selling Price</Label>
          <Input id="price" placeholder="&#x20B9;" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="weight">Weight (gram) </Label>
          <Input id="weight" placeholder="gm" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Calculate</Button>
      </CardFooter>
    </Card>
  )
}
