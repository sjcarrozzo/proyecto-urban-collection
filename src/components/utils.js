const productsList = [
    {   
        "code": 1000, 
        "name": "Jean Gastado Corte Recto",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"jeans",
        "price": 2500, 
        "stock": 3, 
        "imageSrc": "/img/jean-man-1.webp", 
        "imageAlt": "Jean Gastado Corte Recto"
    },
    { 
        "code": 2500, 
        "name": "Jean Liso Corte Recto",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"jeans",
        "price": 1800, 
        "stock": 1,     
        "imageSrc": "/img/jean-man-2.webp", 
        "imageAlt": "Jean Liso Corte Recto"
    },
    { 
        "code": 3111, 
        "name": "Jean Gaspeado con Rotura",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"jeans",
        "price": 2000, 
        "stock": 10,    
        "imageSrc": "/img/jean-man-3.jpg", 
        "imageAlt": "Jean Gaspeado con Rotura"
    },
    { 
        "code": 4444, 
        "name": "Jean Celeste Rotura",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"jeans",
        "price": 930, 
        "stock": 15,
        "imageSrc": "/img/jean-man-4.jpg", 
        "imageAlt": "Jean Celeste Rotura"
    }, 
    {   
        "code": 1344, 
        "name": "Jean Celeste Corte Campana",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"jeans",
        "price": 2500, 
        "stock": 3, 
        "imageSrc": "/img/levis-women-jean-1.webp", 
        "imageAlt": "Jean Celeste Corte Campana"
    },
    { 
        "code": 1111, 
        "name": "Jean Chupin Celeste",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"jeans",
        "price": 1800, 
        "stock": 1,     
        "imageSrc": "/img/levis-women-jean-2.webp", 
        "imageAlt": "Jean Chupin Celeste"
    },
    { 
        "code": 3811, 
        "name": "Jean Celeste Corte Campana Rotura",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"jeans",
        "price": 2000, 
        "stock": 10,    
        "imageSrc": "/img/women-jean-3.webp", 
        "imageAlt": "Jean Celeste Corte Campana Rotura"
    },
    { 
        "code": 2345, 
        "name": "Jean Celeste Rotura",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"jeans",
        "price": 930, 
        "stock": 15,
        "imageSrc": "/img/women-jean-4.jpg", 
        "imageAlt": "Jean Celeste Rotura"
    },
    {   
        "code": 8264, 
        "name": "Buzo Negro y Blanco",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"buzos",
        "price": 2500, 
        "stock": 3, 
        "imageSrc": "/img/sweater-man-1.jpg", 
        "imageAlt": "Buzo Negro"
    },
    { 
        "code": 1896, 
        "name": "Buzo Verde con Capucha",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"buzos",
        "price": 1800, 
        "stock": 1,     
        "imageSrc": "/img/sweater-man-2.jpeg", 
        "imageAlt": "Buzo Verde con Capucha"
    },
    { 
        "code": 7534, 
        "name": "Buzo Marrón con Capucha",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"buzos",
        "price": 2000, 
        "stock": 10,    
        "imageSrc": "/img/sweater-man-3.jpg", 
        "imageAlt": "Buzo Marrón con Capucha"
    },
    { 
        "code": 8546, 
        "name": "Buzo Azul con Cuadros",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"buzos",
        "price": 930, 
        "stock": 15,
        "imageSrc": "/img/sweater-man-4.webp", 
        "imageAlt": "Buzo Azul con Cuadros"
    }, 
    {   
        "code": 5246, 
        "name": "Buzo Rosa con Capucha",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"buzos",
        "price": 2500, 
        "stock": 3, 
        "imageSrc": "/img/sweater-woman-1.webp", 
        "imageAlt": "Buzo Rosa con Capucha"
    },
    { 
        "code": 8902, 
        "name": "Buzo Verde",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"buzos",
        "price": 1800, 
        "stock": 1,     
        "imageSrc": "/img/sweater-woman-2.webp", 
        "imageAlt": "Buzo Verde"
    },
    { 
        "code": 7391, 
        "name": "Buzo Verde Oscuro Oversize con Capucha",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"buzos",
        "price": 2000, 
        "stock": 10,    
        "imageSrc": "/img/sweater-woman-3.jpeg", 
        "imageAlt": "Buzo Verde Oscuro Oversize con Capucha"
    },
    { 
        "code": 2828, 
        "name": "Buzo Azul Oversize con Capucha",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"buzos",
        "price": 930, 
        "stock": 15,
        "imageSrc": "/img/sweater-woman-4.jpeg", 
        "imageAlt": "Buzo Azul Oversize con Capucha"
    },
    { 
        "code": 28528, 
        "name": "Camisa Azul Oscura con Lunares",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"camisas",
        "price": 9130, 
        "stock": 15,
        "imageSrc": "/img/dress-shirt-man-1.webp", 
        "imageAlt": "Camisa Azul Oscura con Lunares"
    },
    { 
        "code": 22328, 
        "name": "Camisa Azul Oscura Lisa",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"camisas",
        "price": 6550, 
        "stock": 15,
        "imageSrc": "/img/dress-shirt-man-2.webp", 
        "imageAlt": "Camisa Azul Oscura Lisa"
    },
    { 
        "code": 285458, 
        "name": "Camisa Celeste Lisa",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"camisas",
        "price": 5000, 
        "stock": 15,
        "imageSrc": "/img/dress-shirt-man-3.webp", 
        "imageAlt": "Camisa Celeste Lisa"
    },
    { 
        "code": 756216, 
        "name": "Camisa Clasica",
        "description": "Buzo con bolsillo canguro y capucha. Manga pegada con hombro caido. Puños de cintura y mangas en complemento. Cordón ancho de algodón. Etiqueta de Marca Topper Retro grande.", 
        "category":"camisas",
        "price": 1890, 
        "stock": 15,
        "imageSrc": "/img/dress-shirt-man-4.webp", 
        "imageAlt": "Camisa Clasica"
    }   
]

export default productsList