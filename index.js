const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

async function getPriceFeed() {
    try {
        const siteUrl = 'https://coinmarketcap.com/'

        const { data } = await axios({
            method: "GET",
            url: siteUrl,
        })

          const $ = cheerio.load(data)

          console.log($)
    } catch (err) {
        console.error(err)
    }
}

getPriceFeed()