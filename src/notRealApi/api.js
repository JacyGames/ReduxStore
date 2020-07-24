
export class myServiceApi {

    getFromServerItems() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {resolve([
                {id: 1, name: "Headphones", description: "TOZO T10 Bluetooth 5.0 Wireless Earbuds with Wireless Charging Case IPX8 Waterproof TWS Stereo Headphones in Ear Built in Mic Headset Premium Sound with Deep Bass for Sport Black", price: "36.99"},
                {id: 2, name: "Processor ", description: "AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler", price: "279.99"},
                {id: 3, name: "Graphics Card", description: "ZOTAC Gaming GeForce RTX 2070 Super Mini 8GB GDDR6 256-Bit 14Gbps Gaming Graphics Card, Ice Storm 2.0, Super Compact, ZT-T20710E-10M", price: "499.99"},
                {id: 4, name: "Laptop", description: "Lenovo Chromebook C330 2-in-1 Convertible Laptop, 11.6-Inch HD (1366 x 768) IPS Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64 GB eMMC, Chrome OS, 81HY0000US, Blizzard White", price: "375.00"},
                {id: 5, name: "Monitor ", description: "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black", price: "83.36"},
                {id: 6, name: "Smartphone", description: "Moto G Power | 3-Day Battery1 | Unlocked | Made for US by Motorola | 4/64GB | 16MP Camera | 2020 | Black", price: "229.99"}
            ])}, 2000)
        })
    }



}