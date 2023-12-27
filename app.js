import Discord from "discord.js";
import { GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { fetchStockPrice, fetchStockName } from "./functions.js";

//init variables
let x = 0;
let name = 0;

//All intents
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
});

//Let console know the bot is logged on
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//creating commands
client.on("interactionCreate", async (interaction) => {
  //command for lowest price
  if (interaction.isCommand()) {
    if (interaction.commandName === "low") {
      const tickRecieved = interaction.options.getString("ticker_symbol");
      const yearRecieved = interaction.options.getString("year");
      const monthRecieved = interaction.options.getString("month");
      const dayRecieved = interaction.options.getString("day");
      x = await fetchStockPrice(
        tickRecieved.toUpperCase(),
        yearRecieved,
        monthRecieved,
        dayRecieved
      );
      name = await fetchStockName(tickRecieved.toUpperCase());
      if (x === undefined || x.status === "ERROR" || x.status === "NOT_FOUND") {
        interaction.reply("Unable to find price");
      } else {
        interaction.reply(
          `${tickRecieved.toUpperCase()}` +
            "\n" +
            name.name +
            "\n" +
            `low: $${x.low}`
        );
      }
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  //command for highest price
  if (interaction.isCommand()) {
    if (interaction.commandName === "high") {
      const tickRecieved = interaction.options.getString("ticker_symbol");
      const yearRecieved = interaction.options.getString("year");
      const monthRecieved = interaction.options.getString("month");
      const dayRecieved = interaction.options.getString("day");
      x = await fetchStockPrice(
        tickRecieved.toUpperCase(),
        yearRecieved,
        monthRecieved,
        dayRecieved
      );
      name = await fetchStockName(tickRecieved.toUpperCase());
      if (x === undefined || x.status === "ERROR" || x.status === "NOT_FOUND") {
        interaction.reply("Unable to find price");
      } else {
        interaction.reply(
          `${tickRecieved.toUpperCase()}` +
            "\n" +
            name.name +
            "\n" +
            `high: $${x.high}`
        );
      }
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  //command for opening
  if (interaction.isCommand()) {
    if (interaction.commandName === "open") {
      const tickRecieved = interaction.options.getString("ticker_symbol");
      const yearRecieved = interaction.options.getString("year");
      const monthRecieved = interaction.options.getString("month");
      const dayRecieved = interaction.options.getString("day");
      x = await fetchStockPrice(
        tickRecieved.toUpperCase(),
        yearRecieved,
        monthRecieved,
        dayRecieved
      );
      name = await fetchStockName(tickRecieved.toUpperCase());
      if (x === undefined || x.status === "ERROR" || x.status === "NOT_FOUND") {
        interaction.reply("Unable to find price");
      } else {
        interaction.reply(
          `${tickRecieved.toUpperCase()}` +
            "\n" +
            name.name +
            "\n" +
            `open: $${x.open}`
        );
      }
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  //command for close
  if (interaction.isCommand()) {
    if (interaction.commandName === "close") {
      const tickRecieved = interaction.options.getString("ticker_symbol");
      const yearRecieved = interaction.options.getString("year");
      const monthRecieved = interaction.options.getString("month");
      const dayRecieved = interaction.options.getString("day");
      x = await fetchStockPrice(
        tickRecieved.toUpperCase(),
        yearRecieved,
        monthRecieved,
        dayRecieved
      );
      name = await fetchStockName(tickRecieved.toUpperCase());
      if (x === undefined || x.status === "ERROR" || x.status === "NOT_FOUND") {
        interaction.reply("Unable to find price");
      } else {
        interaction.reply(
          `${tickRecieved.toUpperCase()}` +
            "\n" +
            name.name +
            "\n" +
            `close: $${x.close}`
        );
      }
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  //command for current price
  if (interaction.isCommand()) {
    if (interaction.commandName === "current_price") {
      const tickRecieved = interaction.options.getString("ticker_symbol");
      x = await fetchStockName(tickRecieved.toUpperCase());
      if (x === undefined || x.status === "ERROR" || x.status === "NOT_FOUND") {
        interaction.reply("Unable to find price");
      } else {
        interaction.reply(
          `${tickRecieved.toUpperCase()}` +
            "\n" +
            x.name +
            "\n" +
            `Current Price: $${x.price}`
        );
      }
    }
  }
});

client.login(process.env.TOKEN);
