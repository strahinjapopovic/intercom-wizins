import bcrypt from 'bcryptjs';
import { useSearchParams } from "react-router-dom";
//--------------------------------------------------------------------
export const GetResPassParam = () => {
  const [searchParams] = useSearchParams();
  const codexid = searchParams.get("codexid");
  const codeyid = searchParams.get("codeyid");
  return { codexid, codeyid };
}
export const BcryptHashingForgotPassX = (codexID: string) => {
  let codexIdAlphaNumStr = bcrypt.hashSync(codexID, 10);
  return codexIdAlphaNumStr;
}
export const BcryptHashingForgotPassY = (codeyID: string) => {
  let codeyIdAlphaNumStr = bcrypt.hashSync(codeyID, 10);
  return codeyIdAlphaNumStr;
}
export const BcryptCompareResetPassX = async (codexid: string, codex: string) => {
  const matchX = await bcrypt.compare(codexid, codex);
  return matchX;
}
export const BcryptCompareResetPassY = async (codeyid: string, codey: string) => {
  const matchY = await bcrypt.compare(codeyid, codey);
  return matchY;
}

