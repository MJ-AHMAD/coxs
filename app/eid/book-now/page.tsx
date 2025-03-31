"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, CreditCard, MapPin, Phone, Mail, CheckCircle, Users, CalendarDays, Sparkles, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function BookNowPage() {
  const [bookingType, setBookingType] = useState("package")
  const [selectedPackage, setSelectedPackage] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [guests, setGuests] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    setFormSubmitted(true)
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/cox1.png"
            alt="Cox's Bazar Beach"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <Badge className="bg-primary/80 hover:bg-primary/90 mb-4 text-white">Eid Special 2025</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight text-shadow-lg">
            Book Your Cox's Bazar Experience
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Complete your booking in just a few simple steps</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {formSubmitted ? (
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Booking Request Received!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for your booking request. We've received your details and will contact you within 24 hours
                  to confirm your reservation.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg w-full max-w-md mb-6">
                  <p className="font-medium">A confirmation email has been sent to your email address.</p>
                </div>
                <Button asChild>
                  <Link href="/eid-special">Return to Eid Special Page</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Complete Your Booking</CardTitle>
                    <CardDescription>Fill in the details below to book your Eid holiday experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Booking Type Selection */}
                      <div className="space-y-4">
                        <Label>What would you like to book?</Label>
                        <Tabs defaultValue="package" className="w-full" onValueChange={setBookingType}>
                          <TabsList className="grid grid-cols-4 mb-4">
                            <TabsTrigger value="package">Package</TabsTrigger>
                            <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                            <TabsTrigger value="transport">Transport</TabsTrigger>
                            <TabsTrigger value="activity">Activity</TabsTrigger>
                          </TabsList>

                          <TabsContent value="package" className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="package-select">Select Package</Label>
                              <Select onValueChange={setSelectedPackage}>
                                <SelectTrigger id="package-select">
                                  <SelectValue placeholder="Choose a package" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="beach-party">Beach Party Package (৳8,999)</SelectItem>
                                  <SelectItem value="adventure-seekers">Adventure Seekers (৳12,499)</SelectItem>
                                  <SelectItem value="island-hopping">Island Hopping (৳15,999)</SelectItem>
                                  <SelectItem value="budget-beach">Budget Beach Getaway (৳3,999)</SelectItem>
                                  <SelectItem value="extreme-adventure">Extreme Adventure (৳13,499)</SelectItem>
                                  <SelectItem value="premium-retreat">Premium Retreat (৳24,999)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </TabsContent>

                          <TabsContent value="accommodation" className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="accommodation-select">Select Accommodation</Label>
                              <Select>
                                <SelectTrigger id="accommodation-select">
                                  <SelectValue placeholder="Choose accommodation" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="luxury-hotel">Luxury Hotel (from ৳6,000/night)</SelectItem>
                                  <SelectItem value="budget-hotel">Budget Hotel (from ৳1,500/night)</SelectItem>
                                  <SelectItem value="resort">Resort & Cottages (from ৳3,500/night)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </TabsContent>

                          <TabsContent value="transport" className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="transport-select">Select Transport</Label>
                              <Select>
                                <SelectTrigger id="transport-select">
                                  <SelectValue placeholder="Choose transport" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="bus">Bus Tickets (from ৳800)</SelectItem>
                                  <SelectItem value="flight">Flight Tickets (from ৳4,500)</SelectItem>
                                  <SelectItem value="car">Car Rental (from ৳2,500/day)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </TabsContent>

                          <TabsContent value="activity" className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="activity-select">Select Activity</Label>
                              <Select>
                                <SelectTrigger id="activity-select">
                                  <SelectValue placeholder="Choose an activity" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="cruise-party">Sunset Cruise Party (৳2,999)</SelectItem>
                                  <SelectItem value="volleyball">Beach Volleyball Tournament (৳1,500)</SelectItem>
                                  <SelectItem value="food-festival">Eid Food Festival (৳1,200)</SelectItem>
                                  <SelectItem value="beach-party">Midnight Beach Party (৳2,500)</SelectItem>
                                  <SelectItem value="night-party">Beach Night Party (৳2,500)</SelectItem>
                                  <SelectItem value="spa">Luxury Spa & Wellness (৳3,500)</SelectItem>
                                  <SelectItem value="photoshoot">Instagram-Worthy Photoshoot (৳4,500)</SelectItem>
                                  <SelectItem value="adventure-pack">Adrenaline Adventure Pack (৳7,500)</SelectItem>
                                  <SelectItem value="luxury-cruise">Sunset Luxury Cruise (৳5,500)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>

                      {/* Date and Guests */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="check-in">Check-in Date</Label>
                          <div className="relative">
                            <Input id="check-in" type="date" required />
                            <CalendarDays className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="check-out">Check-out Date</Label>
                          <div className="relative">
                            <Input id="check-out" type="date" required />
                            <CalendarDays className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="guests">Number of Guests</Label>
                          <div className="flex items-center">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => setGuests(Math.max(1, guests - 1))}
                              className="rounded-r-none"
                            >
                              -
                            </Button>
                            <Input
                              id="guests"
                              type="number"
                              min="1"
                              value={guests}
                              onChange={(e) => setGuests(Number.parseInt(e.target.value) || 1)}
                              className="rounded-none text-center"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => setGuests(guests + 1)}
                              className="rounded-l-none"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="special-requests">Special Requests</Label>
                          <Select>
                            <SelectTrigger id="special-requests">
                              <SelectValue placeholder="Any special requests?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">None</SelectItem>
                              <SelectItem value="accessibility">Accessibility Requirements</SelectItem>
                              <SelectItem value="dietary">Dietary Restrictions</SelectItem>
                              <SelectItem value="celebration">Celebration/Special Occasion</SelectItem>
                              <SelectItem value="other">Other (please specify)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" required />
                          </div>
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="space-y-2">
                        <Label htmlFor="additional-info">Additional Information</Label>
                        <Textarea
                          id="additional-info"
                          placeholder="Please provide any additional details or requirements for your booking"
                          rows={4}
                        />
                      </div>

                      {/* Payment Method */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Payment Method</h3>
                        <RadioGroup defaultValue="card">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4" /> Credit/Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bkash" id="bkash" />
                            <Label htmlFor="bkash">bKash</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="nagad" id="nagad" />
                            <Label htmlFor="nagad">Nagad</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="rocket" id="rocket" />
                            <Label htmlFor="rocket">Rocket</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="terms" required />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="terms" className="text-sm font-normal">
                              I agree to the{" "}
                              <Link href="/eid-special/terms-of-service" className="text-primary hover:underline">
                                Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link href="/eid-special/privacy-policy" className="text-primary hover:underline">
                                Privacy Policy
                              </Link>
                            </Label>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="marketing" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="marketing" className="text-sm font-normal">
                              I would like to receive marketing communications about special offers and promotions
                            </Label>
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="w-full">
                        Complete Booking
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div>
                <div className="space-y-6">
                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Need Help?</CardTitle>
                      <CardDescription>Our team is ready to assist you</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Call Us</p>
                          <p className="text-muted-foreground">+880 1234 567890</p>
                          <p className="text-sm text-muted-foreground">Daily: 9 AM - 10 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Email Us</p>
                          <p className="text-muted-foreground">bookings@coxsbazareid.com</p>
                          <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Visit Us</p>
                          <p className="text-muted-foreground">Cox's Bazar Main Beach Road</p>
                          <p className="text-sm text-muted-foreground">Cox's Bazar, Bangladesh</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Booking Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Info className="h-5 w-5 text-primary" />
                        <p className="text-sm">Instant confirmation for most bookings</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <p className="text-sm">Free cancellation up to 48 hours before check-in</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <p className="text-sm">Group discounts available for 5+ guests</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <p className="text-sm">Special Eid offers with exclusive benefits</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Why Book With Us */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Why Book With Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-sm">Best price guarantee</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-sm">Verified local operators</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-sm">24/7 customer support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-sm">Secure payment options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-sm">Customizable packages</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Cox's Bazar Eid Special</h3>
              <p className="text-gray-400 mb-4">
                Your ultimate destination for Eid holiday packages and experiences in Cox's Bazar.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/eid-special" className="hover:text-primary transition-colors">
                    Eid Special Packages
                  </Link>
                </li>
                <li>
                  <Link href="/eid-special/book-now" className="hover:text-primary transition-colors">
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/eid-special/privacy-policy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/eid-special/terms-of-service" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span>Cox's Bazar Main Beach Road, Cox's Bazar, Bangladesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+880 1234 567890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@coxsbazareid.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Cox's Bazar Eid Special. All rights reserved. We value your privacy and are
              committed to protecting your personal information.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

