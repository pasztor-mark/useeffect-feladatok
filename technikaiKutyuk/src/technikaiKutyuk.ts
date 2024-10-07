export interface Phones {
    phones: Phone[]
  }
  
  export interface Phone {
    id: number
    brand: string
    model: string
    price: number
    features: Features
  }
  
  export interface Features {
    storage: string
    camera: string
    battery: string
  }