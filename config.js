const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_23_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDI5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYwLFxuICAgICAgICA2MyxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICA0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDczLFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpmVzdiODN6ck9GNlU1NHI0bGVzQ2k3ajBjeHQySzJDVUZzbE10a0ZUdjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzcxNjk3NzgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOEQzODIyQTIzNDg2NThCMEUxOTNDNUZEMjlDQjk3NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNTc3NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTEdMMzJsUVhRLW1PUE9zX2w3Zm9Md1wiLFxuICBcInBob25lSWRcIjogXCJiMzA5N2NiOC1jYjRkLTRiNjctODBlYS04MTRkNGY3OTRjYzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDIzMyxcbiAgICAgIDIzMixcbiAgICAgIDE0OCxcbiAgICAgIDIxNCxcbiAgICAgIDk5LFxuICAgICAgMjIsXG4gICAgICA0NixcbiAgICAgIDE1LFxuICAgICAgNzcsXG4gICAgICA2NyxcbiAgICAgIDI5LFxuICAgICAgMjE1LFxuICAgICAgMTA4LFxuICAgICAgMTczLFxuICAgICAgMTI2LFxuICAgICAgMTg4LFxuICAgICAgOTMsXG4gICAgICA5NixcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg0LFxuICAgICAgMTM0LFxuICAgICAgMTkyLFxuICAgICAgNTEsXG4gICAgICA5NSxcbiAgICAgIDI3LFxuICAgICAgMjQxLFxuICAgICAgMTkzLFxuICAgICAgNzgsXG4gICAgICAxNTgsXG4gICAgICA0MyxcbiAgICAgIDE2MCxcbiAgICAgIDI0MCxcbiAgICAgIDEyOSxcbiAgICAgIDEyNSxcbiAgICAgIDI0LFxuICAgICAgNzQsXG4gICAgICAzOCxcbiAgICAgIDYxLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdMRkdGTEREXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzE2OTc3ODI6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ5NDU2OTUxMTExNzM4OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lLNDRjY0dFT3VacExRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMzBOeXphdmFTNkVRbTBNTlRUMlY2djVTQTJBaWE3cEpTQVVxMStGU09TVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUTEF1dlEzQ1l6RTRIamFKck5RMDRGRDUwN0RVM1ZlRmJaWVVGTHhlWXF1OGJNWWtLYndYTTlVUDZETlY5NHZPK015VlJpczlRTFhIRjE4R3QwaENCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrR3dpd0pZZEtjZWh4STN1a3Z5azJHUVBkUE1PK1BvdGkxY0c5ZlZFdzJyQW5BUzIrZXMvZzd2aVdqSGp5U1VQSUZ6YWpabk5FV09pYWt3bzVmTHJEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzE2OTc3ODI6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjU3Nzc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTS9oXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNL2guanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
