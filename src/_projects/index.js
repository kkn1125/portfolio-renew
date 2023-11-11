import MetaverseSocketServer from "@/_projects/3DMetaverseSocketServer";
import LiveCommerceService from "@/_projects/LiveCommerceService";
import MediAPIServer from "@/_projects/MediAPIServer";
import MediBackOfficeServer from "@/_projects/MediBackOfficeServer";
import NFTMarketplace from "@/_projects/NFTMarketplace";
import WebRTCMediaChatService from "@/_projects/WebRTCMediaChatService";
import { sortImportantList, sortList, sortShowList } from "@/util/tool";

export default [
  MediBackOfficeServer,
  MediAPIServer,
  LiveCommerceService,
  WebRTCMediaChatService,
  MetaverseSocketServer,
  NFTMarketplace,
]
  .sort(sortShowList)
  .reduce(
    (acc, item) => {
      if (item.listOpen) {
        acc[0].push(item);
      } else {
        acc[1].push(item);
      }
      return acc;
    },
    [[], []]
  )
  .map((ac) => ac.sort(sortList).sort(sortImportantList))
  .flat(1);
