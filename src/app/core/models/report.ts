import { Forest } from './forest';

export interface Report {
    id?: string;
    name?: string;
    startDate: any;
    endDate: any;
    region: string;
    forestReports: ForestReport[];
    totals: Total;
}

export interface ForestReport {
    forest: Forest;
    felledTimberVolume: number;
    stumpageTimber: number;
    // noOfTP?: number;
    // stumpageTP?: number;
    // noOfRPFP?: number;
    // firewood?: number;
    // stumpageRPFPFW?: number;
    // totalStumpage?: number;
}

export interface Total {
    felledTimberVolume: number;
    stumpageTimber: number;
    // noOfTP?: number;
    // stumpageTP?: number;
    // noOfRPFP?: number;
    // firewood?: number;
    // stumpageRPFPFW?: number;
    // totalStumpage?: number;
}
