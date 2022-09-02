import axios from "axios";

export default axios.create(
    {
        baseURL:'https://api.unsplash.com',
        headers: {
            Authorization:
            'Client-ID i2u0MBy4vr0Li5cOe78IBz73aGR1rK8u7XZ8UGIpEx8'
    }
}
);