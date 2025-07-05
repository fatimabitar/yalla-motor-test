export interface CarListing {
  id: string;
  make: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  monthlyPayment: number;
  location: string;
  mileage: number;
  fuelType: string;
  transmission: string;
  engineSize: string;
  gccSpecs: boolean;
  image: string;
  featured: boolean;
  dealType?: "Great Deal" | "Fair Deal" | "Good Deal";
  canBeExported?: boolean;
  urgent?: boolean;
  photoCount?: number;
  description: string;
  updatedDate?: string;
  promotionalText?: string;
}
