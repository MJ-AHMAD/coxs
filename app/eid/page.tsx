"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Instagram,
  Facebook,
  Twitter,
  Music,
  Sparkles,
  Camera,
  Users,
  Clock,
  Tag,
  Heart,
  Share2,
  ChevronRight,
  MessageCircle,
  Bus,
  Plane,
  Car,
  Hotel,
  Building,
  Home,
  Waves,
  Ship,
  UtensilsCrossed,
  MapPin,
  Phone,
  Mail,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EidSpecial() {
  const [activeTab, setActiveTab] = useState("trending")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl mx-auto leading-tight text-shadow-lg animate-fade-up">
            Celebrate Eid at Cox's Bazar with <span className="text-primary-foreground">Epic Vibes</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-shadow-md animate-fade-up animation-delay-200">
            Exclusive packages for the young and adventurous this Eid holiday
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8" asChild>
              <Link href="/eid-special/book-now">Book Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
              asChild
            >
              <Link href="/eid-special/book-now">Explore Packages</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
          <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full">
            <Facebook className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full">
            <Twitter className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Trending Packages Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <Badge className="bg-primary/10 text-primary mb-2">Limited Time Offers</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Eid Holiday Packages</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Specially curated experiences for the Eid holidays, designed for the young and adventurous
              </p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0 gap-2" asChild>
              <Link href="/eid-special/book-now">
                View All Packages <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Tabs defaultValue="trending" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="trending" className="text-sm md:text-base">
                Trending
              </TabsTrigger>
              <TabsTrigger value="budget" className="text-sm md:text-base">
                Budget-Friendly
              </TabsTrigger>
              <TabsTrigger value="adventure" className="text-sm md:text-base">
                Adventure
              </TabsTrigger>
              <TabsTrigger value="luxury" className="text-sm md:text-base">
                Premium
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trending" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Package 1 */}
                <Card className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-60">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/discover01.png"
                      alt="Beach Party Package"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">Most Popular</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-black/50 text-white border-none">
                        3 Days
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">Beach Party Package</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">
                        20% OFF
                      </Badge>
                    </div>
                    <CardDescription>The ultimate beach experience with exclusive parties</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="h-4 w-4 text-primary" />
                      <span>For groups of 4-8 people</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Music className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Exclusive beach party with DJ</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Beachside bonfire experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Professional photoshoot included</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">৳8,999</span>
                        <span className="text-muted-foreground line-through ml-2">৳11,999</span>
                      </div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <Link href="/eid-special/book-now">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Package 2 */}
                <Card className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-60">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/discover02.png"
                      alt="Adventure Seekers"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-black/50 text-white border-none">
                        4 Days
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">Adventure Seekers</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">
                        15% OFF
                      </Badge>
                    </div>
                    <CardDescription>Thrilling activities for the adventurous</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Perfect for couples and friends</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Parasailing and jet skiing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Hiking to Himchari waterfall</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Night camping on the beach</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">৳12,499</span>
                        <span className="text-muted-foreground line-through ml-2">৳14,999</span>
                      </div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <Link href="/eid-special/book-now">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Package 3 */}
                <Card className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-60">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/discover03.png"
                      alt="Island Hopping"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">New</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-black/50 text-white border-none">
                        5 Days
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">Island Hopping</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">
                        25% OFF
                      </Badge>
                    </div>
                    <CardDescription>Explore St. Martin's and surrounding islands</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Small groups of 6-10 people</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Overnight stay at St. Martin's</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Snorkeling and coral viewing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Fresh seafood experience</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">৳15,999</span>
                        <span className="text-muted-foreground line-through ml-2">৳19,999</span>
                      </div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <Link href="/eid-special/book-now">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="budget" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Budget Package 1 */}
                <Card className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-60">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/the0.png"
                      alt="Budget Beach Getaway"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500 text-white">Best Value</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-black/50 text-white border-none">
                        2 Days
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">Budget Beach Getaway</CardTitle>
                      <Badge variant="outline" className="text-green-500 border-green-500">
                        30% OFF
                      </Badge>
                    </div>
                    <CardDescription>Affordable beach fun for students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Ideal for student groups</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Hostel-style accommodation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Beach games and activities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Group discounts available</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">৳3,999</span>
                        <span className="text-muted-foreground line-through ml-2">৳5,999</span>
                      </div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <Link href="/eid-special/book-now">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* More budget packages would go here */}
              </div>
            </TabsContent>

            <TabsContent value="adventure" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Adventure Package 1 */}
                <Card className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-60">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/marine00.png"
                      alt="Extreme Adventure"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white">Extreme</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-black/50 text-white border-none">
                        3 Days
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">Extreme Adventure</CardTitle>
                      <Badge variant="outline" className="text-orange-500 border-orange-500">
                        15% OFF
                      </Badge>
                    </div>
                    <CardDescription>For thrill-seekers and adrenaline junkies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="h-4 w-4 text-primary" />
                      <span>For the brave-hearted</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Cliff jumping at Himchari</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Night kayaking with LED lights</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Jungle trekking expedition</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">৳13,499</span>
                        <span className="text-muted-foreground line-through ml-2">৳15,999</span>
                      </div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <Link href="/eid-special/book-now">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* More adventure packages would go here */}
              </div>
            </TabsContent>

            <TabsContent value="luxury" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Luxury Package 1 */}
                <Card className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-60">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/himchari00.png"
                      alt="Premium Retreat"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-500 text-white">Premium</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-black/50 text-white border-none">
                        4 Days
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">Premium Retreat</CardTitle>
                      <Badge variant="outline" className="text-purple-500 border-purple-500">
                        10% OFF
                      </Badge>
                    </div>
                    <CardDescription>Luxury experience with exclusive perks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="h-4 w-4 text-primary" />
                      <span>For those who deserve the best</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">5-star resort accommodation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Private beach access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Spa and wellness treatments</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">৳24,999</span>
                        <span className="text-muted-foreground line-through ml-2">৳27,999</span>
                      </div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <Link href="/eid-special/book-now">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* More luxury packages would go here */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-2">Individual Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Just What You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Need only specific services? We've got you covered with individual bookings tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Transportation Card */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Transportation</CardTitle>
                  <Badge variant="outline" className="text-primary border-primary">
                    Fast Booking
                  </Badge>
                </div>
                <CardDescription>Get to Cox's Bazar hassle-free</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bus className="h-5 w-5 text-primary" />
                      <span className="font-medium">Bus Tickets</span>
                    </div>
                    <Badge>From ৳800</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AC & Non-AC buses from Dhaka, Chittagong, and other major cities
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/eid-special/book-now">Book Bus</Link>
                  </Button>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-primary" />
                      <span className="font-medium">Flight Tickets</span>
                    </div>
                    <Badge>From ৳4,500</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Domestic flights from Dhaka and Chittagong to Cox's Bazar
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/eid-special/book-now">Book Flight</Link>
                  </Button>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-primary" />
                      <span className="font-medium">Car Rental</span>
                    </div>
                    <Badge>From ৳2,500/day</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Private cars, SUVs, and microbuses with or without driver
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/eid-special/book-now">Rent Car</Link>
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <Link href="/eid-special/book-now">View All Transport Options</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Accommodation Card */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Accommodation</CardTitle>
                  <Badge variant="outline" className="text-primary border-primary">
                    Best Rates
                  </Badge>
                </div>
                <CardDescription>Find your perfect stay in Cox's Bazar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Hotel className="h-5 w-5 text-primary" />
                      <span className="font-medium">Luxury Hotels</span>
                    </div>
                    <Badge>From ৳6,000/night</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    5-star beachfront hotels with all amenities and ocean views
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/eid-special/book-now">Book Luxury Hotel</Link>
                  </Button>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      <span className="font-medium">Budget Hotels</span>
                    </div>
                    <Badge>From ৳1,500/night</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Comfortable stays close to the beach at affordable prices
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/eid-special/book-now">Book Budget Hotel</Link>
                  </Button>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5 text-primary" />
                      <span className="font-medium">Resorts & Cottages</span>
                    </div>
                    <Badge>From ৳3,500/night</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Private cottages and resort stays for a unique experience
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/eid-special/book-now">Book Resort</Link>
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <Link href="/eid-special/book-now">View All Accommodation</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Experiences Card */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Experiences</CardTitle>
                  <Badge variant="outline" className="text-primary border-primary">
                    Trending
                  </Badge>
                </div>
                <CardDescription>Add exciting activities to your trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Waves className="h-5 w-5 text-primary" />
                      <span className="font-medium">Water Sports</span>
                    </div>
                    <Badge>From ৳1,200</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Jet skiing, parasailing, banana boat rides, and more</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/eid-special/book-now">Book Water Sports</Link>
                  </Button>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Ship className="h-5 w-5 text-primary" />
                      <span className="font-medium">Island Tours</span>
                    </div>
                    <Badge>From ৳3,000</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Day trips to St. Martin's, Sonadia, and Maheshkhali islands
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/eid-special/book-now">Book Island Tour</Link>
                  </Button>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="h-5 w-5 text-primary" />
                      <span className="font-medium">Food Tours</span>
                    </div>
                    <Badge>From ৳1,500</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Explore local cuisine with guided food tours and cooking classes
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/eid-special/book-now">Book Food Tour</Link>
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <Link href="/eid-special/book-now">View All Experiences</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Eid Activities */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-2">Eid Special</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Eid Activities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Make your Eid holiday memorable with these special activities available only during the festival season
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Activity 1 */}
            <Card className="group hover:shadow-lg transition-all overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/water00.png"
                  alt="Sunset Cruise Party"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">Sunset Cruise Party</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>4 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Tag className="h-4 w-4 text-primary" />
                  <span>৳2,999 per person</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Celebrate Eid on a luxury cruise with music, dinner, and the most beautiful sunset views
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary/90 hover:bg-primary" asChild>
                  <Link href="/eid-special/book-now">Book Activity</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Activity 2 */}
            <Card className="group hover:shadow-lg transition-all overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/buddhist00.png"
                  alt="Beach Volleyball Tournament"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">Beach Volleyball Tournament</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Full day event</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Tag className="h-4 w-4 text-primary" />
                  <span>৳1,500 per team</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join our Eid special volleyball tournament with prizes and beachside BBQ for participants
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary/90 hover:bg-primary" asChild>
                  <Link href="/eid-special/book-now">Book Activity</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Activity 3 */}
            <Card className="group hover:shadow-lg transition-all overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/local00.png"
                  alt="Eid Food Festival"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">Eid Food Festival</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Evening event</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Tag className="h-4 w-4 text-primary" />
                  <span>৳1,200 per person</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Experience traditional and fusion Eid delicacies from top local chefs in a beachside setting
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary/90 hover:bg-primary" asChild>
                  <Link href="/eid-special/book-now">Book Activity</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Activity 4 */}
            <Card className="group hover:shadow-lg transition-all overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/hiking0.png"
                  alt="Midnight Beach Party"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">Midnight Beach Party</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>10 PM - 3 AM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Tag className="h-4 w-4 text-primary" />
                  <span>৳2,500 per person</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Exclusive Eid night beach party with top DJs, fire shows, and unlimited refreshments
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary/90 hover:bg-primary" asChild>
                  <Link href="/eid-special/book-now">Book Activity</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Group Deals Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 text-white">
                <Badge className="bg-white/20 text-white mb-4">Limited Time Offer</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Group Discounts for Eid</h2>
                <p className="text-white/80 mb-6">
                  Celebrating Eid is better with friends! Book for 5+ people and get exclusive discounts on all
                  packages.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                    <span>25% off for groups of 5-10 people</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                    <span>35% off for groups of 10+ people</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                    <span>Free photography session for all group bookings</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/eid-special/book-now">Book Group Package</Link>
                </Button>
              </div>
              <div className="relative h-80 md:h-full">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/st00.png"
                  alt="Group of friends at beach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Experiences Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-2">For Young Travelers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Experiences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Curated experiences that are trending among young travelers this Eid season
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Night Party Experience */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/night00.png"
                  alt="Beach Night Party"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="relative p-8 md:p-10 h-full flex flex-col justify-end">
                <Badge className="bg-pink-500 text-white w-fit mb-3">Most Popular</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Exclusive Beach Night Parties</h3>
                <p className="text-white/80 mb-4 max-w-md">
                  Join the hottest beach parties with top DJs, fire shows, and unlimited drinks. Our Eid special parties
                  feature guest DJs from Dhaka and international artists.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    DJ Performances
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    Fire Shows
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    Dance Floor
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    VIP Areas
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/70 text-sm">Starting from</span>
                    <p className="text-white text-2xl font-bold">
                      ৳2,500 <span className="text-sm font-normal">per person</span>
                    </p>
                  </div>
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white">Book Party Pass</Button>
                </div>
              </div>
            </div>

            {/* Spa & Wellness Experience */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/spa00.png"
                  alt="Spa and Wellness"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="relative p-8 md:p-10 h-full flex flex-col justify-end">
                <Badge className="bg-teal-500 text-white w-fit mb-3">Relaxation</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Luxury Spa & Wellness Retreats</h3>
                <p className="text-white/80 mb-4 max-w-md">
                  Rejuvenate with our premium spa packages featuring traditional and modern treatments. Perfect for
                  relaxing after a day of beach activities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    Massage Therapy
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    Facial Treatments
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    Aromatherapy
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    Couples Packages
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/70 text-sm">Starting from</span>
                    <p className="text-white text-2xl font-bold">
                      ৳3,500 <span className="text-sm font-normal">per session</span>
                    </p>
                  </div>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white">Book Spa Session</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Photography Experience */}
            <Card className="overflow-hidden hover:shadow-lg transition-all group">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/photo00.png"
                  alt="Professional Photoshoot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">Instagram-Worthy Photoshoots</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Professional photoshoots at the most scenic locations in Cox's Bazar. Get stunning photos for your
                  social media.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>2-3 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Tag className="h-4 w-4 text-primary" />
                  <span>From ৳4,500 per session</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary/90 hover:bg-primary">Book Photoshoot</Button>
              </CardFooter>
            </Card>

            {/* Adventure Experience */}
            <Card className="overflow-hidden hover:shadow-lg transition-all group">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/adventure00.png"
                  alt="Adventure Activities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">Adrenaline Adventure Pack</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Bundle of extreme activities including paragliding, ATV rides, and cliff jumping for thrill-seekers.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Full day</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Tag className="h-4 w-4 text-primary" />
                  <span>From ৳7,500 per person</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary/90 hover:bg-primary">Book Adventure</Button>
              </CardFooter>
            </Card>

            {/* Cruise Experience */}
            <Card className="overflow-hidden hover:shadow-lg transition-all group">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/cruise00.png"
                  alt="Luxury Cruise"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">Sunset Luxury Cruise</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Luxury yacht experience with gourmet dinner, live music, and the most beautiful sunset views.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>4-5 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Tag className="h-4 w-4 text-primary" />
                  <span>From ৳5,500 per person</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary/90 hover:bg-primary">Book Cruise</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-2">Share Your Moments</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Instagram Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your Eid celebration moments at Cox's Bazar with #EidAtCoxsBazar and get featured on our page
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Instagram Post 1 */}
            <div className="relative aspect-square group overflow-hidden rounded-lg">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/inani0.png"
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1 text-white">
                    <Heart className="h-5 w-5" />
                    <span>423</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <MessageCircle className="h-5 w-5" />
                    <span>28</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Post 2 */}
            <div className="relative aspect-square group overflow-hidden rounded-lg">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/laboni0.png"
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1 text-white">
                    <Heart className="h-5 w-5" />
                    <span>512</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <MessageCircle className="h-5 w-5" />
                    <span>42</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Post 3 */}
            <div className="relative aspect-square group overflow-hidden rounded-lg">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/maheshkhali00.png"
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1 text-white">
                    <Heart className="h-5 w-5" />
                    <span>378</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <MessageCircle className="h-5 w-5" />
                    <span>19</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Post 4 */}
            <div className="relative aspect-square group overflow-hidden rounded-lg">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/sonadia00.png"
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1 text-white">
                    <Heart className="h-5 w-5" />
                    <span>645</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <MessageCircle className="h-5 w-5" />
                    <span>53</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2">
              <Instagram className="h-4 w-4" />
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Eid Getaway Today!</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Don't miss out on these exclusive Eid holiday packages. Limited spots available - secure yours now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/eid-special/book-now">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Cox's Bazar Eid Special</h3>
              <p className="text-gray-400 mb-4">
                Your ultimate destination for Eid holiday packages and experiences in Cox's Bazar.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-primary hover:bg-white/10 rounded-full"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-primary hover:bg-white/10 rounded-full"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-primary hover:bg-white/10 rounded-full"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-primary hover:bg-white/10 rounded-full"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
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
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Booking Terms
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Cox's Bazar Eid Special. All rights reserved.</p>
              </div>
              <div className="text-gray-500 text-sm md:text-right">
                <p className="mb-4">
                  We value your privacy and are committed to protecting your personal information. All data collected is
                  securely stored and will never be shared with third parties without your explicit consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
