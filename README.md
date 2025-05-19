# EvonAI SDK

<p align="center">
  <img src="https://github.com/Evonai1/evonai-sdk/raw/main/assets/evonai.png" alt="EvonAI Logo" width="150" />
</p>

EvonAI SDK is an open-source toolkit to build AI tools and agents powered by the $EVON token on Solana.
...


**EvonAI** is an open-source AI toolkit built on the Solana blockchain. It enables developers to deploy intelligent on-chain agents, perform data analysis, and integrate $EVON token-powered utilities into decentralized applications.

---

## 📦 Installation

Use the SDK directly from GitHub:

```bash
npm install Evonai1/evonai-sdk
```

Or clone the repository for development:

```bash
git clone https://github.com/Evonai1/evonai-sdk
cd evonai-sdk
npm install
npm run build
```

---

## 🚀 Features

- **On-Chain AI Agents**: Deploy AI agents that monitor and react to blockchain events
- **Solana Integration**: Built for speed and scalability on Solana
- **Token-Gated Actions**: Power agents using the $EVON utility token
- **Data Analysis**: Process and react to on-chain data in real time
- **Modular TypeScript Code**: Designed for customization and developer experience

---

## 🛠 Example Usage

```ts
import { Agent } from "./src/agents/agent";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const agent = new Agent({
  name: "PriceMonitor",
  description: "Monitors token price and sends alert",
  triggers: ["price_change"],
  actions: ["send_notification"],
});

agent.deploy(connection).then((res) => {
  console.log("Agent deployed at:", res.address);
});
```

---

## 💰 $EVON Token Utility

The `$EVON` token powers the EvonAI ecosystem:
- Pay for agent execution and AI services
- Stake to access advanced features
- Govern platform upgrades
- Redeem utilities like alerts, NFT generation, and more

---

## 📂 Project Structure

```
evonai-sdk/
├── assets/
│   └── evonai.png             # Project logo image
├── src/
│   ├── agents/agent.ts        # AI agent logic
│   ├── tools/dataProcessor.ts # On-chain data analysis
│   └── utils/helpers.ts       # Utility functions
├── examples/                  # Usage scripts
├── package.json               # Project metadata
├── tsconfig.json              # TypeScript config
├── LICENSE                    # MIT open-source license
└── README.md                  # Project docs
```

---

## 🌍 Community

Join our mission to bring AI to web3:

- Twitter: [@EvonAI](https://twitter.com/evonai)
- Discord: [Join the Chat](#)
- GitHub: [github.com/Evonai1](https://github.com/Evonai1)

---

## 🧾 License

MIT © 2025 [EvonAI](https://github.com/Evonai1) — free to use, fork, and contribute.
