"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle, CreditCard, Calendar, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonationForm() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("50")
  const [customAmount, setCustomAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>Your generosity makes a real difference in peoples lives.</CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium">Thank You for Your Donation!</h3>
            <p className="mt-2 text-muted-foreground">
              Your generosity will help families in need. A receipt has been sent to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Donation Type</Label>
                <Tabs defaultValue="one-time" onValueChange={setDonationType}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="one-time">One-time</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="space-y-2">
                <Label>Select Amount</Label>
                <RadioGroup
                  defaultValue="50"
                  className="grid grid-cols-3 gap-2"
                  value={amount}
                  onValueChange={(value) => {
                    setAmount(value)
                    if (value !== "custom") {
                      setCustomAmount("")
                    }
                  }}
                >
                  <Label
                    htmlFor="amount-50"
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                      amount === "50" ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    <RadioGroupItem value="50" id="amount-50" className="sr-only" />
                    ₹50
                  </Label>
                  <Label
                    htmlFor="amount-100"
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                      amount === "100" ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                    ₹100
                  </Label>
                  <Label
                    htmlFor="amount-250"
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                      amount === "250" ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    <RadioGroupItem value="250" id="amount-250" className="sr-only" />
                    ₹250
                  </Label>
                  <Label
                    htmlFor="amount-500"
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                      amount === "500" ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    <RadioGroupItem value="500" id="amount-500" className="sr-only" />
                    ₹500
                  </Label>
                  <Label
                    htmlFor="amount-1000"
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                      amount === "1000" ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    <RadioGroupItem value="1000" id="amount-1000" className="sr-only" />
                    ₹1000
                  </Label>
                  <Label
                    htmlFor="amount-custom"
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                      amount === "custom" ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                    Custom
                  </Label>
                </RadioGroup>

                {amount === "custom" && (
                  <div className="mt-2">
                    <Label htmlFor="custom-amount">Custom Amount</Label>
                    <div className="relative mt-1">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-muted-foreground sm:text-sm">₹</span>
                      </div>
                      <Input
                        type="number"
                        id="custom-amount"
                        className="pl-7"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        min="1"
                        step="1"
                        required={amount === "custom"}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Personal Information</Label>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name" className="sr-only">
                        First Name
                      </Label>
                      <Input id="first-name" placeholder="First Name" required />
                    </div>
                    <div>
                      <Label htmlFor="last-name" className="sr-only">
                        Last Name
                      </Label>
                      <Input id="last-name" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="sr-only">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="Email Address" required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Payment Information</Label>
                <div className="rounded-md border p-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="card-number" className="sr-only">
                        Card Number
                      </Label>
                      <div className="relative">
                        <Input id="card-number" placeholder="Card Number" required />
                        <CreditCard className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="sr-only">
                          Expiry Date
                        </Label>
                        <div className="relative">
                          <Input id="expiry" placeholder="MM/YY" required />
                          <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="sr-only">
                          CVC
                        </Label>
                        <div className="relative">
                          <Input id="cvc" placeholder="CVC" required />
                          <Lock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" className="mt-6 w-full" disabled={isSubmitting}>
              {isSubmitting
                ? "Processing..."
                : `Donate ${amount === "custom" ? `₹${customAmount}` : `₹${amount}`} ${donationType === "monthly" ? "Monthly" : ""}`}
            </Button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>Secure donation processed by Stripe</span>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

