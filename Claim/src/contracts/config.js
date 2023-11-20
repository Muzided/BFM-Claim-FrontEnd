//token contract abi json
import TokenContractAbi from "./TokenContractAbi.json";

//token presale contract abi json
import PresaleContractAbi from "./PresaleContractAbi.json";

//token contract address
export const tokenContractAddress =
  "0xcf7f92a80f6e6cF87936f12Ef41CE39a9bd47238";

// old Token "0x718ba7405F48C5d9A0B35d2527F914aB4BBcF0bE";

//token presale contract address
export const presaleContractAddress =
  "0x85d4C5325a9539D1c6604EFf356E4fA67EE5EfD7";
//  old abi// "0xaC348406872c083Ece10848E0337F4be4A1AD1Ce";

//payment with (eg. ETH, BNB, MATIC etc.)
export const ActiveChain = 97;

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
