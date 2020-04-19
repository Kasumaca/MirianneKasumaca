const Discord = require('discord.js');
const config = 'Miri';
const client = new Discord.Client();

client.login(process.env.CTPfIgOYWSrX65myvHXdKumqllWVgRw9);


client.on("ready", () => {
	client.user.setActivity("hello!", {type: "STREAMING"}) 	
  console.log(`Mirianne đã sẵn sàng, với ${client.users.size} users, trong ${client.channels.size} channels của ${client.guilds.size} guilds.`); 
});
client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() == 'huk'){
        return message.channel.send(`Thưa cậu chủ <@` + `486068016128327682` + `>`);
      }
      if(message.content.toLowerCase() == 'thiq'){
        return message.channel.send(`Thưa ngài Thiq <@` + `508956376974753803` + `>, có người gọi ngài ạ`);
      }
      if(message.content.toLowerCase() == 'lox'){
        return message.channel.send(`Thưa ngài Lox <@` + `486068224333447168` + `> có người gọi`);
      }
      if(message.content.toLowerCase() == 'huyz'){
        return message.channel.send(`Thưa ngài Huyz <@` + `528365331639697419` + `>, có người đang cần ngài hiện về`);
      }
      if(message.content.toLowerCase() == 'vim'){
        return message.channel.send(`Ngài Vim <@` + `503219544907710467` + `> có người đang gọi ạ`);
      }
      if(message.content.toLowerCase() == 'link'){
        return message.channel.send(`Thưa cô <@` + `698030832186556506` + `> tôi gọi vì có người cần`);
      }
    if(message.content.startsWith(prefix + 'roles'))
    {
        const embed = new Discord.RichEmbed();
        embed.setTitle("Server Roles");
        embed.setColor("BLUE");
        embed.setDescription("<:black:636540235836030986> - Black\n" +
        "<:blue:636539904268042240> - Blue\n" +
        "<:red:636538785999486978> - Red\n" +
        "<:yellow:636538854836273172> - Yellow\n" +
        "<:green:636538829968506890> - Green\n");

        message.channel.send(embed);
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    var roleName = reaction.emoji.name;
    console.log(roleName);
});