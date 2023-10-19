"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  useForm,
  UseFormStateReturn,
} from "react-hook-form"
import { GrAmazon } from "react-icons/gr"
import { LiaArtstation } from "react-icons/lia"
import { SiFlipkart } from "react-icons/si"
import { TbBrandShopee } from "react-icons/tb"
import * as z from "zod"

import { ProductCategories } from "@/lib/productCategories"
import {
  AjioResponse,
  AmazonResponse,
  ColumnType,
  FlipkartResponse,
  MyntraResponse,
  Plateforms,
  ResponseKeys,
  ShopsyResponse,
} from "@/lib/types"
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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Columns } from "./Column"

const formSchema = z.object({
  plateform: z.enum(["flipkart", "amazon", "myntra", "shopsy", "ajio"]),
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

export function CalculatorForm() {
  const [response, setResponse] = useState<ResponseType>()

  const [error, setError] = useState<string>()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plateform: "flipkart",
      sellPrice: "100",
      fbf: "fbf",
      szone: "local",
      weight: "10",
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
    console.log({ res })
    if (res.error) {
      setError(() => res.error)
      setResponse(() => null)
    } else {
      setResponse(() => res)
      setError(() => "")
    }
  }

  const selectedPlateform: Plateforms = form.watch("plateform")

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Calculators</CardTitle>
              <CardDescription>Calculate your bills</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="plateform"
                render={({ field }) => (
                  <FormItem>
                    <RadioGroup
                      defaultValue={field.value}
                      className="grid grid-cols-4 gap-4"
                      onValueChange={field.onChange}
                    >
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
                          value="myntra"
                          id="myntra"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="myntra"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <span className="flex w-8 h-8 justify-center">
                            <TbBrandShopee className="w-6 h-6" />
                          </span>
                          Myntra
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="ajio"
                          id="ajio"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="ajio"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <span className="flex w-8 h-8 justify-center">
                            <LiaArtstation className="w-6 h-6" />
                          </span>
                          AJIO
                        </Label>
                      </div>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="fbf"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 col-span-1">
                      <Label htmlFor="fbf">FBF</Label>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={
                          selectedPlateform === "myntra" ||
                          selectedPlateform === "ajio"
                        }
                      >
                        <SelectTrigger id="fbf">
                          <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fbf">FBF</SelectItem>
                          <SelectItem value="nfbf">NFBF</SelectItem>
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
                          selectedPlateform === "ajio"
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
                    <FormItem className="grid gap-2 col-span-2">
                      <Label htmlFor="pcat">Product Category</Label>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger id="pcat">
                          <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                          {ProductCategories[selectedPlateform].map(
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
                      {selectedPlateform === "myntra"
                        ? "Discount (%)"
                        : "Weight (gram)"}{" "}
                    </Label>
                    <Input id="weight" placeholder="gm" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Calculate
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
      {error && (
        <h4 className="text-center font-bold p-4 bg-violet-300 text-blue-900">
          {error}
        </h4>
      )}
      {response && !error && (
        <>
          <div className="mv-10">
            <Table>
              <TableCaption>Detailed Analysis.</TableCaption>
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
          </div>
        </>
      )}
    </>
  )
}
