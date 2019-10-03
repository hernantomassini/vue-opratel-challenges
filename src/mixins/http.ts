import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';

interface GenericObject { [key: string]: any; }

@Component
export default class HttpMixin extends Vue {

  public get = async <T>(url: string): Promise<T> => {
    const response = await axios.get(url);
    return response.data;
  }

  public post = <T>(url: string, data: GenericObject): Promise<T> => {
    return axios.post(url, data);
  }

  public put = <T>(url: string, data: GenericObject): Promise<T> => {
    return axios.put(url, data);
  }

  public delete = <T>(url: string): Promise<T> => {
    return axios.delete(url);
  }
}
