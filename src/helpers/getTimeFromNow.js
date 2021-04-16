import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function getTimeFromNow(epoch) {
  return dayjs.unix(epoch).fromNow();
}
