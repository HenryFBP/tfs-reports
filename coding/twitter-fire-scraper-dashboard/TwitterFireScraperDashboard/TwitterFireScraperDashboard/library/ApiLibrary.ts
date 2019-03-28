﻿import request = require('request');
import url = require('url')

export class ApiLibrary {
    /**
 * @param host Host of web API.
 * @param port Port of web API.
 * @param path Path to web API info.
 * 
 * Checks if the twitter-fire-scraper-webapi is functioning correctly.
 */
    host: string;
    port: string;

    constructor(
        host: string = "http://127.0.0.1",
        port: string = "3620") {

        this.host = host;
        this.port = port;
    }

    check_api(path: string = "info") {
        var uri = new url.URL(this.host)
        uri.port = this.port.toString()
        uri.pathname = path

        return new Promise((resolve, reject) => {
            request(uri.href, (err, res, body) => {
                if (err) {
                    resolve(false)
                }

                if (body === "twitter-fire-scraper-webapi") {
                    console.log("It's the real API.")
                    resolve(true)
                }
                else {
                    resolve(false)
                }
            })
        })
    }

    scrape_terms(terms: Array<String>, count: Number): Array<Object> {
        return [{}]
    }

}