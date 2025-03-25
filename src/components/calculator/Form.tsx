"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FaCalculator, FaPhone, FaWhatsapp } from "react-icons/fa"
import { GrAmazon } from "react-icons/gr"
import { LiaArtstation } from "react-icons/lia"
import { SiCoinmarketcap, SiFlipkart } from "react-icons/si"
import { TbBrandShopee } from "react-icons/tb"
import * as z from "zod"

import { ProductCategories } from "@/lib/productCategories"
import { Plateforms, ResponseKeys } from "@/lib/types"
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table"

import { Form, FormField, FormItem, FormMessage } from "../ui/form"
import { Columns } from "./Column"

const formSchema = z.object({
  plateform: z.custom<Plateforms>(),
  fbf: z.enum(["fbf", "nfbf"]).optional(),
  szone: z.enum(["local", "regional", "national"]).optional(),
  pcat: z.string(),
  sellPrice: z.string(),
  weight: z.string(),
})

type ResponseType =
  | {
      [key in ResponseKeys]: number
    }
  | null
interface ICalculatorForm {
  defaultValue: {
    plateform: Plateforms
    sellPrice?: z.infer<typeof formSchema>["sellPrice"]
    fbf?: z.infer<typeof formSchema>["fbf"]
    szone?: z.infer<typeof formSchema>["szone"]
    weight?: string
  }
  root: boolean
}

export function CalculatorForm({
  defaultValue: {
    plateform,
    sellPrice = "500",
    fbf = "fbf",
    szone = "local",
    weight = "10",
  },
  root,
}: ICalculatorForm) {
  const [response, setResponse] = useState<ResponseType>()

  const [error, setError] = useState<string>()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plateform,
      sellPrice,
      fbf,
      szone,
      weight,
    },
  })

  function TitleCase(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(" ")
  }

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // make api call to backend with value comiing form frontend

    const api_url = "/api/calculator"

    const api_req_options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    }

    const res = await (await fetch(api_url, api_req_options)).json()
    if (res.error) {
      setError(() => res.error)
      setResponse(() => null)
    } else {
      setResponse(() => res)
      setError(() => "")
    }
  }

  const selectedPlateform = form.watch("plateform")

  // Platform display names for result section
  const platformInfo = {
    flipkart: {
      name: "Flipkart",
      color: "text-blue-500",
    },
    amazon: {
      name: "Amazon",
      color: "text-yellow-500",
    },
    myntra: {
      name: "Myntra",
      color: "text-pink-500",
    },
    ajio: {
      name: "AJIO",
      color: "text-indigo-500",
    },
    shopsy: {
      name: "Shopsy",
      color: "text-green-500",
    },
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Marketplace Fee Calculators</CardTitle>
              <CardDescription className="text-sm md:text-base">Calculate your selling fees and profit margins</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="plateform"
                render={({ field }) => (
                  <FormItem>
                    <RadioGroup
                      defaultValue={field.value}
                      className="grid grid-cols-2 md:grid-cols-4 gap-3"
                      onValueChange={field.onChange}
                    >
                      <div>
                        <RadioGroupItem
                          value="flipkart"
                          id="flipkart"
                          className="peer sr-only"
                          disabled={!root && plateform !== "flipkart"}
                        />
                        <Label
                          htmlFor="flipkart"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 md:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
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
                          disabled={!root && plateform !== "amazon"}
                        />
                        <Label
                          htmlFor="amazon"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 md:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <span className="flex w-8 h-8 justify-center">
                            <GrAmazon className="w-6 h-6" />
                          </span>
                          Amazon
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="myntra"
                          id="myntra"
                          className="peer sr-only"
                          disabled={!root && plateform !== "myntra"}
                        />
                        <Label
                          htmlFor="myntra"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 md:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <span className="flex w-8 h-8 justify-center">
                            <SiCoinmarketcap className="w-6 h-6" />
                          </span>
                          Myntra
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="ajio"
                          id="ajio"
                          className="peer sr-only"
                          disabled={!root && plateform !== "ajio"}
                        />
                        <Label
                          htmlFor="ajio"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 md:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <span className="flex w-8 h-8 justify-center">
                            <LiaArtstation className="w-6 h-6" />
                          </span>
                          AJIO
                        </Label>
                      </div>
                      {/* <div>
                        <RadioGroupItem
                          value="shopsy"
                          id="shopsy"
                          className="peer sr-only"
                          disabled={!root && plateform !== "shopsy"}
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
                      </div> */}
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="fbf"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 col-span-1">
                      <Label htmlFor="fbf">
                        {selectedPlateform === "flipkart" ? "FBF" : "FBA"}
                      </Label>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={
                          selectedPlateform === "myntra" ||
                          selectedPlateform === "ajio" ||
                          selectedPlateform === "shopsy"
                        }
                      >
                        <SelectTrigger id="fbf">
                          <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fbf">
                            {selectedPlateform === "flipkart" ? "FBF" : "FBA"}
                          </SelectItem>
                          <SelectItem value="nfbf">
                            {selectedPlateform === "flipkart" ? "NFBF" : "NFBA"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="szone"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 col-span-1">
                      <Label htmlFor="szone">Shipping Zone</Label>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={
                          selectedPlateform === "myntra" ||
                          selectedPlateform === "ajio" ||
                          selectedPlateform === "shopsy"
                        }
                      >
                        <SelectTrigger id="szone">
                          <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="local">Local</SelectItem>
                          <SelectItem value="regional">Regional</SelectItem>
                          <SelectItem value="national">National</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pcat"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 col-span-1 md:col-span-2">
                      <Label htmlFor="pcat">Product Category</Label>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger id="pcat">
                          <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                          {ProductCategories[selectedPlateform]?.map(
                            (elem, index) => (
                              <SelectItem value={elem[0]} key={index}>
                                {TitleCase(elem[1])}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="sellPrice"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <Label htmlFor="price">Selling Price</Label>
                      <Input id="price" placeholder="&#x20B9;" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <Label htmlFor="weight">
                        {selectedPlateform === "myntra" ||
                        selectedPlateform === "ajio"
                          ? "Discount (%)"
                          : "Weight (gram)"}{" "}
                      </Label>
                      <Input id="weight" placeholder="gm" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-base" type="submit">
                Calculate
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
      {error && (
        <div className="mt-4">
          <h4 className="text-center font-bold p-4 bg-violet-300 text-blue-900 rounded-md">
            {error}
          </h4>
        </div>
      )}
      {response && !error && (
        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg shadow-sm">
          <Table className="overflow-x-auto">
            <TableCaption className="mt-2 mb-4 text-base">Detailed Fee Analysis</TableCaption>
            <TableBody>
              {Object.keys(Columns[selectedPlateform]).map((key, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {
                        // @ts-ignore
                        Columns[selectedPlateform][key]
                      }
                    </TableCell>
                    <TableCell className="text-right">
                      {
                        // @ts-ignore
                        Math.round(response[key] * 100) / 100
                      }
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          {/* E-commerce Services Promotion Section */}
          <div className="mt-6 border-t pt-5">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold">Need help with your e-commerce business?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Our experts can help you optimize your{" "}
                {platformInfo[selectedPlateform]?.name || TitleCase(selectedPlateform)} seller account and increase profits
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`https://wa.me/+917451073504?text=Hi,%20I%20need%20help%20with%20my%20e-commerce%20business%20on%20${platformInfo[selectedPlateform]?.name || TitleCase(selectedPlateform)}`}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors shadow-sm"
              >
                <FaWhatsapp className="text-xl" />
                <span className="font-medium">WhatsApp Us</span>
              </a>
              <a
                href="tel:+917451073504"
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors shadow-sm"
              >
                <FaPhone className="text-lg" />
                <span className="font-medium">Call Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
