// To parse this data:
//
//   import { Convert, Items } from "./file";
//
//   const items = Convert.toItems(json);

export interface Items {
    query:         string;
    sort:          string;
    responseGroup: string;
    totalResults:  number;
    start:         number;
    numItems:      number;
    items:         Item[];
    facets:        any[];
}

export interface Item {
    itemId:                   number;
    parentItemId:             number;
    name:                     string;
    salePrice:                number;
    upc:                      string;
    categoryPath:             CategoryPath;
    shortDescription:         string;
    longDescription:          string;
    thumbnailImage:           string;
    mediumImage:              string;
    largeImage:               string;
    productTrackingUrl:       string;
    standardShipRate:         number;
    marketplace:              boolean;
    modelNumber:              string;
    productUrl:               string;
    customerRating:           string;
    numReviews:               number;
    customerRatingImage:      string;
    categoryNode:             CategoryNode;
    rhid:                     string;
    bundle:                   boolean;
    stock:                    Stock;
    addToCartUrl:             string;
    affiliateAddToCartUrl:    string;
    giftOptions?:             GiftOptions;
    imageEntities:            ImageEntity[];
    offerType:                OfferType;
    isTwoDayShippingEligible: boolean;
    availableOnline:          boolean;
    msrp?:                    number;
}

export enum CategoryPath {
}
export enum CategoryNode {
}

export interface GiftOptions {
    allowGiftWrap:    boolean;
    allowGiftMessage: boolean;
    allowGiftReceipt: boolean;
}

export interface ImageEntity {
    thumbnailImage: string;
    mediumImage:    string;
    largeImage:     string;
    entityType:     EntityType;
}

export enum EntityType {
    Primary = 'PRIMARY',
    Secondary = 'SECONDARY',
}

export enum OfferType {
    OnlineAndStore = 'ONLINE_AND_STORE',
}

export enum Stock {
    Available = 'Available',
}

// Converts JSON strings to/from your types
export namespace Convert {
    export function toItems(json: string): Items {
        return JSON.parse(json);
    }

    export function itemsToJson(value: Items): string {
        return JSON.stringify(value);
    }
}
