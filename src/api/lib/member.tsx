import { type AxiosResponse, AxiosError } from "axios";
import request from "../apiClient";
import { Member } from "../../types/member";

const API_NAME = "Blueprint Backend API";
const BASE = "/members";

export const getAllMembers = async (): Promise<AxiosResponse<Member[]>> => {
  try {
    const response = await request("GET", BASE);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("error", error);
      console.error(
        `${API_NAME} Error: ${error.message}`,
        error.response?.data,
      );
      throw new Error(
        `${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`,
      );
    }
    console.error("Unknown Error");
    throw new Error("Unknown Error");
  }
};

export const getMemberById = async (
  memberId: string,
): Promise<AxiosResponse<Member>> => {
  try {
    const response = await request("GET", BASE + `/${memberId}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        `${API_NAME} Error: ${error.message}`,
        error.response?.data,
      );
      throw new Error(
        `${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`,
      );
    }
    throw new Error("Unknown Error");
  }
};

export const addMember = async (
  user: Member,
): Promise<AxiosResponse<Member>> => {
  try {
    const response = await request("POST", BASE, JSON.stringify(user));
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        `${API_NAME} Error: ${error.message}`,
        error.response?.data,
      );
      throw new Error(
        `${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`,
      );
    }
    throw new Error("Unknown Error");
  }
};

export const updateMember = async (
  user: Member,
): Promise<AxiosResponse<Member>> => {
  try {
    const response = await request("PUT", BASE, JSON.stringify(user));
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        `${API_NAME} Error: ${error.message}`,
        error.response?.data,
      );
      throw new Error(
        `${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`,
      );
    }
    throw new Error("Unknown Error");
  }
};

export const deleteUser = async (
  memberId: string,
): Promise<AxiosResponse<void>> => {
  try {
    const response = await request("DELETE", BASE + `/${memberId}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        `${API_NAME} Error: ${error.message}`,
        error.response?.data,
      );
      throw new Error(
        `${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`,
      );
    }
    throw new Error("Unknown Error");
  }
};
