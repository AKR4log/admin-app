"use client";

import axios from "axios";
import axiosClassic from "./default";

export const GeneralService = {
  async login(password: string, email: string) {
    try {
      const data = await axiosClassic.post("/auth/login-adm", {
        password: password,
        email: email,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          return "Не верны введены данные, измените чтобы войти";
        } else if (error.response?.status === 404) {
          return "Данного пользователя не существует или у данного пользователя нет прав";
        }
      } else {
        return error;
      }
    }
  },

  async upload(query: string, formData: FormData, token: string) {
    try {
      const upload = axios.create({
        baseURL: "http://localhost:4200/v1",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await upload.post(`/media?folder=${query}`, formData);
      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          return `ERROR HTTPS: ${error.response.status}`;
        } else if (error.response?.status === 404) {
          return "Данного пользователя не существует или у данного пользователя нет прав";
        }
      } else {
        return "error";
      }
    }
  },
};

export const BrandService = {
  async getBrand() {
    try {
      return (await axiosClassic.get("/brand")).data;
    } catch (error) {
      return error;
    }
  },
  async createBrand(name: string, image: string) {
    try {
      return await axiosClassic.post("/brand", {
        name: name,
        avatarPath: image,
      });
    } catch (error) {
      return error;
    }
  },
};

export const CategoryService = {
  async getCategoryById(id: string) {
    try {
      return (await axiosClassic.get(`/category/${id}`)).data;
    } catch (error) {
      return error;
    }
  },
  async getCategory() {
    try {
      return (await axiosClassic.get("/category")).data;
    } catch (error) {
      return error;
    }
  },
  async createCategory(name: string, image: string) {
    try {
      return await axiosClassic.post("/category", {
        name: name,
        avatarPath: image,
      });
    } catch (error) {
      return error;
    }
  },
};
