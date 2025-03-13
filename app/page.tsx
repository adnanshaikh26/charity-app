import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Users, Award, CheckCircle,IndianRupee } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import DonationForm from "@/components/donation-form"
// import TestimonialCard from "@/components/testimonial-card"
import NewsletterForm from "@/components/newsletter-form"
import ImpactCounter from "@/components/impact-counter"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Helping Hand</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#mission" className="text-sm font-medium hover:text-primary">
              Our Mission
            </Link>
            <Link href="#impact" className="text-sm font-medium hover:text-primary">
              Impact
            </Link>
            {/* <Link href="#stories" className="text-sm font-medium hover:text-primary">
              Success Stories
            </Link> */}
            <Link href="#help" className="text-sm font-medium hover:text-primary">
              Ways to Help
            </Link>
          </nav>
          <Button asChild>
            <Link href="#donate">Donate Now</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/helpingHand.jpg"
              alt="People helping each other"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Extend a Helping Hand – Change Lives Today
              </h1>
              <p className="text-lg md:text-xl">
                We connect donors with people in critical financial situations, providing immediate relief and long-term
                support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#donate">
                    Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20" asChild>
                  <Link href="#learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  At Helping Hand, we believe that no one should face financial hardship alone. Our mission is to
                  provide immediate relief and sustainable support to individuals and families experiencing urgent
                  financial crises.
                </p>
                <p className="text-lg text-muted-foreground">
                  Through the generosity of our donors and the dedication of our volunteers, we create a bridge between
                  those who can help and those who need it most, fostering a community of compassion and support.
                </p>
                <Button variant="outline" asChild>
                  <Link href="#about">About Our Work</Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/orphans.jpg"
                  alt="Volunteers working together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section id="impact" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 sm:text-4xl">Our Impact</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <ImpactCounter
                icon={<Users className="h-10 w-10 text-primary" />}
                value={500}
                label="Families Supported"
                suffix="+"
              />
              <ImpactCounter
                icon={<IndianRupee className="h-10 w-10 text-primary" />}
                value={1000000}
                label="Funds Raised"
                prefix="$"
                suffix="+"
              />
              <ImpactCounter
                icon={<Award className="h-10 w-10 text-primary" />}
                value={10}
                label="Years of Service"
                suffix="+"
              />
              <ImpactCounter
                icon={<CheckCircle className="h-10 w-10 text-primary" />}
                value={95}
                label="Success Rate"
                suffix="%"
              />
            </div>
          </div>
        </section>

        {/* Success Stories */}
        {/* <section id="stories" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4 sm:text-4xl">Success Stories</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Real stories from people whose lives have been changed through the generosity of our donors.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Sarah Johnson"
                location="Denver, CO"
                quote="After losing my job and facing eviction, Helping Hand provided emergency rent assistance that kept a roof over my children's heads. I'm now employed again and giving back as a monthly donor."
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <TestimonialCard
                name="Miguel Rodriguez"
                location="Phoenix, AZ"
                quote="When medical bills threatened to bankrupt our family after my wife's surgery, Helping Hand stepped in with financial support and connected us with resources. We couldn't have made it through without them."
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <TestimonialCard
                name="Aisha Williams"
                location="Atlanta, GA"
                quote="As a single mother of three, the pandemic hit us hard. Helping Hand provided grocery assistance and helped with utilities when I had nowhere else to turn. Their compassion changed everything."
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="#more-stories">Read More Stories</Link>
              </Button>
            </div>
          </div>
        </section> */}

        {/* Ways to Help */}
        <section id="help" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4 sm:text-4xl">Ways to Help</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Join our mission to support those in need. Every contribution makes a difference.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <IndianRupee className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Make a Donation</h3>
                  <p className="text-muted-foreground mb-4">
                    Your financial contribution provides immediate relief to families in crisis. Choose a one-time or
                    recurring donation.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="#donate">Donate Now</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Volunteer With Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Share your time and skills to help families in need. We have various volunteer opportunities
                    available.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#volunteer">Become a Volunteer</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Start a Fundraiser</h3>
                  <p className="text-muted-foreground mb-4">
                    Rally your community to raise funds for Helping Hand. We will provide all the tools and support you
                    need.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#fundraise">Start Fundraising</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section id="donate" className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Make a Difference Today</h2>
                <p className="text-lg">
                  Your donation provides immediate relief to individuals and families facing financial hardship. Choose
                  a one-time gift or become a monthly supporter to create lasting change.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>100% of donations go to those in need</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Tax-deductible contributions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Transparent impact reporting</span>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4 items-center mt-8">
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt="Partner Logo"
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt="Partner Logo"
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt="Partner Logo"
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt="Partner Logo"
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt="Partner Logo"
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
              <div>
                <DonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-12 border-t">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Helping Hand</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Providing financial relief and support to those in need since 2025.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                <p>Lane no 6</p>
                <p>Aple ghar society</p>
                <p>Kharadi, Pune</p>
                <p className="mt-2">info@helpinghand.org</p>
                <p>(+91) 73859 25527</p>
              </address>
            </div>
            <div>
              <h3 className="font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for updates on our impact and upcoming events.
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Helping Hand Charity. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

