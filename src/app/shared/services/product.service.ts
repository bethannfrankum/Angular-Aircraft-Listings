import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    let myProducts: Product[] = [
  {
    'id': '1',
    'shortDescription': 'Original paint and interior. Red Velour interior w/ club seating...',
    description:`1979 Lance II. Original paint and interior. Red Velour interior w/ club seating in the rear. Front and Rear baggage. Fairly new Hartzell 3 Blade TOP PROP. Compression's at annual were: 74, 76, 75, 75, 73, 76. PRICE REDUCED`, 
    'name': '1979 PIPER LANCE II',
    'imageUrl': '/assets/0.png',
    'price': '$360,000'
  },
  {
    'id': '2',
    'shortDescription': '12850.8 TT Airframe; Garmin GMA 340 Audio King KX-155... ',
    description:'', 
    'name': '1980 CESSNA 172RG CUTLASS',
    'imageUrl': '/assets/1.png',
    'price': '$95,000'
  },
  {
    'id': '3',
    'shortDescription': '172M. Cessna panel. Audio w/ 3 LMB. MX300 digital Nav/Com with GS Receiver...',
    description:'', 
    'name': '1976 CESSNA 172M SKYHAWK',
    'imageUrl': '/assets/2.png',
    'price': '$110,000'
  },
  {
    'id': '4',
    'shortDescription': 'AT402 8480 TT, "0" SHOT, Spar Caps done at 7323.5 TT. Fresh PaintAt-402...',
    description:'',
    'name': '1993 AIR TRACTOR AT-402',
    'imageUrl': '/assets/3.png',
    'price': '$216,000'
  },
  {
    'id': '5',
    'shortDescription': 'Very Clean w/ Outstanding Avionics. PS Engineering PMA 450 Audio...',
    description:'', 
    'name': '1973 BEECHCRAFT V35B BONANZA',
    'imageUrl': '/assets/4.png',
    'price': '$87,000'
  },
  {
    'id': '6',
    'shortDescription': '1884 TT A/F and Engines. 88.5 SHOTs and 88.5 SPOHs...',
    description:'', 
    'name': '1990 BEECHCRAFT KING AIR C90A',
    'imageUrl': '/assets/5.png',
    'price': '$470,000'
  },
  {
    'id': '7',
    'shortDescription': 'Homebuilt experimental aircraft. Original paint and interior...',
    description:'',
    'name': '2007 Experimental Aircraft',
    'imageUrl': '/assets/6.png',
    'price': '$65,000'
  },
  {
    'id': '8',
    'shortDescription': 'Full King panel. KMA 26, KLN 94 GPS. KT 76C txpd. dual KX-155A Nav/Coms... ',
    description:'',
    'name': '2000 CESSNA 172S SKYHAWK SP',
    'imageUrl': '/assets/7.png',
    'price': '$95,000'
  },
  {
    'id': '9',
    'shortDescription': 'PMA6000 Audio, Garmin GNS 530W w/Terrain, GDL 69A w/ XM Wx and Music, KFC 150 A/P w/ HSI...',
    description:'', 
    'name': '1997 PIPER SENECA V',
    'imageUrl': '/assets/8.png',
    'price': '$216,000'
  },
  {
    'id': '10',
    'shortDescription': 'Fresh Hot Section Inspection. Newly Installed Stec 55 A/P. Garmin GNS 530W/430 panel...',
    description:'', 
    'name': '1979 CESSNA P210 SILVER EAGLE',
    'imageUrl': '/assets/9.png',
    'price': '$88,000'
  }
];

    
    return myProducts

  }

  getProductById(id: string): Product {
    let myProducts: Product[] = this.getProducts();
    return myProducts.find(x => x.id === id);
  }
}
