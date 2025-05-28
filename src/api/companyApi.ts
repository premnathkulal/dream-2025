import axiosInstance from "./axiosInstance";
import { Company } from "../types/company";

export const createCompany = (formData: FormData): Promise<Company> => {
  return axiosInstance
    .post<Company>("/companies/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => res.data);
};

export const getCompanyById = (id: number): Promise<Company> => {
  return axiosInstance.get<Company>(`/companies/${id}`).then((res) => res.data);
};

export const getAllCompanies = (): Promise<Company[]> => {
  return axiosInstance.get<Company[]>("/companies").then((res) => res.data);
};
