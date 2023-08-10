import MetaverseSocketServer from "./3DMetaverseSocketServer";
import LiveCommerceService from "./LiveCommerceService";
import MedienceAPIServer from "./MedienceAPIServer";
import MedienceBackOfficeServer from "./MedienceBackOfficeServer";
import NFTMarketplace from "./NFTMarketplace";
import WebRTCMediaChatService from "./WebRTCMediaChatService";

export default [
  MedienceBackOfficeServer,
  MedienceAPIServer,
  LiveCommerceService,
  WebRTCMediaChatService,
  MetaverseSocketServer,
  NFTMarketplace,
].sort((a, b) => (b.start > a.start ? 1 : -1));
