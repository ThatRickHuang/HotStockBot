import { REST, Routes, SlashCommandBuilder } from "discord.js";
import "dotenv/config";

const rest = new REST().setToken(process.env.TOKEN);

//implmenting all slash commands
const slashResgister = async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      {
        body: [
          //finding lowest price command
          new SlashCommandBuilder()
            .setName("low")
            .setDescription("Finds lowest price of the day")
            .addStringOption((option) => {
              return option
                .setName("ticker_symbol")
                .setDescription("The ticker symbol of the stock")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("year")
                .setDescription("The year")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("month")
                .setDescription("The month")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("day")
                .setDescription("The day")
                .setRequired(true);
            }),
          //finding highest price command
          new SlashCommandBuilder()
            .setName("high")
            .setDescription("Finds highest price of the day")
            .addStringOption((option) => {
              return option
                .setName("ticker_symbol")
                .setDescription("The ticker symbol of the stock")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("year")
                .setDescription("The year")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("month")
                .setDescription("The month")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("day")
                .setDescription("The day")
                .setRequired(true);
            }),
          //finding open price command
          new SlashCommandBuilder()
            .setName("open")
            .setDescription("Finds open price of the day")
            .addStringOption((option) => {
              return option
                .setName("ticker_symbol")
                .setDescription("The ticker symbol of the stock")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("year")
                .setDescription("The year")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("month")
                .setDescription("The month")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("day")
                .setDescription("The day")
                .setRequired(true);
            }),
          //finding close price command
          new SlashCommandBuilder()
            .setName("close")
            .setDescription("Finds close price of the day")
            .addStringOption((option) => {
              return option
                .setName("ticker_symbol")
                .setDescription("The ticker symbol of the stock")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("year")
                .setDescription("The year")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("month")
                .setDescription("The month")
                .setRequired(true);
            })
            .addStringOption((option) => {
              return option
                .setName("day")
                .setDescription("The day")
                .setRequired(true);
            }),
          //finding current price command
          new SlashCommandBuilder()
            .setName("current_price")
            .setDescription("Finds real-time price")
            .addStringOption((option) => {
              return option
                .setName("ticker_symbol")
                .setDescription("The ticker symbol of the stock")
                .setRequired(true);
            }),
        ],
      }
    );
  } catch (error) {
    console.error(error);
  }
};
slashResgister();
