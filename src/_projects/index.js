import MetaverseSocketServer from "@/_projects/3DMetaverseSocketServer";
import LiveCommerceService from "@/_projects/LiveCommerceService";
import MediAPIServer from "@/_projects/MediAPIServer";
import MediBackOfficeServer from "@/_projects/MediBackOfficeServer";
import NFTMarketplace from "@/_projects/NFTMarketplace";
import WebRTCMediaChatService from "@/_projects/WebRTCMediaChatService";

export default [
  MediBackOfficeServer,
  MediAPIServer,
  LiveCommerceService,
  WebRTCMediaChatService,
  MetaverseSocketServer,
  NFTMarketplace,
].sort((a, b) => (b.start > a.start ? 1 : -1));
