
import blkjacket from '../src/media/blkjacketwall.jpeg';
import colorBands from '../src/media/colorBands.jpeg';
import device from '../src/media/device.jpeg';
import floralBag from '../src/media/floralBag.jpeg';
import leatherBP from '../src/media/leatherBP.jpeg';
import scarfnBlaze from '../src/media/scarfnBlaze.jpeg';
import wallet from '../src/media/wallet.jpeg';
import suits from '../src/media/suits.jpeg';
import womenWatch from '../src/media/women-watch.jpeg';


const products = [
    {
        "id": 1,
        "sku": 18644119330491312,
        "title": "Sports Jacket",
        "foto": blkjacket,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum.",
        "availableSizes": ["X", "L", "XL", "XXL"],
        "price": 10.00,
        "isFreeShipping": true
      },
  
      {
        "id": 2,
        "sku": 11854078013954528,
        "title": "Wristbands",
        "foto": colorBands,
        "description": "DLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum",
        "availableSizes": ["X", "M", "L"],
        "price": 14.00,
        
        "isFreeShipping": true
      },
  
      {
        "id": 3,
        "sku": 876661122392077,
        "title": "Rose Watch",
        "description": "DLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum",
        "foto": womenWatch,
        "availableSizes": ["X", "M", "L"],
        "price": 150.00,
        
        "isFreeShipping": true
      },
  
      {
        "id": 4,
        "sku": 9197907543445677,
        "title": "Leather Backpack",
        "foto": leatherBP,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum.",
        "availableSizes": ["XL"],
        "price": 275.00,
        "isFreeShipping": false
      },
  
      {
        "id": 5,
        "sku": 10547961582846888,
        "title": "Floral Bag",
        "foto": floralBag,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum.",
        "availableSizes": ["X", "L", "XL"],
        "price": 200.00,
        "isFreeShipping": false
      },
  
      {
        "id": 6,
        "sku": 6090484789343891,
        "title": "Refurbished Phone",
        "foto": device,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum.",
        "availableSizes": ["XL", "XXL"],
        "price": 300.00,
        
        "isFreeShipping": false
      },
  
      {
        "id": 7,
        "sku": 18532669286405342,
        "title": " Plain Wallet",
        "foto": wallet,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum.",
        "availableSizes": ["S"],
        "style": "Preto com listras brancas",
        "price": 50.00,
        
        "isFreeShipping": true
      },
  
      {
        "id": 8,
        "sku": 5619496040738316,
        "title": "Suits",
        "foto": suits,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum.",
        "availableSizes": ["XL"],
        "style": "Azul escuro",
        "price": 100.00,
        
        "isFreeShipping": false
      },
      {
        "id": 9,
        "sku": 11600983276356165,
        "title": "Accessories",
        "foto": scarfnBlaze,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum.",
        "availableSizes": ["L", "XL"],
        "price": 75.00,
        
        "isFreeShipping": true
      }
]
export default products