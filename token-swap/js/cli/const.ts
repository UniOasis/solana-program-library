import * as bip39 from 'bip39';
import {Keypair} from '@solana/web3.js';

const phrase = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

const seedBuffer = bip39.mnemonicToSeedSync(phrase);

export const PAYER = Keypair.fromSeed(seedBuffer.slice(0, 32));

const ownerPhrase = 'taste accuse skin culture solve pistol opinion army primary clay night athlete';
const ownerSeedBuffer = bip39.mnemonicToSeedSync(ownerPhrase);
export const TEST_OWNER = Keypair.fromSeed(ownerSeedBuffer.slice(0, 32));

