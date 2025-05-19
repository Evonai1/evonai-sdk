import { Connection, PublicKey } from "@solana/web3.js";

export interface AgentConfig {
  name: string;
  description?: string;
  triggers: string[];
  actions: string[];
}

export class Agent {
  config: AgentConfig;

  constructor(config: AgentConfig) {
    this.config = config;
  }

  async deploy(connection: Connection): Promise<{ address: PublicKey }> {
    // Placeholder for deploying an on-chain AI agent
    console.log(`Deploying agent: ${this.config.name}`);
    // Return a dummy public key for demo
    return { address: new PublicKey("So11111111111111111111111111111111111111112") };
  }
}
