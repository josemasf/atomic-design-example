import type { Product } from '@/services/types';
import { faker } from '@faker-js/faker'; 

//TODO Object Mother

export function dummyArrayProduct():Product[]{
    return [
        {
            "id": faker.number.int(),
            "title":faker.commerce.productName(),
            "description": faker.commerce.productDescription(),
            "price": Number(faker.finance.amount()),
            "discountPercentage": Number(faker.finance.amount()),
            "rating": Number(faker.finance.amount({ min: 1, max: 5 })),
            "stock":faker.number.int(100),
            "brand": faker.lorem.word(),
            "category": faker.commerce.department(),
            "thumbnail": faker.image.urlPicsumPhotos(),
            "images": [
                faker.image.urlPicsumPhotos(),
                faker.image.urlPicsumPhotos(),
                faker.image.urlPicsumPhotos()
            ]
        }, 
    ]
}
