import type { CarListing } from "@/types/car"
import { mockCarListings } from "./mock-data"

export async function getCarListings(): Promise<CarListing[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // In a real app, this would fetch from your API/database
  return mockCarListings
}
