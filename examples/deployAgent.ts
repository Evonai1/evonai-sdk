import { Agent } from "../src/agents/agent";
import { Connection, clusterApiUrl } from "@solana/web3.js";

async function main() {
  const connection = new Connection(clusterApiUrl("devnet"));
  const agent = new Agent({
    name: "MyFirstAgent",
    description: "A simple agent that monitors token prices",
    triggers: ["price_change"],
    actions: ["send_notification"],
  });

  const deployedAgent = await agent.deploy(connection);
  console.log(`Agent deployed at: ${deployedAgent.address.toBase58()}`);
}

main().catch(console.error);
