//token contract abi json
import TokenContractAbi from "./TokenContractAbi.json";

//token presale contract abi json
import PresaleContractAbi from "./PresaleContractAbi.json";

//token contract address
export const tokenContractAddress =
  "0x4e1C1BD35397042319Fe252d2e324ad439B19f1e";

// old Token "0x718ba7405F48C5d9A0B35d2527F914aB4BBcF0bE";

//token presale contract address
export const presaleContractAddress =
  "0xf811771a4a36D9641EFe00Eb44ADF08174F7F970";
//  old abi// "0xaC348406872c083Ece10848E0337F4be4A1AD1Ce";

//payment with (eg. ETH, BNB, MATIC etc.)
export const ActiveChain = 56;

//token contract configuration
export const tokenContractConfig = {
  address: tokenContractAddress,
  abi: TokenContractAbi,
};

//token Presale contract configuration
export const presaleContractConfig = {
  address: presaleContractAddress,
  abi: PresaleContractAbi,
};
