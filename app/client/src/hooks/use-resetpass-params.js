import { useSearchParams } from "react-router-dom";

const getResPassParam = () => {
  const [searchParams] = useSearchParams();
  const codexid = searchParams.get("codexid");
  const codeyid = searchParams.get("codeyid");
  return { codexid, codeyid };
}

export default getResPassParam;