export interface SearchModel {
    query:         string;
    sort:          string;
    responseGroup: string;
    totalResults:  number;
    start:         number;
    numItems:      number;
    items:         Item[];
    facets:        Facet[];
}

export interface Facet {
    name:        string;
    properties:  Properties;
    displayName: string;
    facetValues: FacetValue[];
}

export interface FacetValue {
    name:  string;
    count: number;
}

export interface Properties {
    multi:     string;
    nullCount: string;
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


export enum CategoryNode {
}

export enum CategoryPath {
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
