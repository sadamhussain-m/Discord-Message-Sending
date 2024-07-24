const { EmbedBuilder, WebhookClient,AttachmentBuilder } = require('discord.js');

const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/https://discord.com/api/webhooks/1265454877769990187/gQTz4G62l3raX5ZAIMXQ2p75zHW-uCNC1mpY_VIs_nqcp2niRmz1WJosNvV5FLQJ1TYK' });


const imageFile=new AttachmentBuilder('23569861-sample-grunge-red-round-stamp.jpg');

const docFile=new AttachmentBuilder('sample.txt');

const embed = new EmbedBuilder()
	.setTitle('Sample title')
	.setColor(0x00FFFF)
    .setDescription('sample document');

webhookClient.send({
	content: 'Sample Text document',
	username: 'some-username',
	avatarURL: 'https://i.imgur.com/AfFp7pu.png',
	embeds: [embed],
    files:[docFile]
});