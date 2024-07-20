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


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_08_50_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ4LFxuICAgICAgICAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjExLFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOSxcbiAgICAgICAgODcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJ2RUpBanpxWit5SWNBWXlsY0J5a2RSa25ZUFk2YlZLTGFmTTZxTWtBTnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzcxNjk3NzgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMTZGQTdENTY0NUFEN0NFRjZEMzYyM0QzODcwOUVDRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NjU0MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVDBYV0ZNMmhTVS1aeUJ3dmROMEJLd1wiLFxuICBcInBob25lSWRcIjogXCI1ZjVkNWFlYS03MWM3LTRjNjAtOGJjNi1mOGI0ODNjNGJjNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICA5MyxcbiAgICAgIDk5LFxuICAgICAgMzgsXG4gICAgICA5NSxcbiAgICAgIDE2OCxcbiAgICAgIDIzMixcbiAgICAgIDIzOSxcbiAgICAgIDExMSxcbiAgICAgIDE2MixcbiAgICAgIDIzMCxcbiAgICAgIDE0OCxcbiAgICAgIDU3LFxuICAgICAgMTIxLFxuICAgICAgMTI0LFxuICAgICAgOTMsXG4gICAgICA1LFxuICAgICAgMjQ2LFxuICAgICAgODAsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA1LFxuICAgICAgMTAyLFxuICAgICAgMjUyLFxuICAgICAgMjU1LFxuICAgICAgMTc4LFxuICAgICAgMTc3LFxuICAgICAgNjQsXG4gICAgICA1NCxcbiAgICAgIDE4MCxcbiAgICAgIDU2LFxuICAgICAgMjM4LFxuICAgICAgMjA1LFxuICAgICAgMjQxLFxuICAgICAgMTg1LFxuICAgICAgMjIwLFxuICAgICAgMTEyLFxuICAgICAgNzMsXG4gICAgICA4LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZIOVJIMk1RXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzE2OTc3ODI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4OTMyNTEyODMzNTk0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU80NGNjR0VNMzA3YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzME55emF2YVM2RVFtME1OVFQyVjZ2NVNBMkFpYTdwSlNBVXExK0ZTT1NVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNGN0xmdlBLNHNYVHhrelFFZnQyWkc1SGdxOWhuTkRyY0FPeGJtWk1idFQ2elZNWFVET0xGM25OejBqaG5PeHN5SUM3WXF5cWFMbSsrcXlJL1hiMkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlU5UmlZRUdOcXZyRmVBMFZMMHN6QVZpZXg5MkpjY3ZTdUhudDVJOCs0SnVpNFVzVGtCYjNNS0syaXNucUVXT1RWTDR3TEUvaTRiZ2NtQjFrVU9vTWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3MTY5Nzc4MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ2NTQyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUExaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTFoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRU9uL1dmeDVsUjh0eTd0SzVzMkNxWnpuVUQ1Sk9wd2JRM2JxN2tQZ2ZCaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzYxMTA2OTQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NjU0MzA3MzRcIn0iCn0="
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
