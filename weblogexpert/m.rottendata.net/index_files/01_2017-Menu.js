ContentsTree = new CTree("ContentsTree");
ContentsTree.bAutoClose = true;
ContentsTree.stTarget = "Main";
f1 = ContentsTree.AddNode(null, "General Statistics", "01_2017-General_Statistics.htm");
ContentsTree.AddNode(f1, "Summary", "01_2017-General_Statistics.htm#Summary");
f2 = ContentsTree.AddNode(null, "Activity Statistics", "01_2017-Activity_Statistics.htm");
ContentsTree.AddNode(f2, "Daily", "01_2017-Activity_Statistics.htm#Daily");
ContentsTree.AddNode(f2, "By Hour of Day", "01_2017-Activity_Statistics.htm#By_Hour_of_Day");
ContentsTree.AddNode(f2, "By Day of Week", "01_2017-Activity_Statistics.htm#By_Day_of_Week");
ContentsTree.AddNode(f2, "By Week", "01_2017-Activity_Statistics.htm#By_Week");
ContentsTree.AddNode(f2, "By Month", "01_2017-Activity_Statistics.htm#By_Month");
f3 = ContentsTree.AddNode(null, "Access Statistics", "01_2017-Access_Statistics.htm");
ContentsTree.AddNode(f3, "Pages", "01_2017-Access_Statistics.htm#Pages");
ContentsTree.AddNode(f3, "Files", "01_2017-Access_Statistics.htm#Files");
ContentsTree.AddNode(f3, "Images", "01_2017-Access_Statistics.htm#Images");
ContentsTree.AddNode(f3, "Others", "01_2017-Access_Statistics.htm#Others");
ContentsTree.AddNode(f3, "Directories", "01_2017-Access_Statistics.htm#Directories");
ContentsTree.AddNode(f3, "Pages and Queries", "01_2017-Access_Statistics.htm#Pages_and_Queries");
ContentsTree.AddNode(f3, "Pages per Visitor", "01_2017-Access_Statistics.htm#Pages_per_Visitor");
ContentsTree.AddNode(f3, "View Time", "01_2017-Access_Statistics.htm#View_Time");
ContentsTree.AddNode(f3, "Time Taken", "01_2017-Access_Statistics.htm#Time_Taken");
ContentsTree.AddNode(f3, "Entry Pages", "01_2017-Access_Statistics.htm#Entry_Pages");
ContentsTree.AddNode(f3, "Exit Pages", "01_2017-Access_Statistics.htm#Exit_Pages");
ContentsTree.AddNode(f3, "Bounces", "01_2017-Access_Statistics.htm#Bounces");
ContentsTree.AddNode(f3, "Paths", "01_2017-Access_Statistics.htm#Paths");
ContentsTree.AddNode(f3, "File Types", "01_2017-Access_Statistics.htm#File_Types");
f4 = ContentsTree.AddNode(null, "Visitors", "01_2017-Visitors.htm");
ContentsTree.AddNode(f4, "Hosts", "01_2017-Visitors.htm#Hosts");
ContentsTree.AddNode(f4, "Top-Level Domains", "01_2017-Visitors.htm#Top_Level_Domains");
ContentsTree.AddNode(f4, "Countries", "01_2017-Visitors.htm#Countries");
ContentsTree.AddNode(f4, "US States", "01_2017-Visitors.htm#US_States");
ContentsTree.AddNode(f4, "Cities", "01_2017-Visitors.htm#Cities");
f5 = ContentsTree.AddNode(null, "Referrers", "01_2017-Referrers.htm");
ContentsTree.AddNode(f5, "Referring Sites", "01_2017-Referrers.htm#Referring_Sites");
ContentsTree.AddNode(f5, "Referring URLs", "01_2017-Referrers.htm#Referring_URLs");
ContentsTree.AddNode(f5, "Search Engines", "01_2017-Referrers.htm#Search_Engines");
ContentsTree.AddNode(f5, "Engines and Phrases", "01_2017-Referrers.htm#Engines_and_Phrases");
ContentsTree.AddNode(f5, "Search Phrases", "01_2017-Referrers.htm#Search_Phrases");
ContentsTree.AddNode(f5, "Search Keywords", "01_2017-Referrers.htm#Search_Keywords");
ContentsTree.AddNode(f5, "Entry Pages / Engines", "01_2017-Referrers.htm#Entry_Pages___Engines");
ContentsTree.AddNode(f5, "Entry Pages / Phrases", "01_2017-Referrers.htm#Entry_Pages___Phrases");
ContentsTree.AddNode(f5, "Paths / Phrases", "01_2017-Referrers.htm#Paths___Phrases");
ContentsTree.AddNode(f5, "Phrases / Entry Pages", "01_2017-Referrers.htm#Phrases___Entry_Pages");
f6 = ContentsTree.AddNode(null, "Browsers", "01_2017-Browsers.htm");
ContentsTree.AddNode(f6, "Browsers", "01_2017-Browsers.htm#Browsers");
ContentsTree.AddNode(f6, "IE and Edge Versions", "01_2017-Browsers.htm#IE_and_Edge_Versions");
ContentsTree.AddNode(f6, "Firefox Versions", "01_2017-Browsers.htm#Firefox_Versions");
ContentsTree.AddNode(f6, "Chrome Versions", "01_2017-Browsers.htm#Chrome_Versions");
ContentsTree.AddNode(f6, "Opera Versions", "01_2017-Browsers.htm#Opera_Versions");
ContentsTree.AddNode(f6, "Browsers / Countries", "01_2017-Browsers.htm#Browsers___Countries");
ContentsTree.AddNode(f6, "Operating Systems", "01_2017-Browsers.htm#Operating_Systems");
ContentsTree.AddNode(f6, "Browsers and OS", "01_2017-Browsers.htm#Browsers_and_OS");
ContentsTree.AddNode(f6, "Device Types", "01_2017-Browsers.htm#Device_Types");
ContentsTree.AddNode(f6, "Spiders", "01_2017-Browsers.htm#Spiders");
ContentsTree.AddNode(f6, "Spidered Pages", "01_2017-Browsers.htm#Spidered_Pages");
ContentsTree.AddNode(f6, "Spider Hosts", "01_2017-Browsers.htm#Spider_Hosts");
f7 = ContentsTree.AddNode(null, "Errors", "01_2017-Errors.htm");
ContentsTree.AddNode(f7, "Types", "01_2017-Errors.htm#Types");
ContentsTree.AddNode(f7, "404 Errors", "01_2017-Errors.htm#404_Errors");
ContentsTree.AddNode(f7, "Other Errors", "01_2017-Errors.htm#Other_Errors");
ContentsTree.AddNode(f7, "Status Codes", "01_2017-Errors.htm#Status_Codes");
query = window.location.search;
if (query.substring(0, 1) == "?") query = query.substring(1);
if (query != "") {
pNode = ContentsTree.GetLastNodeByURL(query);
if (pNode) pNode.pParent.bOpen = true; }
document.write(ContentsTree.GetHTMLCode());