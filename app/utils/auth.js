import bcrypt from 'bcryptjs';
import { useSearchParams } from "react-router-dom";

class UtilityService {
  
  getResPassParam() {
    const [searchParams] = useSearchParams();
    const codexid = searchParams.get("codexid");
    const codeyid = searchParams.get("codeyid");
    return { codexid, codeyid };
  }

  bcryptHashingForgotPassX(codexID) {
    let codexIdAlphaNumStr = bcrypt.hashSync(codexID, 10);
    return codexIdAlphaNumStr;
  }

  bcryptHashingForgotPassY(codeyID) {
    let codeyIdAlphaNumStr = bcrypt.hashSync(codeyID, 10);
    return codeyIdAlphaNumStr;
  }

  async bcryptCompareResetPassX(codexid, codex) {
    const matchX = await bcrypt.compare(codexid, codex);
    return matchX;
  }

  async bcryptCompareResetPassY(codeyid, codey) {
    const matchY = await bcrypt.compare(codeyid, codey);
    return matchY;
  }
}

export default new UtilityService();
