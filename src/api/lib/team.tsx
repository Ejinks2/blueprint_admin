import { type AxiosResponse, AxiosError } from "axios";
import request from "../apiClient";
import { Team } from "../../types/team";

const API_NAME = "Blueprint Backend API";
const BASE = "/teams";

export const getAllTeams = async (): Promise<AxiosResponse<Team[]>> => {
  try {
    const response = await request("GET", BASE);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        `${API_NAME} Error: ${error.message}`,
        error.response?.data
      );
      throw new Error(
        `${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`
      );
    }
    throw new Error("Unknown Error");
  }
};

export const getTeam = async (teamId: string): Promise<AxiosResponse> => {
  try {
    const response = await request("GET", BASE + `/${teamId}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        `${API_NAME} Error: ${error.message}`,
        error.response?.data
      );
      throw new Error(
        `${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`
      );
    }
    throw new Error("Unknown Error");
  }
};
