import { SiBuymeacoffee } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { SupportMe } from "@lib/types";

const supportOptions: SupportMe[] = [
  {
    name: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/unboxingbreak",
    Icon: SiBuymeacoffee,
  },
  {
    name: "PayPal",
    url: "https://paypal.me/chaoslegacy",
    Icon: BsPaypal,
  },
];

export default supportOptions;
