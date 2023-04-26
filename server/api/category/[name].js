
let subcategories = {
    caini: [
        {
            name: "Mancare",
            image: "https://i.ibb.co/BBK3j2M/hrana-uscata-caini-royal-canin-medium-adult-15kg-1-594x-progressive-png.webp"
        },
        {
            name: "Jucarii",
            image: "https://i.ibb.co/PhGdsGz/minge-vinil-5cm-500x-progressive-png.webp"
        },
        {
            name: "Paturi",
            image: "https://i.ibb.co/1YgyWCC/scruffs-culcus-mov-2-600x-2x-progressive.webp"
        }
    ],
    pisici: [
        {
            name: "Mancare",
            image: "https://i.ibb.co/Wf1Rr0K/hrana-uscata-pisici-royal-canin-kitten-2kg-1-528x-progressive-png.webp"
        },
        {
            name: "Jucarii",
            image: "https://i.ibb.co/XytBZF8/jucarie-pisici-hartz-cattraction-unicorn-umagic-594x.webp"
        },
        {
            name: "Paturi",
            image: "https://i.ibb.co/vQqtv6r/Scruffs-Culcus-Chester-Gri-3few-jl-594x-progressive-png.webp"
        }
    ],
    pasari: [
        {
            name: "Mancare",
            image: "https://i.ibb.co/QDNQq6J/hrana-pasari-grandmix-cocorite-1kg-1-580x-progressive-png.webp"
        },
        {
            name: "Jucarii",
            image: "https://i.ibb.co/T8RFksN/jucarie-lemn-pasari-luohe-lbw-08951-920x-progressive-png.webp"
        },
        {
            name: "Colivii",
            image: "https://i.ibb.co/2tWKH9B/216627-1-594x-progressive.webp"
        },
        {
            name: "Vitamine",
            image: "https://i.ibb.co/cXYnqHL/vitakraft-bautura-pasari-1l-920x-progressive-png.webp"
        }
    ],
    pesti: [
        {
            name: "Mancare",
            image: "https://i.ibb.co/T04s9qK/Aqua-Pond-Granule-1-l-600x-2x-progressive.webp"
        },
        {
            name: "Acvarii",
            image: "https://i.ibb.co/LgSn45H/acvariu-sticla-marina-betta-kit-boy-612x-progressive-png.webp"
        },
        {
            name: "Vitamine",
            image: "https://i.ibb.co/JtsY59P/dennerle-color-booster-1-594x.webp"
        }
    ],
    reptile: [
        {
            name: "Mancare",
            image: "https://i.ibb.co/mbF6M8j/gammarus-1-594x.webp"
        },
        {
            name: "Terarii",
            image: "https://i.ibb.co/HGwm6M7/Terariu-Diversa-30x25x25-cm-1-504x-progressive.webp"
        },
        {
            name: "Vitamine",
            image: "https://i.ibb.co/Hzr8p74/8554-02828-int-sera-reptimineral-c-100-ml-504x-progressive-png.webp"
        }
    ],
}


export default function (event){

    const category = event.context.params.name

    if (subcategories[category]){
        return subcategories[category]
    }
        return {
            error: true,
            message: 'Categoria nu a fost gasita.'
        }



}