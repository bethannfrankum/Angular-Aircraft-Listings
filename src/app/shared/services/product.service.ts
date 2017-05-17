import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Log } from '../models/log';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    let myProducts: Product[] = [
  {
    'id': '1',
    'shortDescription': 'Original paint and interior. Red Velour interior w/ club seating. Front and Rear baggage. Fairly new Hartzell 3 Blade TOP PROP...',
    description:`Original paint and interior. Red Velour interior w/ club seating in the rear. Front and Rear baggage. Fairly new Hartzell 3 Blade TOP PROP. Compression's at annual were: 74, 76, 75, 75, 73, 76. PRICE REDUCED`, 
    'name': '1979 PIPER LANCE II',
    'imageUrl': 'assets/0.png',
    'price': '$360,000',
    location: 'Fayetteville, AR',
      phone:'456-123-7890',
      model:'1979 Lance II',
      condition:'Used',
      serial: '32R-7985055',
      logs:[{name: 'Photo Gallery', url:'https://www.dropbox.com/sh/o4y4tsvxhery06k/AAACIkcar-vDx6tVJ2bsoV5Fa?dl=0'},
          {name: 'Prop', url:'https://www.dropbox.com/s/bui8vo0twefx6a1/Right%20Prop%203.pdf?dl=0'},
           {name: 'Engine', url:'https://www.dropbox.com/s/gch0kddqp4599x6/Right%20Engine.pdf?dl=0'},
           {name: 'Airframe', url:'https://www.dropbox.com/s/mcvdsh132qm9h3c/Airframe%20Book%201.pdf?dl=0'}]
  },
  {
    'id': '2',
    'shortDescription': '12850.8 TT Airframe; Garmin GMA 340 Audio King KX-155. 98.6 SMOH 5/17/2016 Prop Specs McCauley B2D34C220-B S/N: 15054 98.6... ',
    description:'12850.8 TT Engine(s) Lycoming IO-360-F1A6 S/N: L-38241-36A  98.6 SMOH 5/17/2016 Prop Specs McCauley B2D34C220-B S/N: 15054 98.6 SNEW 5/17/2016 Avionics/Radios Garmin GMA 340 Audio King KX-155 Nav/Com King KI-209 ILS Annunciator Garmin GNC-300XL GPS/Com Garmin GI-106A ILS Indicator Garmin GTX-327 txpd Garmin MD-41-448 GPS Annunciator Trans-Cal SSD120-30N Remote Encoder.', 
    'name': '1980 CESSNA 172RG CUTLASS',
    'imageUrl': 'assets/1.png',
    'price': '$95,000',
      location: 'Fayetteville, AR',
      phone:'456-123-7890',
      model:'1980 Cessna',
      condition:'Used',
      serial: '172RG0529',
         logs:[{name: 'Prop', url:'www.google.com'}]
  },
  {
    'id': '3',
    'shortDescription': '172M. Cessna panel. Audio w/ 3 LMB. MX300 digital Nav/Com with GS Receiver. 300 Nav/Com w/ Localizer Receiver. 300 txpd...',
    description:'172M. Cessna panel. Audio w/ 3 LMB. MX300 digital Nav/Com with GS Receiver. 300 Nav/Com w/ Localizer Receiver. 300 txpd. 300 ADF. Garmin 496 GPS XM Wx "Wheel Mount". David Clark Intercom. Exhaust Temp Gauge. Carb Temp Gauge. Standby Vacuum. Horton STOL kit. Horton Flap Gap Seals. Brackett Air Cleaner. Apollo Loran with Course deviation Indicator. Complete Logs.', 
    'name': '1976 CESSNA 172M SKYHAWK',
    'imageUrl': 'assets/2.png',
    'price': '$110,000',
      location: 'Branson, MO',
      phone:'456-123-7890',
      model:'1976 Cessna',
      condition:'Used',
      serial: '17267224',
         logs:[{name: 'Prop', url:'www.google.com'}]},
  {
    'id': '4',
    'shortDescription': 'Fresh annual and new paint. AT402 8480 TT, "0" SHOT, Spar Caps done at 7323.5 TT. Fresh PaintAt-402. Hopper Rinse, Wingman...',
    description:'Fresh annual and new paint. -34AG , Cascade, Air conditioning, 38" gate, Hopper Rinse, Wingman, Smoker and Fresh Paint. Just spent over $100,000 in engine maintenance with Prime Turbines. 7860.3 hours left on the wings. AVAILABLE FOR LEASE.',
    'name': '1993 AIR TRACTOR AT-402',
    'imageUrl': 'assets/3.png',
    'price': '$216,000',
    location: 'West Helena, AR',
      phone:'456-123-7890',
      model:'1993 AT-502',
      condition:'Used',
      serial: '502-0198',
         logs:[{name: 'Prop', url:'www.google.com'}]
  },
  {
    'id': '5',
    'shortDescription': 'Very Clean w/ Outstanding Avionics. PS Engineering PMA 450 Audio...',
    description:'Very Clean w/ Outstanding Avionics. PS Engineering PMA 450 Audio. Garmin G500 w/ Synthetic Vision. GTN 750 Touchscreen, GTX 330 trpd, GNC 225 Nav/Com, GDL 88 ADS-B In & out. Stec 55x A/P - F/D w/ HSI, GPSS, Altitude Preselect and Auto Trim. 406 ELT. Garmin Flight Stream 210. Osbourne 20 gal Tip Tanks w/ GW Increase STC. Large Baggage Door. Stnby ATT. Indicator. All Logs. 1987 Nose Gear Collapse.', 
    'name': '1973 BEECHCRAFT V35B BONANZA',
    'imageUrl': 'assets/4.png',
    'price': '$87,000',
      location: 'Jonesboro, AR',
      phone:'456-123-7890',
      model:'1973 V35B Bonanza',
      condition:'Used',
      serial: 'D-9440',
       logs:[{name: 'Prop', url:'www.google.com'}]},
  {
    'id': '6',
    'shortDescription': '1884 TT A/F and Engines. 88.5 SHOTs and 88.5 SPOHs...',
    description:`1884 TT A/F and Engines. 88.5 SHOT's and 88.5 SPOH's. Collins equipped w/ Radar Altimeter & RMI. WXR-270 Radar. Garmin GNS 400W and GDL 69 XM Wx. APC-65 A/P w/ FD and HSI. Dual MCS-65 Compass Systems. King KGP 560 Class B TAWS. Skywatch 497. WX-1000+ Storm Scope. Cleveland Wheels and Brakes. Fresh Props.`, 
    'name': '1990 BEECHCRAFT KING AIR C90A',
    'imageUrl': 'assets/5.png',
    'price': '$470,000',
      location: 'Fayetteville, AR',
      phone:'456-123-7890',
      model:'1990 King Air C90A',
      condition:'Used',
      serial: 'LJ-1242',
         logs:[{name: 'Prop', url:'www.google.com'}]
  },
  {
    'id': '7',
    'shortDescription': 'Homebuilt experimental aircraft. Original paint and interior...',
    description:'Homebuilt experimental aircraft. Original paint and interior. New Garmin Glass Panel GTN-750 with, dual G3X 10" displays, Sorcerer autopilot, EED deice system. Many new updates. Long range fuel. Must sell owner bought new airplane!',
    'name': '2007 Experimental Aircraft',
    'imageUrl': 'assets/6.png',
    'price': '$65,000',
      location: 'Mountain Home, AR',
      phone:'456-123-7890',
      model: '2007',
      condition:'Used',
      serial: '18802373T',
         logs:[{name: 'Prop', url:'www.google.com'}]
  },
  {
    'id': '8',
    'shortDescription': 'Full King panel. KMA 26, KLN 94 GPS. KT 76C txpd. dual KX-155A Nav/Coms... ',
    description:` Full King panel. KMA 26, KLN 94 GPS. KT 76C txpd. dual KX-155A Nav/Com's. KT 87 ADF. KAP-140 A/P. Leather. Dual Vacuum Pumps. Hinged windows. Complete Logs. NKDH. 899.34 useful.`,
    'name': '2000 CESSNA 172S SKYHAWK SP',
    'imageUrl': 'assets/7.png',
    'price': '$95,000',
    location: 'West Helena, AR',
      phone:'456-123-7890',
      model:'2000 Cessna',
      condition:'Used',
      serial: '172S8440',
         logs:[{name: 'Prop', url:'www.google.com'}]
  },
  {
    'id': '9',
    'shortDescription': 'PMA6000 Audio, Garmin GNS 530W w/Terrain, GDL 69A w/ XM Wx and Music, KFC 150 A/P w/ HSI...',
    description:'PMA6000 Audio, Garmin GNS 530W w/Terrain, GDL 69A w/ XM Wx and Music, KFC 150 A/P w/ HSI , Altitude Preselect. and Roll Steer. KX 165 Nav/Com, KT 71 txpd. RDR 2000 Color Radar and Vertical Profile. WX-1000+ Stormscope. Skywatch 497 Active Traffic. Factory Air. Certified FIKI (KNOWN ICE). 6 place O2. Prop Synchrophaser. 122 Gallon Fuel. Refreshment Console', 
    'name': '1997 PIPER SENECA V',
    'imageUrl': 'assets/8.png',
    'price': '$216,000',
      location: 'Branson, MO',
      phone:'456-123-7890',
      model:'1997 Seneca V',
      condition:'Used',
      serial: '34-49030',
         logs:[{name: 'Prop', url:'www.google.com'}]},
  {
    'id': '10',
    'shortDescription': 'Fresh Hot Section Inspection. Newly Installed Stec 55 A/P. Garmin GNS 530W/430 panel...',
    description:'Fresh Hot Section Inspection. Newly Installed Stec 55 A/P. Garmin GNS 530W/430 panel w/ PS Engineering PMA 7000B Audio. MX20 MFD. WX 500 Stormscope shows on the MX20. O&N Conversion in 2005. Air Conditioning. TKS anti ice system. Flint Tip Tanks. 148.3 total usable fuel.', 
    'name': '1979 CESSNA P210 SILVER EAGLE',
    'imageUrl': 'assets/9.png',
    'price': '$88,000',
      location: 'Fayetteville, AR',
      phone:'456-123-7890',
      model:'1979 Cessna',
      condition:'Used',
      serial: 'P210000308',
         logs:[{name: 'Prop', url:'www.google.com'}]
  }
];

    
    return myProducts

  }

  getProductById(id: string): Product {
    let myProducts: Product[] = this.getProducts();
    return myProducts.find(x => x.id === id);
  }
}
