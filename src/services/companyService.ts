import { createCompany } from "../api/companyApi";
import { Company } from "../types/company";

export const registerCompany = async (
  name: string,
  logo: File
): Promise<Company> => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("logo", logo);

  return await createCompany(formData);
};
