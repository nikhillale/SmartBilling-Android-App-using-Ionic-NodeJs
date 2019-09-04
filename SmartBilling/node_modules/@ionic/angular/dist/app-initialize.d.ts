import { NgZone } from '@angular/core';
import { Config } from './providers/config';
export declare function appInitialize(config: Config, doc: Document, zone: NgZone): () => any;
